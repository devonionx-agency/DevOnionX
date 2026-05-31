# Agency Site

Monorepo — Frontend (Next.js) + Backend (Express)

## Structure

```
agency-site/
├── frontend/          ← Next.js 16, React 19, Tailwind CSS 4
│   ├── src/
│   │   ├── app/           ← Pages (App Router)
│   │   ├── components/    ← UI components
│   │   ├── lib/           ← Utility functions
│   │   ├── hooks/         ← Custom React hooks
│   │   ├── store/         ← State management
│   │   ├── data/          ← Static data / mock data
│   │   ├── config/        ← App config
│   │   ├── styles/        ← Global styles
│   │   └── helper/        ← Helper functions
│   └── public/            ← Static assets
│
├── backend/           ← Express.js API
│   └── src/
│       ├── routes/        ← API route handlers
│       ├── controllers/   ← Business logic
│       ├── models/        ← Data models
│       ├── middleware/    ← Express middleware
│       ├── services/      ← External service integrations
│       ├── config/        ← Backend config
│       └── utils/         ← Utility functions
│
└── package.json       ← Root (npm workspaces)
```

## Getting Started

### Install all dependencies
```bash
npm install
```

### Run both frontend and backend together
```bash
npm run dev
```

### Run individually
```bash
npm run dev:frontend   # http://localhost:3000
npm run dev:backend    # http://localhost:5000
```

## Environment Variables

Copy the example files and fill in your values:
```bash
cp frontend/.env.example frontend/.env.local
cp backend/.env.example backend/.env
```
