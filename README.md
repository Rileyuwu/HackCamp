# HackCamp 
A Next.js project scaffolded with TypeScript and Tailwind CSS.

## Getting Started

### Prerequisites
- Node.js 18+ installed ([Download here](https://nodejs.org/))

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── api/          # API routes (backend)
│   │   └── hello/    # Example API route
│   ├── components/   # React components (create as needed)
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── public/           # Static assets
└── package.json      # Dependencies
```

## Key Concepts

### API Routes
- Create API endpoints in `app/api/[route-name]/route.ts`
- Export functions like `GET`, `POST`, `PUT`, `DELETE`
- No need for Express - Next.js handles routing

### Pages
- Files in `app/` automatically become routes
- `app/page.tsx` = `/`
- `app/about/page.tsx` = `/about`

### Components
- Create reusable components in `app/components/`
- Use `'use client'` directive for client-side interactivity
- Server components by default (great for performance!)

## Useful Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Next Steps

1. Install Node.js if you haven't already
2. Run `npm install` to install dependencies
3. Start building your hackathon project!

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

