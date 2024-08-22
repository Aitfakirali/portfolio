FROM registry.access.redhat.com/ubi8/nodejs-18 AS workspace
ARG APP_FOLDER
ENV BUILD_APP=${APP_FOLDER}
USER 0
WORKDIR /app
COPY [".npmrc","package.json", "yarn.lock", "./"]
COPY apps/${BUILD_APP}/package.json ./apps/${BUILD_APP}/package.json
COPY packages ./packages
COPY patches ./patches

# Install dependencies only when needed
FROM registry.access.redhat.com/ubi8/nodejs-18 AS deps
USER 0

# ENV http_proxy=http://helpdeskrwa:rma+2020@proxyrma.rmawatanya.com:8080/
# ENV https_proxy=http://helpdeskrwa:rma+2020@proxyrma.rmawatanya.com:8080/
# ENV no_proxy="infrarma.rmaassurance.com"

RUN npm install yarn@1.22.19 -- global
WORKDIR /app
COPY --from=workspace /app ./
RUN yarn install
# ENTRYPOINT [ "tail", "-f", "/dev/null" ]

# Build
FROM registry.access.redhat.com/ubi8/nodejs-18 AS builder_starter
ARG APP_NAME
ARG APP_CONTEXT
ENV BUILD_APP_WORKSPACE=${APP_NAME}
ENV BUILD_APP_CONTEXT=${APP_CONTEXT}
USER 0

# ENV http_proxy=http://helpdeskrwa:rma+2020@proxyrma.rmawatanya.com:8080/
# ENV https_proxy=http://helpdeskrwa:rma+2020@proxyrma.rmawatanya.com:8080/
# ENV no_proxy="infrarma.rmaassurance.com"

RUN npm install yarn@1.22.19 -- global
WORKDIR /app
COPY --from=deps /app ./
COPY . .
RUN yarn workspace @portfolio/tailwind-config build
RUN yarn workspace @portfolio/ui build
RUN yarn workspace @portfolio/next-logger build
RUN yarn workspace @portfolio/http-client build
RUN yarn workspace @portfolio/auth build
RUN yarn workspace @portfolio/core build

RUN \
  NEXT_TELEMETRY_DISABLED=1 \
  NEXT_PUBLIC_SHOW_LOGGER=false \
  NEXT_PUBLIC_BASE_URL=APP_NEXT_RUNTIME_NEXT_PUBLIC_BASE_URL \
  NEXT_PUBLIC_RMA_URL=APP_NEXT_RUNTIME_NEXT_PUBLIC_RMA_URL \
  NEXT_PUBLIC_RMA_ALFRESKO=APP_NEXT_RUNTIME_NEXT_PUBLIC_RMA_ALFRESKO \
  NEXT_PUBLIC_ALFRESKO_ID=APP_NEXT_RUNTIME_NEXT_PUBLIC_ALFRESKO_ID \
  NEXT_PUBLIC_PRODUCTION=APP_NEXT_RUNTIME_NEXT_PUBLIC_PRODUCTION \
  IS_SUB_DIRECTORY=true \
  NEXT_DEPLOYMENT_ID=$(date +%s) \
  APP_CONTEXT=$BUILD_APP_CONTEXT \
  yarn workspace $BUILD_APP_WORKSPACE build

# App - Production image
FROM registry.access.redhat.com/ubi8/nodejs-18 AS runner_starter
ARG APP_FOLDER
ENV BUILD_APP=${APP_FOLDER}
USER 0

# ENV http_proxy=http://helpdeskrwa:rma+2020@proxyrma.rmawatanya.com:8080/
# ENV https_proxy=http://helpdeskrwa:rma+2020@proxyrma.rmawatanya.com:8080/
# ENV no_proxy="infrarma.rmaassurance.com"

RUN npm install yarn@1.22.19 -- global
RUN yarn global add pm2
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_OPTIONS "-r next-logger"

COPY --chown=1001:1001 ./.docker/staging/entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["/app/entrypoint.sh"]

COPY --from=builder_starter --chown=1001:1001 /app/apps/${BUILD_APP}/.next/standalone ./
COPY --from=builder_starter --chown=1001:1001 /app/apps/${BUILD_APP}/next.config.js ./apps/${BUILD_APP}
COPY --from=builder_starter --chown=1001:1001 /app/apps/${BUILD_APP}/.next/static ./apps/${BUILD_APP}/.next/static
COPY --from=builder_starter --chown=1001:1001 /app/apps/${BUILD_APP}/public ./apps/${BUILD_APP}/public
COPY --from=builder_starter --chown=1001:1001 /app/apps/${BUILD_APP}/next-logger.config.js ./apps/${BUILD_APP}
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/next-logger ./node_modules/next-logger
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/@portfolio/next-logger ./node_modules/@portfolio/next-logger
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/cosmiconfig ./node_modules/cosmiconfig
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/parse-json ./node_modules/parse-json
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/error-ex ./node_modules/error-ex
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/is-arrayish ./node_modules/is-arrayish
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/json-parse-even-better-errors ./node_modules/json-parse-even-better-errors
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/lines-and-columns ./node_modules/lines-and-columns
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/@babel/code-frame ./node_modules/@babel/code-frame
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/@babel/highlight ./node_modules/@babel/highlight
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/js-tokens ./node_modules/js-tokens
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/@babel/helper-validator-identifier ./node_modules/@babel/helper-validator-identifier
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/escape-string-regexp ./node_modules/escape-string-regexp
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/import-fresh ./node_modules/import-fresh
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/parent-module ./node_modules/parent-module
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/callsites ./node_modules/callsites
COPY --from=builder_starter --chown=1001:1001 /app/node_modules/path-type ./node_modules/path-type


USER 1001
EXPOSE 8080
ENV PORT 8080
ENV IS_SUB_DIRECTORY true
ENV MOCK_API false
ENV KEYCLOAK_SECRET uKQwGUKUK0Haiz2Y0Ys686iP7USypVMS
ENV NEXTAUTH_SECRET +QKsMW7wMJ4IWnfhVAJSnmRUW7qHJ6Q6fo0MlL+MEsc=
ENV JWT_SIGNING_PRIVATE_KEY {"kty":"oct","kid":"neDGZQk_n0QMf975iEzedDBDmoeaVWLau29LO1k3KzE","alg":"HS512","k":"H4SnD1H0Z0iW8vIf8v0qKUi_scR7-gOIVNwX2QpX72v2dKc9GBED4f3jlDwBhfZQiHLJgXe5eX-tpMhFVCIghg"}%

# ENTRYPOINT [ "tail", "-f", "/dev/null" ]
CMD [ "sh", "-c", "exec pm2-runtime start /app/apps/$BUILD_APP/server.js"]
