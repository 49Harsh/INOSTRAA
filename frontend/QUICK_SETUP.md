# Quick Setup Guide

## 🚀 Setup Steps

### 1. Create Supabase Table
1. Go to your Supabase project: https://fhrpdwyoshzvygbegmrs.supabase.co
2. Click on "SQL Editor" in the sidebar
3. Copy and paste this SQL command:

```sql
CREATE TABLE contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    service VARCHAR(255) NOT NULL,
    budget VARCHAR(255),
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert contact submissions" ON contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Anyone can read contact submissions" ON contact_submissions
    FOR SELECT USING (true);
```

4. Click "Run" to execute

### 2. Test the Contact Form
1. Go to your website's `/contact` page
2. Fill out and submit the form
3. You should see a success message

### 3. Access Admin Dashboard
1. Go to `/admin` on your website
2. Enter password: `admin123`
3. View all contact submissions

## ✅ What's Been Added

- ✅ **Supabase Integration**: Contact form now saves to database
- ✅ **Admin Dashboard**: Secure route to view submissions at `/admin`
- ✅ **Real-time Stats**: Total, today, week, month submission counts
- ✅ **Responsive Design**: Works on all devices
- ✅ **Error Handling**: Proper error messages and loading states
- ✅ **Security**: Row Level Security enabled

## 🔐 Admin Access
- **URL**: `yourwebsite.com/admin`
- **Password**: `admin123`
- **Features**: View all submissions, statistics, expandable messages

## 📊 Database Schema
```
contact_submissions
├── id (UUID, Primary Key)
├── name (VARCHAR, Required)
├── email (VARCHAR, Required)
├── company (VARCHAR, Optional)
├── service (VARCHAR, Required)
├── budget (VARCHAR, Optional)
├── message (TEXT, Required)
└── created_at (TIMESTAMP, Auto-generated)
```

## 🛡️ Security Notes
- Change admin password in production
- Consider adding proper authentication
- Monitor for spam submissions
- Add rate limiting if needed

That's it! Your contact form is now connected to Supabase and you have a secure admin dashboard to view submissions.