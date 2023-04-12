This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

**Important note: use node lts 18 and higher to properly run react 18 and new nextjs features**

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Recommendations and quick notes

in terms of component library I have noticed of antd has a lot of unresolved github issues, and poorly written docs, its v5 doesn't even support react charts and in terms of framerowk tends to incline to vue.js (this is my opinion only)
docs are sometimes in Chineese (Mandarin) and components has strong design instead utility

My recommended approach to pick UI library for react would be considering three factors
- 
- amount of unresolved issues and it's time to be unresolved at github
- utility vs strong typed system (utility tend to be tailwind or chakra UI, strong typed system MUI)
- well written docs and a lot of examples - first class react support

in terms of antd-charts 

so far what I have searched and experienced they are out of sync with next - they have problems with ssr 
poor docs - in mandarin and almost no english
poor exmaples

in term of react chart library - I would recommend some most popular with a ton of support 
- Recharts (most popular)
- Nivo (for enhanced motions animations)
- Visx (airbnb)