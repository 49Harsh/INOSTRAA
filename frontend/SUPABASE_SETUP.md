# Supabase Setup Instructions

## 1. Database Setup

1. Go to your Supabase project dashboard: https://fhrpdwyoshzvygbegmrs.supabase.co
2. Navigate to the SQL Editor
3. Copy and paste the contents of `supabase-setup.sql` file
4. Run the SQL commands to create the table and policies

## 2. Table Structure

The `contact_submissions` table will be created with the following columns:
- `id` (UUID, Primary Key)
- `name` (VARCHAR, Required)
- `email` (VARCHAR, Required) 
- `company` (VARCHAR, Optional)
- `service` (VARCHAR, Required)
- `budget` (VARCHAR, Optional)
- `message` (TEXT, Required)
- `created_at` (TIMESTAMP, Auto-generated)

## 3. Access the Admin Dashboard

1. Navigate to `/admin` on your website
2. Use the password: `admin123` (change this in production!)
3. View all contact form submissions with statistics

## 4. Security Notes

**Important for Production:**
- Change the admin password in `frontend/src/app/admin/page.tsx`
- Consider implementing proper authentication (JWT, OAuth, etc.)
- Restrict RLS policies to authenticated users only
- Add rate limiting to prevent spam submissions
- Validate and sanitize all form inputs server-side

## 5. Features Included

✅ **Contact Form Integration**
- Direct submission to Supabase
- Real-time validation
- Error handling
- Success feedback

✅ **Admin Dashboard**
- Password-protected access
- View all submissions
- Statistics overview (total, today, week, month)
- Expandable message view
- Responsive design

✅ **Database Features**
- Optimized indexes for performance
- Row Level Security enabled
- Automatic timestamps
- UUID primary keys

## 6. Testing

1. Fill out the contact form on your website
2. Check the admin dashboard to see the submission
3. Verify data is stored correctly in Supabase

## 7. Customization

You can customize:
- Admin password (line 25 in `/admin/page.tsx`)
- Form fields (add/remove in contact form)
- Dashboard styling and layout
- Statistics calculations
- Email notifications (add later)

## 8. Troubleshooting

**Common Issues:**
- **Form not submitting:** Check Supabase URL and API key
- **Admin dashboard empty:** Verify table was created correctly
- **Authentication issues:** Clear localStorage and try again
- **Network errors:** Check browser console for detailed errors