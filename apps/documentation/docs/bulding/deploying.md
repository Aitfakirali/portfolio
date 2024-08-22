---
sidebar_position: 6
---

# Deploying

The application can be deployed to any hosting provider that supports [Podman](https://podman.io/) containers.

## Build your container:

Build the image from the root folder of your app.

```bash
podman build \
  --build-arg APP_FOLDER=gama-sinitres \
  --build-arg APP_NAME=gama-sinistres \
  --build-arg APP_CONTEXT=/sincrc \
  -t rma-sinauto-nextjs \
  -f .docker/staging/Dockerfile .
```

1. **APP_FOLDER** is your app folder name (e.g ./apps/gama-sinitres)
2. **APP_NAME** is your app name (The name of your app inside package.json)
3. **APP_CONTEXT** is your app context path (e.g https://vmcontainer-ny.rmaassurance.com/sincrc), `/sincrc` is your context.

## Run your container

Once your image is built. You can use the following command to run it.

```bash
podman run -p 8080:8080 \
  -e RUNTIME_NEXT_PUBLIC_BASE_URL=https://vmcontainer-ny.rmaassurance.com/sincrc \
  -e RUNTIME_NEXT_PUBLIC_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e API_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e MOCK_API=false \
  -e IS_SUB_DIRECTORY=true \
  -e APP_CONTEXT=/sincrc \
  -e NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com/alfresco/api/-default-/public/alfresco/versions/1/nodes/e657621e-858c-4b89-9e9e-b1053b4b208c \
  -e KEYCLOAK_ID=rma-authentification \
  -e KEYCLOAK_SECRET=uKQwGUKUK0Haiz2Y0Ys686iP7USypVMS \
  -e KEYCLOAK_ISSUER=https://vmcontainer-ny.rmaassurance.com/auth/realms/rma-auth \
  -e NEXTAUTH_URL=https://vmcontainer-ny.rmaassurance.com/sincrc/api/auth \
  -e NEXTAUTH_SECRET=+QKsMW7wMJ4IWnfhVAJSnmRUW7qHJ6Q6fo0MlL+MEsc= \
  -e 'JWT_SIGNING_PRIVATE_KEY={"kty":"oct","kid":"neDGZQk_n0QMf975iEzedDBDmoeaVWLau29LO1k3KzE","alg":"HS512","k":"H4SnD1H0Z0iW8vIf8v0qKUi_scR7-gOIVNwX2QpX72v2dKc9GBED4f3jlDwBhfZQiHLJgXe5eX-tpMhFVCIghg"}%' \
  rma-sinauto-nextjs
```

:::tip
**RUNTIME_NEXT_PUBLIC_BASE_URL** and **NEXTAUTH_URL** must be changed according to your domain.

```bash
RUNTIME_NEXT_PUBLIC_BASE_URL=http://localhost:8080/sincrc
NEXTAUTH_URL=http://localhost:8080/sincrc/api/auth
```

:::

Check out [configure environment variables](../getting-started/starter#configure-environment-variables) to find out more about environment variables.

:::caution
**APP_CONTEXT** Is not a runtime ENV, you will need to rebuild the image each time you change it value.
:::

## Publish to the Registry

1. Grab your Image ID: `podman images | grep rma-sinauto-nextjs`
2. Tag your image `podman tag 42d08e527792 infrarma.rmaassurance.com:9083/gama/sinauto_nextjs:latest`
3. Login `podman login infrarma.rmaassurance.com:9083`
4. Push your image `podman push infrarma.rmaassurance.com:9083/gama/sinauto_nextjs:latest`

## Troubleshooting

### Login certificate

Try using `--tls-verify=false`

```bash
podman login --tls-verify=false infrarma.rmaassurance.com:9083 -u [USER] -p [PASSWORD]
```
