#! /usr/bin/env bash

set -e

echo "Patching next@15.0.0"
pnpm patch next

echo "Copying next@15.0.0 to .pnpm_patches"
rm -rf ./node_modules/.pnpm_patches/next@15.0.0/*
cp -r ./node_modules/next/* ./node_modules/.pnpm_patches/next@15.0.0

echo "Committing patch"
pnpm patch-commit ./node_modules/.pnpm_patches/next@15.0.0 