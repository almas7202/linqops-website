# Contact Form Email Setup Guide

This guide explains how to set up the email functionality for the contact form using EmailJS.

## EmailJS Setup

1. **Create an EmailJS account**
   - Go to [EmailJS](https://www.emailjs.com/) and sign up for an account
   - The free plan allows 200 emails per month which should be sufficient for most small websites

2. **Create an Email Service**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the instructions to connect your email account

3. **Create an Email Template**
   - Go to "Email Templates" in your dashboard
   - Click "Create New Template"
   - Design your email template with the following variables:
     - `{{from_name}}` - The name of the person who submitted the form
     - `{{from_email}}` - The email address of the person who submitted the form
     - `{{phone_number}}` - The phone number provided in the form
     - `{{message}}` - The message content from the form

   Example template:
   ```
   Subject: New Contact Form Submission from {{from_name}}

   Name: {{from_name}}
   Email: {{from_email}}
   Phone: {{phone_number}}

   Message:
   {{message}}
   ```

4. **Update the Contact.tsx file**
   - Open `/src/pages/Contact.tsx`
   - Replace the placeholder values with your actual EmailJS credentials:
     - Replace `'YOUR_EMAILJS_USER_ID'` with your EmailJS User ID (found in Account > API Keys)
     - Replace `'YOUR_SERVICE_ID'` with your Email Service ID
     - Replace `'YOUR_TEMPLATE_ID'` with your Email Template ID

## Security Considerations

For production deployment, consider:

1. **Environment Variables**: Store your EmailJS credentials in environment variables instead of hardcoding them
2. **Rate Limiting**: Implement rate limiting to prevent abuse of your contact form
3. **CAPTCHA**: Consider adding a CAPTCHA to prevent spam submissions

## Testing

To test the contact form:
1. Fill out the form with valid information
2. Submit the form
3. Check if you receive the email notification
4. Verify that the success message appears to the user

If you encounter any issues, check the browser console for error messages.
