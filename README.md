# Kyntric Games

A browser-first, Roblox-inspired gaming platform prototype.

## Stack
- React + TypeScript
- Vite
- React Router
- Three.js will be added for the browser 3D runtime
- GitHub Pages for frontend deployment

## Local development
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Deployment
GitHub Actions builds and deploys the `main` branch to GitHub Pages.

In GitHub, open **Settings → Pages** and choose **GitHub Actions** as the build/deployment source.

For a custom domain, configure DNS for `kyntric-games.dev.li` at your domain provider and keep the `CNAME` file in the repository. The DNS record type and target depend on your DNS provider and GitHub Pages setup.

## Routes
- `/`
- `/discover`
- `/games`
- `/games/:gameId`
- `/play/:gameId`
- `/:userId/profile`

This is a frontend prototype. Authentication, publishing, multiplayer, and staff permissions require a backend.
