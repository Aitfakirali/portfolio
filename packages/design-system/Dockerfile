FROM node:18-alpine AS workspace
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY apps/gama-sinitres/package.json ./apps/gama-sinitres/package.json
COPY packages ./packages
COPY patches ./patches

# Install dependencies only when needed
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=workspace /app ./
RUN --mount=type=cache,target=/root/.yarn-design-system YARN_CACHE_FOLDER=/root/.yarn-design-system yarn install

# Storybook - Builder
FROM node:18-alpine AS builder_ui
WORKDIR /app
COPY --from=deps /app ./
ARG CACHEBUST=1
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/ui build-storybook

# Storybook - Runner
FROM node:18-alpine AS runner_ui
RUN yarn global add http-server pm2
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder_ui /app/packages/design-system/storybook-static ./public
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "http-server", "./public"]

# Test Coverage - Production image
FROM node:18-alpine AS runner_coverage
RUN yarn global add http-server
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/ui test:coverage

EXPOSE 8080
ENV PORT 8080
CMD ["http-server", "/app/packages/design-system/coverage/lcov-report"]

# Eslint Reporter - Production image
FROM node:18-alpine AS runner_eslint_reports
RUN yarn global add http-server
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/ui lint:reports

EXPOSE 8080
ENV PORT 8080
CMD ["http-server", "/app/packages/design-system/eslint-report"]