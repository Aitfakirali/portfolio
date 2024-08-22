# echo " >>>>>> Load ms-sinauto image"

echo " >>>>>> pull image from registry"
sudo podman pull infrarma.rmaassurance.com:9083/gama/sinauto_nextjs:latest

# echo " >>>>>> delete current ms-sinauto instance"
sudo podman rm -f frontend_sinauto_nextjs

# echo " >>>>>> deploy new ms-sinauto instance"
sudo podman run -d -p 9088:8080 -m 512m --name=frontend_sinauto_nextjs \
  -e RUNTIME_NEXT_PUBLIC_BASE_URL=https://vmcontainer-ny.rmaassurance.com/sincrc \
  -e RUNTIME_NEXT_PUBLIC_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e API_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e MOCK_API=false \
  -e KEYCLOAK_ID=rma-authentification \
  -e IS_SUB_DIRECTORY=true \
  -e APP_CONTEXT=/sincrc \
  -e RELEASE1=false \
  -e NEXT_PUBLIC_PRODUCTION=true \
  -e NEXT_AUTH_COOKIES_PATH=/sincrc \
  -e KEYCLOAK_SECRET=uKQwGUKUK0Haiz2Y0Ys686iP7USypVMS \
  -e KEYCLOAK_ISSUER=https://vmcontainer-ny.rmaassurance.com/auth/realms/rma-auth \
  -e NEXTAUTH_URL=https://vmcontainer-ny.rmaassurance.com/sincrc/api/auth \
  -e NEXTAUTH_SECRET=+QKsMW7wMJ4IWnfhVAJSnmRUW7qHJ6Q6fo0MlL+MEsc= \
  -e RUNTIME_NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e 'JWT_SIGNING_PRIVATE_KEY={"kty":"oct","kid":"neDGZQk_n0QMf975iEzedDBDmoeaVWLau29LO1k3KzE","alg":"HS512","k":"H4SnD1H0Z0iW8vIf8v0qKUi_scR7-gOIVNwX2QpX72v2dKc9GBED4f3jlDwBhfZQiHLJgXe5eX-tpMhFVCIghg"}%' \
  infrarma.rmaassurance.com:9083/gama/sinauto_nextjs:latest

# espace client
sudo podman run -d -p 9088:8080 -m 512m --name=crc_client_nextjs:latest \
  -e RUNTIME_NEXT_PUBLIC_BASE_URL=https://vmcontainer-ny.rmaassurance.com/espace_client \
  -e RUNTIME_NEXT_PUBLIC_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e API_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e KEYCLOAK_ID=rma-authentification \
  -e NEXT_PUBLIC_SHOW_LOGGER="true" \
  -e IS_SUB_DIRECTORY=true \
  -e ACCOUNT_TECHNIQUE_PASSWORD=123 \
  -e ACCOUNT_TECHNIQUE_USERNAME=sin.client \
  -e APP_CONTEXT=/espace_client \
  -e NEXT_AUTH_COOKIES_PATH=/espace_client \
  -e KEYCLOAK_SECRET=uKQwGUKUK0Haiz2Y0Ys686iP7USypVMS \
  -e KEYCLOAK_ISSUER=https://vmcontainer-ny.rmaassurance.com/auth/realms/rma-auth \
  -e NEXTAUTH_URL=https://vmcontainer-ny.rmaassurance.com/espace_client \
  -e NEXTAUTH_SECRET=+QKsMW7wMJ4IWnfhVAJSnmRUW7qHJ6Q6fo0MlL+MEsc= \
  -e RUNTIME_NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e 'JWT_SIGNING_PRIVATE_KEY={"kty":"oct","kid":"neDGZQk_n0QMf975iEzedDBDmoeaVWLau29LO1k3KzE","alg":"HS512","k":"H4SnD1H0Z0iW8vIf8v0qKUi_scR7-gOIVNwX2QpX72v2dKc9GBED4f3jlDwBhfZQiHLJgXe5eX-tpMhFVCIghg"}%' \
  infrarma.rmaassurance.com:9083/gama/crc_client_nextjs:latest




podman run -p 8080:8080 \
  -e RUNTIME_NEXT_PUBLIC_BASE_URL=http://192.168.56.4:8080/espace_client \
  -e RUNTIME_NEXT_PUBLIC_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e API_RMA_URL=https://vmcontainer-ny.rmaassurance.com \
  -e NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e RUNTIME_NEXT_PUBLIC_ALFRESKO_ID=e657621e-858c-4b89-9e9e-b1053b4b208c \
  -e KEYCLOAK_ID=rma-authentification \
  -e NEXT_PUBLIC_SHOW_LOGGER="true" \
  -e IS_SUB_DIRECTORY=true \
  -e ACCOUNT_TECHNIQUE_PASSWORD=123 \
  -e ACCOUNT_TECHNIQUE_USERNAME=mohcine \
  -e APP_CONTEXT=/espace_client \
  -e NEXT_AUTH_COOKIES_PATH=/espace_client \
  -e KEYCLOAK_SECRET=uKQwGUKUK0Haiz2Y0Ys686iP7USypVMS \
  -e KEYCLOAK_ISSUER=https://vmcontainer-ny.rmaassurance.com/auth/realms/rma-auth \
  -e NEXTAUTH_URL=http://192.168.56.4:8080/espace_client \
  -e NEXTAUTH_SECRET=+QKsMW7wMJ4IWnfhVAJSnmRUW7qHJ6Q6fo0MlL+MEsc= \
  -e RUNTIME_NEXT_PUBLIC_RMA_ALFRESKO=https://alfresco-dy.rmaassurance.com \
  -e 'JWT_SIGNING_PRIVATE_KEY={"kty":"oct","kid":"neDGZQk_n0QMf975iEzedDBDmoeaVWLau29LO1k3KzE","alg":"HS512","k":"H4SnD1H0Z0iW8vIf8v0qKUi_scR7-gOIVNwX2QpX72v2dKc9GBED4f3jlDwBhfZQiHLJgXe5eX-tpMhFVCIghg"}%' \
  espace-client-nextjs:latest

  