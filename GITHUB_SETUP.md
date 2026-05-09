# 🐙 GitHub Setup & Deployment Guide

Complete step-by-step guide to push your AI Knowledge Hub to GitHub and deploy with your custom domain.

---

## 📋 Prerequisites

Before starting, make sure you have:

- ✅ GitHub account (free at [github.com](https://github.com))
- ✅ Git installed on your Mac
- ✅ A custom domain
- ✅ Project built locally
- ✅ Terminal/Command Line access

---

## 🎯 Part 1: GitHub Repository Setup

### Step 1: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Fill in the form:
   - **Repository name**: `vashvibes`
   - **Description**: "An interactive AI learning platform with history, current tools, coping strategies, and community forum"
   - **Visibility**: Public (required for GitHub Pages)
   - **Initialize this repository with**: Leave unchecked (we have existing code)

3. Click **"Create repository"**

### Step 2: Configure Git Locally

Open Terminal and run these commands:

```bash
# Navigate to project directory
cd /Users/anjalivashisth/Desktop/Projects/vashvibes

# Set your Git identity (use your GitHub account)
git config --global user.name "Your Name"
git config --global user.email "your-github-email@example.com"

# Verify configuration
git config --global user.name
git config --global user.email
```

### Step 3: Initialize & Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: AI Knowledge Hub - Interactive AI Learning Platform"

# Add GitHub as remote
# IMPORTANT: Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/vashvibes.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

**Expected Output:**
```
...
 create mode 100644 src/components/CommunityPosts.jsx
 ...
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

---

## 🌐 Part 2: Deployment Options

### Option A: Deploy with Vercel (RECOMMENDED ⭐)

**Why Vercel?**
- ✅ Best for React/Vite projects
- ✅ Automatic deployments on git push
- ✅ Free tier with good limits
- ✅ Easy custom domain setup
- ✅ Supports both frontend and backend

#### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

#### Step 2: Deploy

```bash
cd /Users/anjalivashisth/Desktop/Projects/vashvibes
vercel
```

**Interactive Setup:**
```
? Set up and deploy "~/Desktop/Projects/vashvibes"? (y/N)
→ y

? Which scope do you want to deploy to?
→ Select your personal account

? Link to existing project? (y/N)
→ N

? What's your project's name?
→ vashvibes

? In which directory is your code located?
→ ./

? Want to modify these settings before deploying? (y/n)
→ n
```

**Output will show:**
```
✓ Deployed to https://vashvibes.vercel.app
```

#### Step 3: Add Custom Domain in Vercel

1. Go to [vercel.com/dashboard](https://vercel.com/dashboard)
2. Select your project
3. Go to Settings → Domains
4. Add your domain: `yourdomain.com`
5. Vercel will show DNS records to add

---

### Option B: GitHub Pages (FREE)

**For static frontend only** (backend API won't work directly)

#### Step 1: Update Vite Config

Edit `vite.config.js`:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/vashvibes/',  // Only if using project site
  // Remove if using custom domain
})
```

#### Step 2: Build & Deploy

```bash
npm run build
npx gh-pages -d dist
```

#### Step 3: GitHub Settings

1. Go to your repo → Settings → Pages
2. Source: Deploy from a branch
3. Branch: `gh-pages`, folder: `/ (root)`
4. Save

Your site will be at: `https://YOUR_USERNAME.github.io/vashvibes/`

---

### Option C: Netlify (Alternative)

#### Step 1: Connect Repository

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Choose GitHub
4. Authorize Netlify
5. Select your `vashvibes` repository

#### Step 2: Configure Build

- **Build command**: `npm run build`
- **Publish directory**: `dist`

#### Step 3: Deploy

Click "Deploy site" and Netlify will build and deploy automatically.

---

## 🔌 Part 3: Backend Deployment

Your Node.js backend needs a server to run on.

### Option A: Render.com (FREE & Easy)

1. Go to [render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub account
4. Select your `vashvibes` repository
5. Settings:
   - **Name**: `vashvibes-api`
   - **Environment**: Node
   - **Build command**: `npm install`
   - **Start command**: `node server/server.js`
   - **Plan**: Free

6. Create service
7. Render will provide URL like: `https://vashvibes-api.onrender.com`

### Option B: Railway.app (Simple & Cheap)

1. Go to [railway.app](https://railway.app)
2. Connect GitHub account
3. New Project → GitHub Repo
4. Select your repository
5. Add Node.js service
6. Deploy

---

## 🎯 Part 4: Connect Frontend to Backend

Once backend is deployed:

### Step 1: Update Environment Variable

Create `.env.production` in project root:

```env
VITE_API_URL=https://vashvibes-api.onrender.com
```

### Step 2: Update React Component

In `src/components/CommunityPosts.jsx`, update API URLs:

```javascript
// At the top of the component
const API_URL = process.env.VITE_API_URL || 'https://your-backend-url.com';

// Then use it in fetch calls
const response = await fetch(`${API_URL}/api/posts`);
```

### Step 3: Update Backend CORS

In `server/server.js`, update CORS:

```javascript
app.use(cors({
  origin: [
    'https://yourdomain.com',
    'https://www.yourdomain.com',
    'http://localhost:5173'
  ]
}));
```

### Step 4: Commit and Push

```bash
git add .
git commit -m "Configure production API endpoint"
git push origin main
```

Vercel will automatically redeploy!

---

## 🌐 Part 5: Custom Domain Setup

### Step 1: Update Frontend Domain

**In Vercel:**
1. Go to Settings → Domains
2. Add domain: `yourdomain.com`
3. Vercel shows DNS records to add

**In Netlify:**
1. Domain settings
2. Add custom domain
3. Follow provided instructions

**In GitHub Pages:**
1. Settings → Pages
2. Custom domain: `yourdomain.com`
3. GitHub creates CNAME file

### Step 2: Update Domain DNS Records

At your domain registrar (GoDaddy, Namecheap, etc.):

**For Vercel:**
```
Option 1 - Update Nameservers (Easiest):
  ns1.vercel-dns.com
  ns2.vercel-dns.com
  ns3.vercel-dns.com
  ns4.vercel-dns.com

Option 2 - Add CNAME Records:
  Name: yourdomain.com
  Value: cname.vercel-dns.com
```

**For GitHub Pages:**
```
Add A Records:
  @ → 185.199.108.153
  @ → 185.199.109.153
  @ → 185.199.110.153
  @ → 185.199.111.153

Add CNAME Record:
  www → YOUR_USERNAME.github.io
```

### Step 3: (Optional) Setup API Subdomain

If using `api.yourdomain.com`:

```
Type: CNAME
Name: api
Value: [your-render-app-url]
```

Then in frontend:
```javascript
const API_URL = 'https://api.yourdomain.com';
```

### Step 4: Verify DNS

```bash
# Check DNS propagation (may take 24-48 hours)
nslookup yourdomain.com

# Or use online tool:
# https://dnschecker.org
```

---

## ✅ Complete Deployment Checklist

- [ ] GitHub repository created
- [ ] Project pushed to GitHub
- [ ] Vercel/Netlify connected to GitHub
- [ ] Frontend deployed successfully
- [ ] Backend deployed to Render/Railway
- [ ] Backend API URL obtained
- [ ] Environment variables configured
- [ ] Frontend updated with API URL
- [ ] Backend CORS updated
- [ ] Custom domain DNS records added
- [ ] DNS propagated (24-48 hours)
- [ ] HTTPS enabled
- [ ] Tested all features on production

---

## 🔄 Continuous Deployment Workflow

After initial setup, deployment is automatic!

### To update your website:

1. Make changes locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update: description of changes"
   git push origin main
   ```

3. Vercel automatically redeploys (takes 1-2 minutes)

4. Changes live at `yourdomain.com` ✨

---

## 🚀 Automated Deployment Script

Use the provided script for one-command deployment:

```bash
# Make sure you're in project directory
cd /Users/anjalivashisth/Desktop/Projects/vashvibes

# Run deployment script
./deploy.sh
```

This script:
- ✓ Builds your project
- ✓ Commits changes to Git
- ✓ Pushes to GitHub
- ✓ Deploys to Vercel (if installed)

---

## 🐛 Troubleshooting

### "Repository not found" error
```bash
# Verify remote is set correctly
git remote -v

# Should show:
# origin  https://github.com/YOUR_USERNAME/vashvibes.git

# Update if wrong:
git remote set-url origin https://github.com/YOUR_USERNAME/vashvibes.git
```

### API calls returning 404
- [ ] Verify backend is deployed and running
- [ ] Check VITE_API_URL environment variable
- [ ] Ensure CORS is configured
- [ ] Check browser console for full error

### Domain not resolving
- [ ] Wait 24-48 hours for DNS propagation
- [ ] Clear browser cache
- [ ] Check DNS records: `nslookup yourdomain.com`
- [ ] Verify DNS records at registrar

### HTTPS not working
- [ ] Most platforms auto-generate SSL (5-10 minutes)
- [ ] Refresh page, wait a few minutes
- [ ] Check platform security settings
- [ ] Verify domain is properly configured

---

## 📚 Additional Resources

- [Git Documentation](https://git-scm.com/doc)
- [GitHub Help](https://docs.github.com)
- [Vercel Docs](https://vercel.com/docs)
- [Render Docs](https://render.com/docs)
- [Railway Docs](https://docs.railway.app)

---

## 🎉 Next Steps

1. ✅ Complete GitHub setup
2. ✅ Deploy to production
3. ✅ Configure custom domain
4. ✅ Test all features
5. ✅ Share with friends!

**Your AI Knowledge Hub is now live to the world! 🚀**

---

## 💬 Need Help?

- Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed info
- Check [DOMAIN_SETUP.md](./DOMAIN_SETUP.md) for domain issues
- Visit platform documentation links above
- Open issue on GitHub repository

---

**Happy Deploying! 🚀✨**
