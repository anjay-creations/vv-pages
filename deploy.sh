#!/bin/bash

# 🚀 AI Knowledge Hub Deployment Script

set -e

echo "╔══════════════════════════════════════════════════════╗"
echo "║   🚀 AI Knowledge Hub - Deployment Script            ║"
echo "╚══════════════════════════════════════════════════════╝"
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if git is installed
if ! command -v git &> /dev/null; then
  echo -e "${RED}❌ Git is not installed. Please install git first.${NC}"
  exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
  echo -e "${RED}❌ npm is not installed. Please install Node.js and npm first.${NC}"
  exit 1
fi

echo -e "${BLUE}Step 1: Building application...${NC}"
npm run build
echo -e "${GREEN}✓ Build complete${NC}"
echo ""

echo -e "${BLUE}Step 2: Checking git status...${NC}"
git status
echo ""

read -p "Do you want to commit and push to GitHub? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
  read -p "Enter commit message: " commit_msg
  
  echo -e "${BLUE}Step 3: Committing changes...${NC}"
  git add .
  git commit -m "$commit_msg"
  echo -e "${GREEN}✓ Changes committed${NC}"
  
  echo -e "${BLUE}Step 4: Pushing to GitHub...${NC}"
  git push origin main
  echo -e "${GREEN}✓ Pushed to GitHub${NC}"
  echo ""
fi

# Check if vercel CLI is installed
if command -v vercel &> /dev/null; then
  echo -e "${BLUE}Step 5: Deploying to Vercel...${NC}"
  read -p "Deploy to Vercel production? (y/n) " -n 1 -r
  echo
  if [[ $REPLY =~ ^[Yy]$ ]]; then
    vercel --prod --yes
    echo -e "${GREEN}✓ Vercel deployment complete${NC}"
    echo ""
  fi
fi

echo "╔══════════════════════════════════════════════════════╗"
echo -e "${GREEN}║   ✅ Deployment process complete!               ║${NC}"
echo "╚══════════════════════════════════════════════════════╝"
echo ""
echo "📋 Summary:"
echo "  • Build: ✓"
if [[ $REPLY =~ ^[Yy]$ ]]; then
  echo "  • GitHub: ✓"
fi
echo "  • API Base URL to use: https://your-backend-url.com"
echo ""
echo "🔗 Next steps:"
echo "  1. Set VITE_API_URL environment variable"
echo "  2. Configure custom domain in Vercel"
echo "  3. Update DNS records at your registrar"
echo "  4. Wait for DNS propagation (24-48 hours)"
echo ""
echo "📚 For more info, see DEPLOYMENT.md"
