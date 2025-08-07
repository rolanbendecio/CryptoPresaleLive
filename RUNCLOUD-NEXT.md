# 🚀 RunCloud Next.js Deployment Guide

## ⚡ Deploy Next.js App to RunCloud (5 Minutes)

### Step 1: Upload Files
Create a deployment package and upload to your RunCloud web app:

**Upload this entire directory to:**
```
/home/runcloud/webapps/your-app-name/
```

### Step 2: Configure Environment
1. Create `.env.local` in your project root:
```bash
NODE_ENV=production
```

### Step 3: Install & Build
SSH into your server and run:
```bash
cd /home/runcloud/webapps/your-app-name
npm install
npm run build
```

### Step 4: Start with PM2
Create `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [
    {
      name: 'crypto-presales-webapp',
      script: 'npm',
      args: 'start',
      cwd: '/home/runcloud/webapps/your-app-name',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
}
```

Start the application:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup
```

### Step 5: Configure RunCloud Dashboard
1. **Web App Settings** → **Node.js**:
   - Enable Node.js
   - Startup File: `server.js` (or use PM2)
   - Port: `3000`
   - Environment: `production`

2. **Public Path**: 
   - Set to your web app directory
   - Next.js will serve static files automatically

3. **SSL/TLS**:
   - Enable SSL certificate
   - Force HTTPS redirect

### Step 6: Test
- Visit: `https://yourdomain.com`
- All pages should load with presale data

## ✅ Files Included in Deployment Package:
- `app/` - Next.js app directory with pages and API routes
- `components/` - React components
- `lib/` - Utility functions
- `data/` - Presale JSON data files
- `public/` - Static assets
- `package.json` - Dependencies
- `next.config.js` - Next.js configuration
- `tailwind.config.js` - Styling configuration

## 🚨 Troubleshooting

**Check PM2 logs:**
```bash
pm2 logs crypto-presales-webapp
```

**Restart application:**
```bash
pm2 restart crypto-presales-webapp
```

**Rebuild if needed:**
```bash
npm run build
pm2 restart crypto-presales-webapp
```

---

**Total deployment time: ~5 minutes** 🎉