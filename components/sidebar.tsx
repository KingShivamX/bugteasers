'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/lib/auth/auth-context'

export function Sidebar() {
  const pathname = usePathname()
  const { profile } = useAuth()

  const isInstructor = profile?.role === 'instructor'

  const links = isInstructor
    ? [
        { href: '/dashboard/instructor', label: 'Dashboard', icon: DashboardIcon },
        { href: '/dashboard/instructor/classrooms', label: 'Classrooms', icon: ClassroomIcon },
      ]
    : [
        { href: '/dashboard/student', label: 'Dashboard', icon: DashboardIcon },
      ]

  return (
    <aside className="hidden lg:flex flex-col w-60 min-h-[calc(100vh-4rem)] border-r border-[var(--border-primary)] bg-white p-4 gap-1">
      {links.map((link) => {
        const isActive = pathname === link.href
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`
              flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors
              ${isActive
                ? 'bg-[var(--accent-primary)]/5 text-[var(--accent-primary)]'
                : 'text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]'
              }
            `}
          >
            <link.icon />
            {link.label}
          </Link>
        )
      })}
    </aside>
  )
}

function DashboardIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
    </svg>
  )
}

function ClassroomIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  )
}
