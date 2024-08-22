FROM node:16-alpine AS workspace
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY apps/gama-sinitres/package.json ./apps/gama-sinitres/package.json
COPY packages ./packages
COPY patches ./patches

# Find and remove non-package.json files
# RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf
# RUN find apps \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=workspace /app ./
RUN --mount=type=cache,target=/root/.yarn-sinitres YARN_CACHE_FOLDER=/root/.yarn-sinitres yarn install

FROM node:16-alpine AS builder_starter
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/http-client build
RUN yarn workspace @portfolio/auth build
RUN yarn workspace @portfolio/core build
ENV NEXT_TELEMETRY_DISABLED 1
ENV IS_DOCKER_BUILD 1
RUN yarn workspace gama-sinistres ts:check
RUN yarn workspace gama-sinistres eslint src
RUN NODE_ENV=production yarn workspace gama-sinistres build

# App - Production image
FROM node:16-alpine AS runner_starter
RUN yarn global add pm2
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/gama-sinitres/.next/standalone ./
COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/gama-sinitres/next.config.js ./apps/gama-sinitres
COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/gama-sinitres/.next/static ./apps/gama-sinitres/.next/static
COPY --from=builder_starter --chown=nextjs:nodejs /app/apps/gama-sinitres/public ./apps/gama-sinitres/public
# # @TODO: this is causing trouble with the standalone version.
# COPY --from=builder_starter --chown=nextjs:nodejs /app/packages/ui/public/icons.svg ./apps/starter/public/icons.svg

USER nextjs
EXPOSE 8080
ENV PORT 8080
# ENTRYPOINT [ "tail", "-f", "/dev/null" ]
CMD [ "pm2-runtime", "start", "/app/apps/gama-sinitres/server.js"]

# Storybook - Rebuild the source code only when needed
FROM node:16-alpine AS builder_ui
WORKDIR /app
COPY --from=deps /app ./
ARG CACHEBUST=1
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/http-client build
RUN yarn workspace @portfolio/auth build
RUN yarn workspace @portfolio/core build
RUN yarn workspace gama-sinistres build-storybook

# UI - Production image
FROM node:16-alpine AS runner_ui
RUN yarn global add http-server pm2
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder_ui /app/apps/gama-sinitres/storybook-static ./public
EXPOSE 8080
ENV PORT 8080
CMD ["pm2-runtime", "http-server", "./public"]

# Test Coverage - Production image
FROM node:16-alpine AS runner_coverage
RUN yarn global add http-server
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/http-client build
RUN yarn workspace @portfolio/auth build
RUN yarn workspace @portfolio/core build
RUN yarn workspace gama-sinistres test:coverage

EXPOSE 8080
ENV PORT 8080
CMD ["http-server", "/app/apps/gama-sinitres/coverage/lcov-report"]

# Eslint Reporter - Production image
FROM node:16-alpine AS runner_eslint_reports
RUN yarn global add http-server
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/http-client build
RUN yarn workspace @portfolio/auth build
RUN yarn workspace @portfolio/core build
RUN yarn workspace gama-sinistres lint:reports

EXPOSE 8080
ENV PORT 8080
CMD ["http-server", "/app/apps/gama-sinitres/eslint-report"]