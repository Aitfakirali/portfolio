#!/bin/bash
build_name=$(date "+%Y%m%d_%H%M%S")

# Clear
# rm -rf .builds

# Setup
mkdir -p .builds
mkdir -p ".builds/$build_name"

# Build
yarn workspace awb-intranet build
# Copy
cp -r apps/awb-intranet/.next/standalone/ ".builds/$build_name"
cp apps/awb-intranet/.env ".builds/$build_name/apps/awb-intranet/.env"
cp apps/awb-intranet/next.config.js ".builds/$build_name/apps/awb-intranet/"
cp -r apps/awb-intranet/.next/static ".builds/$build_name/apps/awb-intranet/.next/static"
cp -r apps/awb-intranet/public ".builds/$build_name/apps/awb-intranet/public"

# Zip
zip -rq ".builds/$build_name.zip" ".builds/$build_name" > /dev/null

# Test start
# node .builds/BUILD_FOLDER/apps/ati/server.js