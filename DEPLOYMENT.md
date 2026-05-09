# 🚀 AI Knowledge Hub - Deployment Guide

Complete guide to deploy your AI Knowledge Hub website to GitHub and configure your custom domain.

## 📋 Table of Contents
1. [GitHub Setup](#github-setup)
2. [Frontend Deployment Options](#frontend-deployment-options)
3. [Backend Deployment Options](#backend-deployment-options)
4. [Custom Domain Configuration](#custom-domain-configuration)
5. [Deployment Scripts](#deployment-scripts)

---

## 1. GitHub Setup

### Step 1: Initialize Git (if not already done)
```bash
cd /Users/anjalivashisth/Desktop/Projects/vashvibes
git init
git add .
git commit -m "Initial commit: AI Knowledge Hub website"
```

### Step 2: Create Repository on GitHub
1. Go to [github.com/new](https://github.com/new)
2. Create a new repository:
   - Name: `vashvibes`
   - Description: "An interactive AI learning platform with history, current tools, coping strategies, and community forum"
   - Public (so you can use GitHub Pages)
   - DON'T initialize with README, .gitignore, or license

### Step 3: Connect Local Repo to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/vashvibes.git
git branch -M main
git push -u origin main
```

---

## 2. Frontend Deployment Options

### Option A: GitHub Pages (FREE - Recommended for Static Sites)

#### Setup Steps:
1. Update `vite.config.js`:
```javascript
export default {
  base: '/vashvibes/',  // Change if using custom domain
}
```

2. Build and deploy:
```bash
npm run build
npx gh-pages -d dist
```

3. In GitHub Settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: gh-pages (create if doesn't exist)
   - Folder: / (root)
   - Save

4. Your site will be available at: `https://YOUR_USERNAME.github.io/vashvibes/`

**Note:** GitHub Pages is for static files only. Your backend API won't work directly here.

---

### Option B: Vercel (RECOMMENDED - Supports Full Stack)

#### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

#### Step 2: Deploy
```bash
cd /Users/anjalivashisth/Desktop/Projects/vashvibes
vercel
```

Follow the prompts:
- Link to existing project? No
- Set project name: vashvibes
- Modify settings: Yes
- Root directory: ./

#### Step 3: Backend Configuration
Create `vercel.json` in project root:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "server/server.js",
      "use": "@vercel/node"
    },
    {
      "src": "src/**/*.jsx",
      "use": "@vercel/static-build"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "server/server.js"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

Then deploy: `vercel`

---

### Option C: Netlify

#### Step 1: Connect to Netlify
1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Select your `vashvibes` repository

#### Step 2: Configure Build Settings
- Build command: `npm run build`
- Publish directory: `dist`

#### Step 3: Environment Variables
Add in Netlify dashboard:
- Build & Deploy → Environment:
  - `VITE_API_URL`: Your backend API URL

---

## 3. Backend Deployment Options

Your backend needs a Node.js hosting service since it's not static.

### Option A: Render (FREE with limitations)

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Settings:
   - Name: `vashvibes-api`
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `node server/server.js`
   - Plan: Free (auto-sleeps after 15 min inactivity)

5. Click "Create Web Service"
6. Copy the deployed URL (e.g., `https://vashvibes-api.onrender.com`)

### Option B: Heroku (Paid but reliable)

```bash
# Install Heroku CLI: brew install heroku

# Login
heroku login

# Create app
heroku create vashvibes-api

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

### Option C: Railway (Simple & Cheap)

1. Go to [railway.app](https://railway.app)
2. Click "New Project"
3. Deploy from GitHub
4. Select your repository
5. Add Node.js service

---

## 4. Custom Domain Configuration

### Step 1: Update Frontend API URL
In `src/components/CommunityPosts.jsx`, update the API URLs:
```javascript
// Change from localhost:5001 to your deployed backend URL
const API_URL = process.env.VITE_API_URL || 'https://your-backend-url.com/api';

const response = await fetch(`${API_URL}/posts`);
```

### Step 2: Configure Domain DNS Records

#### For GitHub Pages:
1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings
3. Add/Edit these records:
   - Type: `A`
     - Name: `@`
     - Value: `185.199.108.153`
   - Also add for:
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Type: `CNAME`
     - Name: `www`
     - Value: `YOUR_USERNAME.github.io`

4. In GitHub Settings → Pages:
   - Custom domain: `yourdomain.com`
   - Enforce HTTPS: ✓

#### For Vercel:
1. In Vercel dashboard → Settings → Domains
2. Click "Add"
3. Enter your domain
4. Add DNS records provided by Vercel OR
5. Update name servers to Vercel's:
   - `ns1.vercel-dns.com`
   - `ns2.vercel-dns.com`

#### For Netlify:
1. In Netlify dashboard → Domain settings
2. Click "Add custom domain"
3. Enter your domain
4. Update DNS records or name servers as shown

### Step 3: Verify Domain Setup
```bash
# Check DNS propagation (may take 24-48 hours)
nslookup yourdomain.com
```

---

## 5. Complete Deployment Scripts

### Create `deploy.sh` in project root:
```bash
#!/bin/bash

echo "🚀 Building frontend..."
npm run build

echo "📦 Pushing to GitHub..."
git add .
git commit -m "Deploy: $(date)"
git push origin main

if command -v vercel &> /dev/null; then
  echo "🌐 Deploying to Vercel..."
  vercel --prod
fi

echo "✅ Deployment complete!"
```

Make executable:
```bash
chmod +x deploy.sh
```

Then deploy anytime with:
```bash
./deploy.sh
```

---

## 📝 Step-by-Step Deployment Checklist

- [ ] Create GitHub repository
- [ ] Push code to GitHub
- [ ] Choose hosting platform (Vercel recommended)
- [ ] Configure environment variables
- [ ] Deploy frontend
- [ ] Deploy backend
- [ ] Get backend API URL
- [ ] Update frontend API endpoints
- [ ] Configure custom domain DNS
- [ ] Test all features on production
- [ ] Enable HTTPS
- [ ] Set up CI/CD workflows

---

## 🔧 Recommended Setup

**For Best Results:**
1. **Frontend**: Vercel (handles React/Vite perfectly)
2. **Backend**: Render or Railway (free tier available)
3. **Domain**: Custom domain pointing to Vercel
4. **Database**: Not needed (using in-memory storage currently)

**Production URLs would be:**
- Frontend: `https://yourdomain.com`
- Backend API: `https://api.yourdomain.com` (or Render/Railway URL)

---

## 🚨 Important Notes

1. **Environment Variables**: Store API URLs in `.env.production`
2. **CORS**: Update backend CORS settings for production domain
3. **Performance**: Monitor cold starts on free-tier services
4. **Database**: Consider upgrading to MongoDB/PostgreSQL before going live
5. **Monitoring**: Set up error tracking (Sentry, LogRocket)

---

## 📞 Support & Troubleshooting

### Common Issues:

**API calls returning 404:**
- Update VITE_API_URL environment variable
- Verify backend deployment is running
- Check CORS settings in backend

**Domain not connecting:**
- Wait for DNS propagation (24-48 hours)
- Verify DNS records are correct: `nslookup yourdomain.com`
- Check domain registrar settings

**GitHub Pages not updating:**
- Clear browser cache
- Check gh-pages branch exists
- Verify build artifacts in dist/

---

For more help, visit:
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Render Docs](https://render.com/docs)
