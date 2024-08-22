FROM node:18-alpine AS workspace
WORKDIR /app
COPY ["package.json", "yarn.lock", "./"]
COPY apps/documentation/package.json ./apps/documentation/package.json
COPY apps/gama-sinitres/package.json ./apps/gama-sinitres/package.json
COPY packages packages

# Find and remove non-package.json files
RUN find packages \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf
RUN find apps \! -name "package.json" -mindepth 2 -maxdepth 2 -print | xargs rm -rf

# Install dependencies only when needed
FROM node:18-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY --from=workspace /app ./
RUN --mount=type=cache,target=/root/.yarn YARN_CACHE_FOLDER=/root/.yarn yarn install

FROM node:18-alpine AS runner_docs
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN NODE_ENV=production yarn workspace documentation build
EXPOSE 3000
CMD [ "yarn", "workspace", "documentation", "serve"]
