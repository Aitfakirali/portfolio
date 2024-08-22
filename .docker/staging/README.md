# RMA SINAUTO PODMAN STAGING IMAGE

1. Execute the follwing from the root folder (not apps/gama-sinistres)
2. Build your container:

```
podman build --ulimit nofile=1048576:1048576 \
  --build-arg APP_FOLDER=gama-sinitres \
  --build-arg APP_NAME=gama-sinistres \
  --build-arg APP_CONTEXT=/sincrc \
  -t rma-sinauto-nextjs \
  -f .docker/staging/Dockerfile .
```

3. Run your container:

```
podman run -p 8080:8080 \
  -e RUNTIME_NEXT_PUBLIC_BASE_URL=https://vmcontainer-ny.rmaassurance.com/sincrc \
  -e RUNTIME_NEXT_PUBLIC_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e API_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e MOCK_API=false \
  -e IS_SUB_DIRECTORY=true \
  -e RELEASE1=false \
  -e NEXT_PUBLIC_PRODUCTION=true \
  -e NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e RUNTIME_NEXT_PUBLIC_ALFRESKO_ID=e657621e-858c-4b89-9e9e-b1053b4b208c \
  -e KEYCLOAK_ID=rma-authentification \
  -e KEYCLOAK_SECRET=uKQwGUKUK0Haiz2Y0Ys686iP7USypVMS \
  -e KEYCLOAK_ISSUER=https://vmcontainer-ny.rmaassurance.com/auth/realms/rma-auth \
  -e NEXTAUTH_URL=https://vmcontainer-ny.rmaassurance.com/sincrc \
  -e NEXTAUTH_SECRET=+QKsMW7wMJ4IWnfhVAJSnmRUW7qHJ6Q6fo0MlL+MEsc= \
  -e 'JWT_SIGNING_PRIVATE_KEY={"kty":"oct","kid":"neDGZQk_n0QMf975iEzedDBDmoeaVWLau29LO1k3KzE","alg":"HS512","k":"H4SnD1H0Z0iW8vIf8v0qKUi_scR7-gOIVNwX2QpX72v2dKc9GBED4f3jlDwBhfZQiHLJgXe5eX-tpMhFVCIghg"}%' \
  rma-sinauto-nextjs
```

## Push to registry

1. Grab your Image ID: `docker images | grep rma-sinauto-nextjs`
2. Tag your image `docker tag 42d08e527792 infrarma.rmaassurance.com:9083/gama/sinauto_nextjs:latest`
3. Login `docker login infrarma.rmaassurance.com:9083`
4. Push your image `docker push infrarma.rmaassurance.com:9083/gama/sinauto_nextjs:latest`

## Debug

1. Copy image `docker save rma-sinauto-nextjs:latest | podman load`
1. [SKIP THIS] Copy image from docker to podman: `podman pull podman --log-level debug docker:rma-sinauto-nextjs:latest`
1. Run using podman command (see deploy_integration.sh)

```
podman run -p 8080:8080 --name=frontend_sinauto_nextjs \
  -e RUNTIME_NEXT_PUBLIC_BASE_URL=http://192.168.56.6:8080 \
  -e RUNTIME_NEXT_PUBLIC_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e API_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e NEXT_PUBLIC_ALFRESKO_ID=e657621e-858c-4b89-9e9e-b1053b4b208c \
  -e KEYCLOAK_ID=rma-authentification \
  -e KEYCLOAK_ISSUER=https://vmcontainer-ny.rmaassurance.com/auth/realms/rma-auth \
  -e NEXTAUTH_URL=http://192.168.56.6:8080/sincrc/api/auth \
  -e RELEASE1=false \
  -e RUNTIME_NEXT_PUBLIC_PRODUCTION=true \
  localhost/rma-sinauto-nextjs:latest

podman rm frontend_sinauto_nextjs

```

## Tools

1. https://github.com/containers/skopeo

## MacOS debug

- podman machine rm
- podman machine init --image-path=stable
- podman machine set --cpus=2
- podman system prune --all --force
- ps && kill -P (quemu_pid)
- podman build -t rma-sinauto-nextjs -f apps/gama-sinitres/.docker/staging/Dockerfile . --log-level=debug (no target specified)
