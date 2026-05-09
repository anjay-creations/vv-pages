# 🌐 Custom Domain Setup Guide

Quick reference for configuring your custom domain with AI Knowledge Hub.

## 1️⃣ What You'll Need

- ✓ Your custom domain (e.g., `yourdomain.com`)
- ✓ Access to domain registrar account
- ✓ Access to DNS management panel
- ✓ Deployed frontend (Vercel, Netlify, or GitHub Pages)
- ✓ Deployed backend (Render, Railway, or Heroku)

---

## 2️⃣ DNS Configuration by Platform

### Using Vercel (Recommended)

**Easiest Method - Vercel Nameservers:**

1. In Vercel Dashboard:
   - Go to Settings → Domains
   - Add your domain: `yourdomain.com`
   - Copy the nameservers provided

2. At your domain registrar:
   - Update nameservers to:
     - `ns1.vercel-dns.com`
     - `ns2.vercel-dns.com`
     - `ns3.vercel-dns.com`
     - `ns4.vercel-dns.com`

3. Vercel will auto-verify and redirect traffic

**Alternative Method - CNAME Records:**

If you want to keep current nameservers:

1. At your domain registrar, add:
   - Type: `CNAME`
   - Name: `yourdomain.com`
   - Value: `cname.vercel-dns.com`
   - Type: `CNAME`
   - Name: `www.yourdomain.com`
   - Value: `cname.vercel-dns.com`

---

### Using GitHub Pages

Add these A records:

```
Type: A
Name: @
Value: 185.199.108.153

Type: A
Name: @
Value: 185.199.109.153

Type: A
Name: @
Value: 185.199.110.153

Type: A
Name: @
Value: 185.199.111.153

Type: CNAME
Name: www
Value: YOUR_USERNAME.github.io
```

Then in GitHub Settings → Pages:
- Custom domain: `yourdomain.com`
- Enforce HTTPS ✓

---

### Using Netlify

Simplest setup:

1. In Netlify Dashboard → Domain settings
2. Add custom domain
3. Netlify generates DNS records
4. Add those records to your registrar

OR update nameservers to Netlify's nameservers

---

## 3️⃣ Backend API Domain (Optional but Recommended)

To use `api.yourdomain.com` instead of `https://render-app.com`:

1. Create subdomain in DNS:
   ```
   Type: CNAME
   Name: api
   Value: [your-backend-service-url]
   ```

2. Update frontend code:
   ```javascript
   const API_URL = process.env.VITE_API_URL || 'https://api.yourdomain.com';
   ```

3. Configure CORS in backend:
   ```javascript
   app.use(cors({
     origin: 'https://yourdomain.com'
   }));
   ```

---

## 4️⃣ Verification Checklist

- [ ] Domain purchased
- [ ] Registrar account access confirmed
- [ ] Frontend deployed to Vercel/Netlify/GitHub Pages
- [ ] Backend deployed to Render/Railway/Heroku
- [ ] Backend API URL ready
- [ ] DNS records added at registrar
- [ ] HTTPS enabled in hosting platform
- [ ] Verified domain connects in platform settings

---

## 5️⃣ Testing DNS Configuration

### Check DNS propagation:
```bash
# Test A records
nslookup yourdomain.com

# Test CNAME records
nslookup www.yourdomain.com

# Use online tool for full report:
# https://dnschecker.org
```

Expected output shows your hosting provider's IP address.

---

## 6️⃣ Troubleshooting

### Domain shows "not found"
- Wait 24-48 hours for DNS propagation
- Clear browser cache and DNS cache:
  ```bash
  # macOS
  sudo dscacheutil -flushcache
  
  # Linux
  sudo systemctl restart systemd-resolved
  
  # Windows
  ipconfig /flushdns
  ```

### SSL/HTTPS not working
- Ensure platform has issued SSL certificate
- Most platforms auto-generate, wait a few minutes
- Check platform security settings

### API calls failing
- Verify backend deployment is running
- Check API URL environment variable
- Ensure CORS is configured properly

---

## 7️⃣ DNS Record Templates

### Vercel + Custom Backend

```
Domain: yourdomain.com
Purpose: Frontend hosting

Registrar DNS Records:
- Nameserver 1: ns1.vercel-dns.com
- Nameserver 2: ns2.vercel-dns.com
- (Or CNAME: cname.vercel-dns.com)

Additional:
Type: CNAME
Name: api
Value: [render-app.onrender.com or railway.app URL]
```

### GitHub Pages + Custom Backend

```
Domain: yourdomain.com
Purpose: Frontend hosting

Registrar DNS Records:
Type: A
Name: @
Values: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

Type: CNAME
Name: www
Value: [your-username].github.io

Type: CNAME
Name: api
Value: [your-backend-url]
```

---

## 📞 Popular Registrars' Support

- **GoDaddy**: domain.com → Manage DNS
- **Namecheap**: Advanced DNS
- **Google Domains**: DNS Settings
- **Network Solutions**: Manage DNS
- **AWS Route 53**: Hosted Zones

---

## 🎯 Final Step

Once domain is configured and propagated:

1. Visit `https://yourdomain.com` in browser
2. Test all sections (History, Current, Coping, Community)
3. Submit a test post to verify API connectivity
4. Monitor Vercel/platform dashboard for errors

**Congratulations! Your AI Knowledge Hub is live! 🎉**

---

For platform-specific help:
- [Vercel Custom Domain Docs](https://vercel.com/docs/concepts/projects/custom-domains)
- [GitHub Pages Custom Domain Docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site)
- [Netlify Custom Domain Docs](https://docs.netlify.com/domains-https/custom-domains/)
