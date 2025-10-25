import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fhrpdwyoshzvygbegmrs.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZocnBkd3lvc2h6dnlnYmVnbXJzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjEzNzMyODcsImV4cCI6MjA3Njk0OTI4N30.4fjBZtZYGJRumNbnYJ0SuMaE56kXAJXzzJ2Gf8u87WY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our contact form data
export interface ContactFormData {
    id?: string
    name: string
    email: string
    company?: string
    service: string
    budget?: string
    message: string
    created_at?: string
}