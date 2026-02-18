'use client'

import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

export default function TestDbPage() {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')
  const [details, setDetails] = useState<Record<string, unknown> | Error | null>(null)
  
  useEffect(() => {
    async function checkConnection() {
      try {
        const supabase = createClient()
        
        // 1. Check if we can talk to Supabase
        const { error } = await supabase.from('profiles').select('count', { count: 'exact', head: true })
        
        if (error) {
          // If the table doesn't exist, we might get a 404 or specific error, 
          // but receiving ANY error from Supabase means we ARE connected.
          throw error
        }
        
        setStatus('success')
        setMessage('Connected to Supabase successfully!')
        setDetails({
          url: process.env.NEXT_PUBLIC_SUPABASE_URL ? 'Configured ✅' : 'Missing ❌',
          key: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'Configured ✅' : 'Missing ❌',
          profilesTableReachable: true
        })
        
      } catch (err: unknown) {
        setStatus('error')
        // Differentiate between "Network Error" (not connected) and "Database Error" (connected but failing)
        const message = err instanceof Error ? err.message : String(err)
        if (message === 'Failed to fetch') {
           setMessage('Network Error: Could not reach Supabase. Check your internet or URL.')
        } else {
           setMessage(`Connected to Supabase, but received error: ${message}`)
           setDetails(err instanceof Error ? { message: err.message, name: err.name } : err)
        }
      }
    }
    
    checkConnection()
  }, [])

  return (
    <div className="p-10 font-sans max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Database Connection Test</h1>
      
      <div className={`p-4 rounded-lg border ${
        status === 'loading' ? 'bg-gray-100 border-gray-300' :
        status === 'success' ? 'bg-green-100 border-green-300 text-green-800' :
        'bg-red-100 border-red-300 text-red-800'
      }`}>
        <p className="font-semibold text-lg">
          {status === 'loading' && 'Testing connection...'}
          {status === 'success' && '✅ Connection Successful'}
          {status === 'error' && '❌ Connection Issues'}
        </p>
        <p className="mt-2">{message}</p>
      </div>

      {details && (
        <pre className="mt-6 p-4 bg-slate-900 text-slate-50 rounded-lg overflow-auto text-sm">
          {JSON.stringify(details, null, 2)}
        </pre>
      )}
      
      <div className="mt-8">
        <h3 className="font-bold mb-2">Diagnosis:</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>If this says <b>Connected</b>, your frontend is fine. The 500 error is 100% inside the database (Triggers/RLS).</li>
          <li>If this fails with <b>Network Error</b>, your `.env.local` URL is wrong.</li>
          <li>If this fails with <b>Auth/Key Error</b>, your Anon Key is wrong.</li>
        </ul>
      </div>
    </div>
  )
}
