// EmailJS Configuration
// Get these values from https://dashboard.emailjs.com/

export const EMAILJS_CONFIG = {
  publicKey: 'YOUR_PUBLIC_KEY_HERE',
  serviceId: 'YOUR_SERVICE_ID_HERE',
  templateId: 'YOUR_TEMPLATE_ID_HERE',
}

// SETUP INSTRUCTIONS:
// 1. Go to https://www.emailjs.com/ and sign up (free)
// 2. Create an Email Service for Gmail:
//    - Login to your Gmail account
//    - Generate an App Password (not regular password)
//    - Add the Gmail service in EmailJS dashboard
// 3. Create an Email Template with these variables:
//    - {{to_email}} - Will be set to your email (muzammilkhaliq.cs@gmail.com)
//    - {{from_name}} - Sender's name
//    - {{from_email}} - Sender's email
//    - {{message}} - Message content
// 4. Copy the following and paste in this file:
//    - Public Key from Settings > API Keys
//    - Service ID from Email Services
//    - Template ID from Email Templates
