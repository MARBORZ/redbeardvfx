# redbeardvfx

Portfolio site for Rustam Masuev, a VFX supervisor and compositor. Client project.

React 19, TypeScript, Vite, SCSS modules. Folder layout follows Feature-Sliced Design. The contact form is a Vercel serverless function in `api/` that sends mail through Resend.

## Run

```bash
npm install
npm run dev
npm test
```

The form needs `RESEND_API_KEY` and `RESEND_TO_EMAIL` set in Vercel or a local `.env`.
