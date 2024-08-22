---
sidebar_position: 2
---

import CodeBlock from "@theme/CodeBlock";
import EnvConfigExample from "!!raw-loader!../../../../apps/starter/.env.example";


# Starter

## Initialize project

```bash
# Copy starter
cp -r apps/starter apps/myproject
```
## Configure package.json

Change `starter` to your project name `myproject`

```json title="apps/myproject/package.json"

{
  // highlight-next-line
  "name": "starter",
  ...
  "lint-staged": {
    "**/*.{js,jsx,ts,tsx}": [
      "prettier -w",
      // highlight-next-line
      "yarn workspace starter eslint src",
      // highlight-next-line
      "yarn workspace starter ts:check"
    ],
  }
}
```

## Install depdendencies

Run `yarn install` from your root folder (not apps)

## Configure environment variables

Copy `.env.example` to `.env`
```bash
cp apps/myproject/.env.example apps/myproject/.env 
```

<CodeBlock language="bash" title="apps/myproject/.env">
{EnvConfigExample}
</CodeBlock>

## Run the app

Simply run the following
```bash
yarn workspace myproject dev
```

Visit `http://localhost:3000` to view your application.


## Commands
Open `package.json` and checkout the `scripts` section, these scripts refer to the different stages of developing an application:

- `dev`: start Next.js in development mode.
- `build`: build the application for production usage.
- `start`: start a Next.js production server.
- `lint`: Runs Next.js' built-in ESLint configuration.
- `analyze`: Runs Webpack Bundle Analyzer.
- `storybook`: Runs Storybook in development mode.
- `build-storybook`: build Storybook for production usage.
- `sync:icons`: Pull latest icons from the design system.

