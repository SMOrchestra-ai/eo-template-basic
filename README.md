# EO Template Basic

Starter template for the **Basic** tier of the [Entrepreneurs Oasis MENA](https://entrepreneursoasis.me) MicroSaaS platform.

Auto-deployed by EO on first provision. Ships as a Next.js 14 (standalone) Docker container with EO branding, HTTPS via Let's Encrypt, and Traefik reverse-proxy routing.

## What's in here

- `src/app/page.tsx` — the landing page students see on first deploy
- `Dockerfile` — multi-stage build (deps → builder → runner)
- `next.config.mjs` — `output: standalone` for slim production image
- `package.json` — Next 14, React 18, no extra deps

## Local dev

```bash
npm install
npm run dev    # http://localhost:3000
```

## How it ships

When a student clicks Deploy on the EO dashboard:
1. Pool allocator finds an EO worker VPS with capacity.
2. Coolify API creates a new app with this repo as source.
3. Coolify builds via Dockerfile, deploys, requests TLS cert.
4. Student lands on `student-{prefix}-{nanoid}.app.entrepreneursoasis.me`.

Total click → live URL: **under 60 seconds**.

## Custom domain

Students can later map a custom domain via the dashboard. EO handles DNS validation and Let's Encrypt issuance.

## License

MIT — fork it, ship something.
