# Sidramappa B — Portfolio

A responsive React + TypeScript personal portfolio inspired by modern engineering portfolio layouts.

## Run locally
1. Install Node.js LTS from https://nodejs.org/
2. Open this folder in VS Code.
3. Open Terminal and run:
   npm install
   npm run dev
4. Open the localhost URL shown by Vite (usually http://localhost:5173).

## Customize before publishing
- In `src/App.tsx`, replace the placeholder GitHub, LinkedIn and email links.
- Put your resume in `public/Sidramappa_Resume.pdf`.
- Edit projects/experience in the arrays at the top of `src/App.tsx`.

## Production build
npm run build
npm run preview

## Publish with Vercel
1. Push this folder to a GitHub repository.
2. Sign in to Vercel and choose **Add New > Project**.
3. Import the GitHub repository.
4. Vercel detects Vite. Click **Deploy**.
5. You receive a public HTTPS address like `your-project.vercel.app`.
6. To use your own domain, buy one from a registrar and add it under Vercel > Project > Settings > Domains. Follow the DNS records Vercel gives you.

## Publish with Netlify
Run `npm run build`, then deploy the `dist` directory, or connect your GitHub repository. Build command: `npm run build`; publish directory: `dist`.
