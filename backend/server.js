import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = Number(process.env.PORT || 5000)
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) {
        callback(null, true)
        return
      }

      const isConfiguredFrontend = origin === frontendUrl
      const isLocalhostFrontend = /^http:\/\/localhost:\d+$/.test(origin)

      if (isConfiguredFrontend || isLocalhostFrontend) {
        callback(null, true)
        return
      }

      callback(new Error('Not allowed by CORS'))
    },
  })
)
app.use(express.json())

app.get('/health', (_req, res) => {
  res.status(200).json({ ok: true, message: 'Contact API is running' })
})

app.post('/send-message', async (req, res) => {
  try {
    const { name, email, message } = req.body || {}

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Name, email, and message are required.',
      })
    }

    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValidEmail) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address.',
      })
    }

    const emailUser = process.env.EMAIL_USER
    const emailAppPassword = process.env.EMAIL_APP_PASSWORD
    const emailTo = process.env.EMAIL_TO || 'muzammilkhaliq7894@gmail.com'

    if (!emailUser || !emailAppPassword) {
      return res.status(500).json({
        success: false,
        message: 'Server email configuration is missing.',
      })
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailAppPassword,
      },
    })

    const mailOptions = {
      from: `Portfolio Contact Form <${emailUser}>`,
      to: emailTo,
      replyTo: email,
      subject: `New Contact Message from ${name}`,
      text: `You have received a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${String(message).replace(/\n/g, '<br />')}</p>
      `,
    }

    await transporter.sendMail(mailOptions)

    return res.status(200).json({
      success: true,
      message: 'Message sent successfully.',
    })
  } catch (error) {
    console.error('Error in /send-message:', error)
    return res.status(500).json({
      success: false,
      message: 'Failed to send message. Please try again later.',
    })
  }
})

if (!process.env.VERCEL) {
  app.listen(port, () => {
    console.log(`Contact API listening on http://localhost:${port}`)
  })
}

export default app
