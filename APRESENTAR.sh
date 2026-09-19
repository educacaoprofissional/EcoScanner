#!/usr/bin/env bash
set -e

if [ ! -d "node_modules" ]; then
  echo "Preparando o EcoScanner pela primeira vez..."
  npm install
fi

echo "Iniciando o EcoScanner..."
npm start
