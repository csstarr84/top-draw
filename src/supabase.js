import { createClient } from '@supabase/supabase-js'

export const SUPABASE_URL = 'https://kyvalirbhrwpdthpmidr.supabase.co'
export const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_yxf7oo4wfui4nOKCJrUOzw_0DHO5_hk'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true
  }
})
