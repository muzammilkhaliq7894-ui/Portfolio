# Contact Backend (Node.js + Express + Nodemailer)

This backend receives contact form data and sends it directly to:

- `muzammilkhaliq7894@gmail.com`

## Folder Structure

```
backend/
├── .env.example
├── .gitignore
├── package.json
├── server.js
├── vercel.json
└── public/
    └── index.html
```

## Features

- Express server
- `POST /send-message` endpoint
- Accepts `name`, `email`, `message`
- Gmail SMTP via Nodemailer and App Password
- CORS enabled
- JSON parsing with `express.json()`
- Proper error handling and success responses

## 1) Setup

1. Open terminal in `backend/`
2. Install dependencies:

```bash
npm install
```

3. Create `.env` file from `.env.example`

```bash
cp .env.example .env
```

For Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

4. Update `.env` values:

```env
PORT=5000
FRONTEND_URL=http://localhost:5173
EMAIL_USER=muzammilkhaliq7894@gmail.com
EMAIL_APP_PASSWORD=your_16_character_gmail_app_password
EMAIL_TO=muzammilkhaliq7894@gmail.com
```

## 2) Gmail App Password (Required)

Do not use your normal Gmail password.

1. Turn on 2-Step Verification in your Google account.
2. Go to Google Account -> Security -> App passwords.
3. Generate a new app password for Mail.
4. Paste that 16-character password into `EMAIL_APP_PASSWORD` in `.env`.

## 3) Run Backend

```bash
npm run dev
```

API runs at `http://localhost:5000`

Health check:

- `GET /health`

Send message endpoint:

- `POST /send-message`

Example JSON body:

```json
{
  "name": "Ali",
  "email": "ali@example.com",
  "message": "Hi, I want to discuss a project."
}
```

## 4) Frontend Integration (React)

Your React app calls:

- `POST ${VITE_CONTACT_API_URL}/send-message`

Set in frontend `.env`:

```env
VITE_CONTACT_API_URL=http://localhost:5000
```

## 5) Sample HTML Form

A plain HTML demo form is provided at:

- `backend/public/index.html`

It uses `fetch()` to call `/send-message` and shows success/error messages.

## 6) Deployment

### Option A: Render (Recommended)

1. Push repository to GitHub.
2. Create a new Web Service in Render.
3. Root Directory: `backend`
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Add environment variables in Render dashboard:
   - `PORT` = `10000` (or leave default)
   - `FRONTEND_URL` = your live frontend URL
   - `EMAIL_USER` = `muzammilkhaliq7894@gmail.com`
   - `EMAIL_APP_PASSWORD` = your Gmail app password
   - `EMAIL_TO` = `muzammilkhaliq7894@gmail.com`
7. Deploy and copy your Render backend URL.
8. In frontend host (Vercel/Netlify), set:
   - `VITE_CONTACT_API_URL` = your Render backend URL

### Option B: Vercel

1. Import project in Vercel.
2. Set Root Directory to `backend`.
3. Keep `vercel.json` in `backend/` (already included).
4. Add environment variables:
   - `FRONTEND_URL`
   - `EMAIL_USER`
   - `EMAIL_APP_PASSWORD`
   - `EMAIL_TO`
5. Deploy and update frontend `VITE_CONTACT_API_URL` with Vercel backend URL.

## Troubleshooting

- `Failed to send message`: check `EMAIL_APP_PASSWORD` and Gmail 2FA.
- CORS errors: check `FRONTEND_URL` exactly matches your frontend domain.
- 500 errors: verify all required env vars are set.
