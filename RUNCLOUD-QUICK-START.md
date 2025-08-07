# 🚀 RunCloud Quick Start Guide

## ⚡ Fast Deploy to RunCloud (5 Minutes)

### Step 1: Upload Files
Upload the entire project folder to your RunCloud web app directory:
```
/home/runcloud/webapps/your-app-name/
```

### Step 2: Configure Environment
1. Copy `.env.example` to `.env.production`
2. Update these critical values:
```bash
CORS_ORIGIN=https://yourdomain.com
SESSION_SECRET=generate-32-char-random-string
```

### Step 3: Install & Build
SSH into your server and run:
```bash
cd /home/runcloud/webapps/your-app-name
npm run install-all
npm run build:production
npm run logs
```

### Step 4: Start with PM2
```bash
# Update ecosystem.config.js with your actual path
# Edit line 31: cwd: '/home/runcloud/webapps/your-app-name'

npm run pm2:start
pm2 save
pm2 startup
```

### Step 5: Configure RunCloud Dashboard
1. **Web App Settings** → **Node.js**:
   - Enable Node.js
   - Startup File: `server/index.js`
   - Port: `5000`
   - Environment: `production`

2. **Reverse Proxy**:
   - Match: `/api/.*`
   - Forward to: `http://127.0.0.1:5000`

3. **SSL/TLS**:
   - Enable SSL certificate
   - Force HTTPS redirect

### Step 6: Test
- Visit: `https://yourdomain.com`
- Test API: `https://yourdomain.com/api/posts`

## ✅ Success Checklist
- [ ] Files uploaded to RunCloud
- [ ] Environment variables configured
- [ ] Dependencies installed and built
- [ ] PM2 running the application
- [ ] RunCloud Node.js enabled
- [ ] Reverse proxy configured
- [ ] SSL certificate active
- [ ] Website loads correctly
- [ ] API endpoints responding

## 🚨 If Something Goes Wrong

**Check PM2 logs:**
```bash
npm run pm2:logs
```

**Restart application:**
```bash
npm run pm2:restart
```

**Check RunCloud logs:**
- Dashboard → Web App → Logs

---

**Total deployment time: ~5 minutes** 🎉

For detailed instructions, see `DEPLOYMENT.md`