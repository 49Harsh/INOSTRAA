import { supabase, ContactFormData } from '@/lib/supabase'

export class ContactService {
  static async submitContactForm(formData: Omit<ContactFormData, 'id' | 'created_at'>) {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            company: formData.company || null,
            service: formData.service,
            budget: formData.budget || null,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])
        .select()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to submit form')
      }

      return { success: true, data }
    } catch (error) {
      console.error('Contact form submission error:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }

  static async getAllSubmissions() {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to fetch submissions')
      }

      return { success: true, data }
    } catch (error) {
      console.error('Fetch submissions error:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }

  static async getSubmissionStats() {
    try {
      const { count, error } = await supabase
        .from('contact_submissions')
        .select('*', { count: 'exact', head: true })

      if (error) {
        console.error('Supabase error:', error)
        throw new Error('Failed to fetch stats')
      }

      return { success: true, count }
    } catch (error) {
      console.error('Fetch stats error:', error)
      return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
    }
  }
}