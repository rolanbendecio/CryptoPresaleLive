# 🚀 RunCloud Deployment Guide - Crypto Presales Webapp

## 📋 Pre-Deployment Checklist

- [ ] RunCloud account setup and server connected
- [ ] Domain name configured
- [ ] SSL certificate ready
- [ ] Node.js version 16+ available on server

## 🛠️ Step-by-Step RunCloud Deployment

### 1. **Create Web Application in RunCloud**

1. Log into your RunCloud dashboard
2. Select your connected server
3. Click "Create Web App" 
4. Configure your web application:
   - **Name**: `crypto-presales-webapp`
   - **Domain**: Your domain name
   - **Public Path**: `/public_html`
   - **PHP Version**: Not needed (Node.js app)
   - **User**: Create or select existing user

### 2. **Upload Project Files**

Upload all project files to your web application directory:
```
/home/runcloud/webapps/crypto-presales-webapp/
```

**Important files to include:**
- `server/` directory with all backend code
- `client/` directory with React source code  
- `package.json` (root)
- `ecosystem.config.js` (PM2 configuration)
- `.env.production` (environment configuration)
- `.htaccess` files

### 3. **Configure Environment Variables**

1. Copy `.env.example` to `.env.production`
2. Update the following variables:

```bash
# .env.production
NODE_ENV=production
PORT=5000
SERVER_HOST=0.0.0.0
CORS_ORIGIN=https://yourdomain.com
SESSION_SECRET=your-generated-secret-key
```

**Client environment** (`.env.production` in client folder):
```bash
GENERATE_SOURCEMAP=false
REACT_APP_SITE_URL=https://yourdomain.com
REACT_APP_ENVIRONMENT=production
HTTPS=true
```

### 4. **Install Dependencies & Build**

SSH into your server and run:

```bash
cd /home/runcloud/webapps/crypto-presales-webapp

# Install all dependencies
npm run install-all

# Build for production
npm run build:production

# Create logs directory
npm run logs
```

### 5. **Configure Node.js in RunCloud**

1. In RunCloud dashboard, go to your web application
2. Navigate to "Settings" > "Node.js"
3. Enable Node.js
4. Set configuration:
   - **Node.js Version**: Latest stable (18+ recommended)
   - **Startup File**: `server/index.js`
   - **Environment**: `production`
   - **Port**: `5000`
   - **Auto Start**: Enabled

### 6. **Setup PM2 Process Manager**

```bash
# Install PM2 globally (if not already installed)
npm install -g pm2

# Update ecosystem.config.js with correct paths
# Edit the 'cwd' path in ecosystem.config.js to match your deployment path

# Start application with PM2
npm run pm2:start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on server boot
pm2 startup
```

### 7. **Configure Reverse Proxy**

In RunCloud dashboard:

1. Go to "Web Application" > "Reverse Proxy"
2. Add new reverse proxy rule:
   - **Match**: `/api/.*`
   - **Forward to**: `http://127.0.0.1:5000`
   - **Forward Host Header**: Checked

3. For React routing, ensure `.htaccess` handles client-side routing

### 8. **SSL Configuration**

1. In RunCloud dashboard, go to "SSL/TLS"
2. Enable SSL certificate (Let's Encrypt recommended)
3. Enable "Force HTTPS Redirect"

### 9. **Final Configuration**

**Update ecosystem.config.js paths:**
```javascript
// Update this line with your actual path
cwd: '/home/runcloud/webapps/crypto-presales-webapp',
user: 'runcloud',
```

**Verify .htaccess files are in place:**
- Root `.htaccess` for API routing and security
- `client/.htaccess` for React router support

## ⚡ Performance Optimization

### Enable Compression
The server already includes compression middleware. Ensure it's working:
```bash
curl -H "Accept-Encoding: gzip" https://yourdomain.com/api/posts -v
```

### Static File Caching
`.htaccess` files include caching rules for optimal performance.

### Monitor Resources
```bash
# Monitor PM2 processes
npm run pm2:monit

# Check logs
npm run pm2:logs

# Server resource usage
htop
```

## 🔍 Troubleshooting

### Common Issues:

**1. Application won't start:**
```bash
# Check PM2 logs
pm2 logs crypto-presales-webapp

# Restart application
npm run pm2:restart
```

**2. API routes not working:**
- Verify reverse proxy configuration in RunCloud
- Check CORS settings in `.env.production`
- Ensure Node.js port (5000) matches proxy configuration

**3. React routing issues:**
- Verify `.htaccess` files are uploaded
- Check Apache mod_rewrite is enabled
- Confirm public path configuration

**4. Permission issues:**
```bash
# Fix file permissions
chown -R runcloud:runcloud /home/runcloud/webapps/crypto-presales-webapp
chmod -R 755 /home/runcloud/webapps/crypto-presales-webapp
```

### Debug Commands:
```bash
# Check if Node.js is running
ps aux | grep node

# Test API endpoint
curl https://yourdomain.com/api/health

# Check PM2 status
pm2 status

# View server logs
tail -f logs/app.log
```

## 🔄 Updates & Maintenance

### Deploying Updates:

1. **Upload new files** to your web application directory
2. **Rebuild** the application:
   ```bash
   npm run build:production
   ```
3. **Restart** PM2:
   ```bash
   npm run pm2:restart
   ```

### Adding New Presales:

1. Create new JSON file in `server/data/`
2. Follow existing format
3. Restart application:
   ```bash
   npm run pm2:restart
   ```

### Backup Strategy:

- **Code**: Use Git repository for version control
- **Data**: Regular backup of `server/data/` directory
- **Environment**: Backup `.env.production` securely

## 📊 Monitoring

### Health Checks:
- API Health: `https://yourdomain.com/api/health`
- Posts Endpoint: `https://yourdomain.com/api/posts`
- React App: `https://yourdomain.com`

### Performance Monitoring:
```bash
# PM2 monitoring
pm2 monit

# Server resources
free -h
df -h
```

## 🎯 Production Checklist

- [ ] Environment variables configured
- [ ] SSL certificate installed and forced
- [ ] Domain pointing to server
- [ ] PM2 running and auto-starting
- [ ] Reverse proxy configured for API routes
- [ ] Static files serving correctly
- [ ] React routing working
- [ ] API endpoints responding
- [ ] Logs being written properly
- [ ] Performance monitoring setup
- [ ] Backup strategy implemented

## 📞 Support

If you encounter issues:

1. Check the troubleshooting section above
2. Review PM2 and application logs
3. Verify RunCloud configuration matches this guide
4. Test individual components (API, static files, routing)

---

**Your crypto presales webapp is now ready for production on RunCloud! 🎉**