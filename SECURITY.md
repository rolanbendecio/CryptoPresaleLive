# 🔒 Security Configuration Guide

## 🛡️ Security Features Implemented

### Server-Level Security

1. **Helmet.js** - Security headers middleware
   - Content Security Policy (CSP)
   - X-Frame-Options: DENY
   - X-Content-Type-Options: nosniff
   - X-XSS-Protection: 1; mode=block
   - Referrer Policy configuration

2. **Rate Limiting**
   - API endpoints limited to 100 requests per 15 minutes per IP (production)
   - Configurable limits for different endpoints

3. **CORS Configuration**
   - Production: Only allows specified origins
   - Development: Permissive for development ease

4. **Input Validation**
   - JSON body size limits (10MB max)
   - URL encoding limits
   - Request sanitization

### Environment Security

5. **Environment Variables**
   - Sensitive data stored in `.env.production`
   - No hardcoded secrets in source code
   - Different configs for dev/production

6. **Error Handling**
   - Production: Generic error messages
   - Development: Detailed error information
   - No sensitive information exposure

### File System Security

7. **File Access Control**
   - `.htaccess` prevents access to sensitive files
   - Node modules and server files blocked
   - Environment files protected

8. **Static File Security**
   - Proper MIME type handling
   - Cache control headers
   - Compression enabled

## 🔧 Configuration Requirements

### 1. Update Environment Variables

**Critical: Update these in `.env.production`:**

```bash
# Generate a strong session secret (32+ characters)
SESSION_SECRET=your-very-strong-secret-key-here-32-chars-min

# Set your actual domain
CORS_ORIGIN=https://yourdomain.com

# Security settings
FORCE_HTTPS=true
SECURE_COOKIES=true
```

### 2. SSL/HTTPS Configuration

**Mandatory for production:**
- SSL certificate installed
- HTTP to HTTPS redirect enabled
- HSTS headers configured
- Secure cookie flags enabled

### 3. Server Hardening

**RunCloud Server Security:**

```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install fail2ban for brute force protection
sudo apt install fail2ban -y

# Configure firewall (allow only necessary ports)
sudo ufw allow ssh
sudo ufw allow http
sudo ufw allow https
sudo ufw enable

# Disable unnecessary services
sudo systemctl disable apache2 # if not using Apache
sudo systemctl disable nginx # if not using Nginx
```

### 4. File Permissions

```bash
# Set proper file permissions
chmod 755 /path/to/your/app
chmod 644 /path/to/your/app/.env.production
chmod 644 /path/to/your/app/server/data/*.json

# Ensure web server can read files
chown -R www-data:www-data /path/to/your/app
```

## 🚨 Security Checklist

### Pre-Deployment Security Audit

- [ ] **Environment Variables**
  - [ ] Strong session secret generated (32+ characters)
  - [ ] Production domain configured in CORS_ORIGIN
  - [ ] No sensitive data in source code
  - [ ] `.env.production` properly secured

- [ ] **HTTPS/SSL**
  - [ ] SSL certificate installed and valid
  - [ ] HTTP to HTTPS redirect enabled
  - [ ] HSTS headers configured
  - [ ] Secure cookie flags enabled

- [ ] **Server Security**
  - [ ] Latest security patches applied
  - [ ] Unnecessary services disabled
  - [ ] Firewall configured (ports 22, 80, 443 only)
  - [ ] Fail2ban or similar intrusion detection installed

- [ ] **Application Security**
  - [ ] Rate limiting configured and tested
  - [ ] CORS properly configured for production domain
  - [ ] CSP headers preventing XSS
  - [ ] Error handling doesn't expose sensitive info
  - [ ] File permissions properly set

- [ ] **Data Security**
  - [ ] JSON data files secured from direct access
  - [ ] No sensitive data in presale JSON files
  - [ ] Regular backups implemented
  - [ ] Log files secured and rotated

### Ongoing Security Maintenance

- [ ] **Regular Updates**
  - [ ] Node.js and npm packages updated monthly
  - [ ] Server OS security patches applied
  - [ ] Dependencies audited for vulnerabilities

- [ ] **Monitoring**
  - [ ] Log monitoring for suspicious activity
  - [ ] Rate limiting effectiveness checked
  - [ ] SSL certificate expiration monitoring
  - [ ] Server resource monitoring

- [ ] **Backup & Recovery**
  - [ ] Regular backups of application data
  - [ ] Backup restoration tested
  - [ ] Incident response plan documented

## ⚠️ Security Warnings

### Critical Actions Required:

1. **Change Default Secrets**
   ```bash
   # Generate strong session secret
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

2. **Validate Input Sources**
   - Never trust client-side data
   - Validate all API inputs
   - Sanitize user-generated content

3. **Monitor for Vulnerabilities**
   ```bash
   # Regular security audits
   npm audit
   npm audit fix
   ```

4. **Secure Headers Verification**
   ```bash
   # Test security headers
   curl -I https://yourdomain.com
   ```

### Common Vulnerabilities to Avoid:

- **XSS**: Prevented by CSP headers and React's built-in protection
- **CSRF**: Mitigated by proper CORS configuration
- **Injection**: Protected by input validation and parameterized queries
- **Exposure**: Environment variables and error handling protect sensitive data
- **Brute Force**: Rate limiting and fail2ban protect against attacks

## 🔍 Security Testing

### Manual Security Tests:

1. **Headers Check**
   ```bash
   curl -I https://yourdomain.com
   # Verify security headers are present
   ```

2. **Rate Limiting Test**
   ```bash
   # Test API rate limits
   for i in {1..20}; do curl https://yourdomain.com/api/posts; done
   ```

3. **CORS Test**
   ```bash
   # Test CORS from different origin
   curl -H "Origin: https://malicious.com" https://yourdomain.com/api/posts
   ```

4. **SSL Test**
   - Use SSL Labs SSL Test: https://www.ssllabs.com/ssltest/
   - Verify A+ rating

### Automated Security Testing:

```bash
# Install security testing tools
npm install -g nsp
npm install -g audit-ci

# Run security audits
npm audit
nsp check
```

## 📞 Incident Response

### If Security Breach Detected:

1. **Immediate Actions**
   - Change all passwords and secrets immediately
   - Review access logs for suspicious activity
   - Temporarily block suspicious IPs
   - Check for unauthorized file modifications

2. **Investigation**
   - Analyze logs for entry point
   - Check for data exfiltration
   - Assess scope of compromise
   - Document timeline of events

3. **Recovery**
   - Restore from clean backups if necessary
   - Apply security patches
   - Update all credentials
   - Strengthen security measures

4. **Prevention**
   - Implement additional monitoring
   - Update security procedures
   - Conduct security training
   - Regular penetration testing

---

**Security is an ongoing process. Regular reviews and updates are essential for maintaining a secure application.**