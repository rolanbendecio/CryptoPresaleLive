# 🚀 RunCloud Static Deployment Instructions

## File to Upload: `crypto-presales-runcloud.tar.gz`

### Quick Deploy Steps:

1. **Upload File**: 
   - Upload `crypto-presales-runcloud.tar.gz` (510KB) to your RunCloud server

2. **Extract to Web Directory**:
   ```bash
   cd /home/runcloud/webapps/your-app-name
   tar -xzf crypto-presales-runcloud.tar.gz
   ```

3. **Set Permissions**:
   ```bash
   chown -R runcloud:runcloud /home/runcloud/webapps/your-app-name
   chmod -R 755 /home/runcloud/webapps/your-app-name
   ```

4. **Configure RunCloud**:
   - **App Type**: Static HTML
   - **Public Path**: `/home/runcloud/webapps/your-app-name`
   - **Index File**: `index.html`

5. **Enable SSL**:
   - Go to SSL tab and enable free SSL certificate
   - Force HTTPS redirect

## ✅ What's Included:

- **Static HTML Files**: All pages pre-built and optimized
- **Real Live Presale Data**: 14 active crypto presales with current data
- **Responsive Design**: Mobile-friendly Tailwind CSS styling  
- **SEO Optimized**: Meta tags, structured data, sitemap
- **Fast Loading**: Optimized assets and chunked JavaScript

## 🎯 Features:

- **Live Presales**: SOLAXY ($22.5M raised), TOKEN6900 (1,000%+ APY), Wall Street Pepe ($70M), etc.
- **Filter System**: Filter by Live, Upcoming, Ended status
- **Presale Details**: Individual pages for each project
- **Real Affiliate Links**: Direct links to official presale pages
- **Statistics Dashboard**: Total raised, live count, average APY

## 🚨 File Structure After Extraction:

```
/home/runcloud/webapps/your-app-name/
├── index.html (Homepage)
├── 404.html (Error page)
├── _next/ (Next.js assets)
│   └── static/ (CSS, JS, fonts)
└── presale/ (Individual presale pages)
    ├── solaxy/index.html
    ├── token6900/index.html
    ├── wall-street-pepe/index.html
    └── [11 more presale pages]
```

**Total deployment time: ~2 minutes** ⚡