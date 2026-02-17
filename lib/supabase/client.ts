import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

// This client is used for server-side DB operations only (not auth).
// Uses the service_role key so it can bypass RLS for admin operations.
export const supabase = createClient(supabaseUrl, supabaseServiceKey)
