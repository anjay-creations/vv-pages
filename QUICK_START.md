# 🚀 Quick Start - 5 Minute Deployment Guide

**TL;DR** - Get your AI Knowledge Hub live in 5 minutes!

---

## ⚡ Quick Commands

### 1. Push to GitHub (2 minutes)

```bash
cd /Users/anjalivashisth/Desktop/Projects/vashvibes

# Setup git
git config --global user.name "Your Name"
git config --global user.email "your-email@gmail.com"

# Initialize repo
git init
git add .
git commit -m "Initial commit: AI Knowledge Hub"

# Push to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/vashvibes.git
git branch -M main
git push -u origin main
```

### 2. Deploy Frontend (2 minutes)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Follow prompts, select defaults
# You'll get: https://vashvibes.vercel.app
```

### 3. Deploy Backend (1 minute)

1. Go to [render.com](https://render.com)
2. Click "New Web Service"
3. Connect GitHub & select your repo
4. Settings:
   - Build: `npm install`
   - Start: `node server/server.js`
   - Plan: Free
5. Create → Copy your URL (e.g., `https://vashvibes-api.onrender.com`)

---

## 🌐 Configure Domain (5 minutes)

### At Vercel Dashboard:
1. Settings → Domains → Add Domain
2. Copy DNS records provided

### At Your Domain Registrar:
1. Add DNS records from Vercel
2. Wait 5-60 minutes for propagation
3. Visit your domain → Done! ✨

---

## 📝 Configuration

### Update Backend URL in Frontend

In `src/components/CommunityPosts.jsx`, line ~15:

```javascript
const API_URL = 'https://your-backend-url.onrender.com';
```

Then:
```bash
git add .
git commit -m "Update API URL"
git push origin main
# Vercel auto-deploys!
```

---

## ✅ Verification

Visit your website:
- ✓ History section loads
- ✓ Current tools display
- ✓ Coping blogs visible
- ✓ Community posts load
- ✓ Can create new post (tests API)

---

## 📚 Full Guides

For detailed instructions, see:
- **[GITHUB_SETUP.md](./GITHUB_SETUP.md)** - Complete GitHub setup
- **[DEPLOYMENT.md](./DEPLOYMENT.md)** - All deployment options
- **[DOMAIN_SETUP.md](./DOMAIN_SETUP.md)** - Domain configuration

---

## 🎯 One-Line Deployment

Already set up? Use this:

```bash
./deploy.sh
```

---

## 💬 Still Need Help?

Check the appropriate guide above or:
- Platform docs: [Vercel](https://vercel.com/docs) | [Render](https://render.com/docs)
- DNS check: [dnschecker.org](https://dnschecker.org)

**You've got this! 🚀**
