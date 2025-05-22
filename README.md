# Portfolio Frontend

A modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- Modern React with Next.js 15 App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Responsive design for all device sizes
- Portfolio showcase pages
- Contact form

## Project Structure

```
portfolio-frontend/
├── public/             # Static files
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── projects/   # Projects showcase
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   └── components/     # React components (add as needed)
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies
└── tsconfig.json       # TypeScript configuration
```

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

To customize this portfolio:

1. Update the personal information in the About page
2. Add your own projects to the Projects page
3. Configure the contact form to send emails
4. Add your own images and branding

## Building for Production

```bash
npm run build
```

Then, you can start the production server:

```bash
npm run start
```

## Deployment

This project can be easily deployed on [Vercel](https://vercel.com), [Netlify](https://netlify.com), or any other hosting platform that supports Next.js.
