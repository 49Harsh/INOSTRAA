-- Create the contact_submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    service VARCHAR(255) NOT NULL,
    budget VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on created_at for better query performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at ON contact_submissions(created_at DESC);

-- Create an index on email for potential duplicate checking
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON contact_submissions(email);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows anyone to insert (for the contact form)
CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows anyone to read (for the admin dashboard)
-- In production, you might want to restrict this to authenticated users
CREATE POLICY "Anyone can read contact submissions" ON contact_submissions
    FOR SELECT USING (true);

-- Optional: Create a policy for updates (if needed later)
CREATE POLICY "Anyone can update contact submissions" ON contact_submissions
    FOR UPDATE USING (true);

-- Optional: Create a policy for deletes (if needed later)
CREATE POLICY "Anyone can delete contact submissions" ON contact_submissions
    FOR DELETE USING (true);