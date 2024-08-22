---
sidebar_position: 3
---

# Project Structure

If you open the new project in VS code you will see the following structure:

```bash title="Project Structure"
apps/starter
├── .storybook ## Storybook related confugration files
│   ├── main.ts ## common api files such us axios client and  react query provider
│   ├── manager.js
│   ├── preview-head.html ## query and mutation related to posts
│   ├── preview.ts ## query and mutation related to posts
│   └── theme.js
├── e2e # Robots end to end testing
│   └── test.robot # Example of a test case.
├── public # Static assets to be served
├── src # Application source folder
│   ├── __test__ # Jest test folder
│   │   └── 404.test.tsx
│   ├── components # Project components
│   │   └── Welcome
│   ├── constant # Project constants
│   │   └── env.ts
│   ├── features # Features and functionalities
│   │   └── HomePage
│   │   │  ├── hooks.ts # Hooks
│   │   │  ├── index.tsx # HomePage feature component
│   │   │  ├── queries.ts # Server side fetch queries
│   │   │  ├── queryKeys.ts # React Query Keys
│   │   ├  └── schemas.ts # Zod schemas for validating api calls
│   ├── pages # Next.js Pages Router
│   │   ├── api
│   │   │  ├── auth
│   │   │  │   └── [...nextauth].js # Next Auth OAuth Authentification
│   │   │  └── home
│   │   │      └── index.ts # HomePage Backend for frontend (BFF)
│   │   ├── auth
│   │   │  ├── logout.tsx # Handle OAuth logout
│   │   │  └── signin.tsx # Handle OAuth login
│   ├── _app.tsx # Next.js Custom App
│   ├── _document.tsx # Next.js Custom Document
│   ├── 404.tsx # The 404 Page
│   └── index.tsx # Homepage
│   ├── styles
│   │   └── globals.css # Tailwind CSS.
│   ├── types # TypeScript custom types
│   └── middleware.ts # Next.js request middleware
├── .dockerignore # Ignore files during Docker build process
├── .env.example # Example of environment variables
├── .eslintrc.js # Eslint configuration file
├── app-env.d.ts # TypeScript declaration file for the project
├── docker-compose.yml # Docker deployment example file
├── Dockerfile # Dockerfile example
├── jest.config.js # Jest configuration file
├── jest.setup.js # Jest setupFilesAfterEnv
├── next-env.d.ts # TypeScript declaration file for Next.js
├── next.config.js # Configuration file for Next.js
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration file
├── tailwind.config.js # Tailwind configuration file
└── tsconfig.json # Typescript configuration
```