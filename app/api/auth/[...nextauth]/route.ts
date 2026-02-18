import NextAuth, { type NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import bcrypt from 'bcryptjs'
import { supabase } from '@/lib/supabase/client'

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                console.log('[AUTH DEBUG] authorize() called')
                if (!credentials?.email || !credentials?.password) {
                    console.log('[AUTH DEBUG] Missing credentials')
                    throw new Error('Email and password are required')
                }

                console.log('[AUTH DEBUG] Looking up user:', credentials.email.toLowerCase().trim())

                // Look up user from the public.users table
                const { data: user, error } = await supabase
                    .from('users')
                    .select('*')
                    .eq('email', credentials.email.toLowerCase().trim())
                    .single()

                if (error) {
                    console.log('[AUTH DEBUG] Supabase error:', JSON.stringify(error))
                }
                if (!user) {
                    console.log('[AUTH DEBUG] No user found for email')
                    throw new Error('Invalid email or password')
                }

                console.log('[AUTH DEBUG] User found, id:', user.id, 'role:', user.role)
                console.log('[AUTH DEBUG] password_hash exists:', !!user.password_hash, 'length:', user.password_hash?.length)

                // Verify password
                const isValidPassword = await bcrypt.compare(
                    credentials.password,
                    user.password_hash
                )

                console.log('[AUTH DEBUG] Password valid:', isValidPassword)

                if (!isValidPassword) {
                    throw new Error('Invalid email or password')
                }

                // Return user object that NextAuth will encode into the JWT
                console.log('[AUTH DEBUG] Returning user object successfully')
                return {
                    id: user.id,
                    email: user.email,
                    name: user.full_name,
                    role: user.role,
                }
            },
        }),
    ],

    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },

    pages: {
        signIn: '/login',
        error: '/login',
    },

    callbacks: {
        async jwt({ token, user }) {
            // On initial sign-in, persist user fields to the JWT
            if (user) {
                token.id = user.id
                token.role = user.role ?? 'student'
                token.name = user.name
            }
            return token
        },
        async session({ session, token }) {
            // Expose user fields to the client session
            if (session.user) {
                session.user.id = token.id as string
                session.user.role = token.role as string
                session.user.name = token.name as string
            }
            return session
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
