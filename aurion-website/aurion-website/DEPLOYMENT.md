# Deployment Guide for Aurion AI Website

This guide covers multiple deployment options for your Aurion AI website.

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest)

**Method A: Drag and Drop**
1. Go to [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the entire `aurion-website` folder onto the page
3. Wait for deployment (usually ~30 seconds)
4. Your site is live! Get a custom domain in settings.

**Method B: GitHub Integration**
1. Push your code to GitHub
2. Sign in to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

**Custom Domain on Netlify:**
1. Go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. SSL certificate is automatic!

---

### Option 2: Vercel

**Method A: CLI Deployment**
```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

**Method B: GitHub Integration**
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Vercel auto-detects settings
5. Click Deploy

**Custom Domain on Vercel:**
1. Project Settings > Domains
2. Add your domain
3. Configure DNS as instructed

---

### Option 3: GitHub Pages (Free)

1. Push code to GitHub repository
2. Go to repository Settings
3. Scroll to "Pages" section
4. Source: Deploy from branch
5. Branch: main (or master)
6. Folder: / (root)
7. Save

Your site will be at: `https://yourusername.github.io/repository-name`

**Custom Domain on GitHub Pages:**
1. Add `CNAME` file to root with your domain
2. In GitHub Settings > Pages, enter custom domain
3. Configure DNS:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

---

### Option 4: AWS S3 + CloudFront

**S3 Bucket Setup:**
```bash
# Create S3 bucket
aws s3 mb s3://your-bucket-name

# Upload files
aws s3 sync . s3://your-bucket-name --exclude ".git/*"

# Enable website hosting
aws s3 website s3://your-bucket-name --index-document index.html
```

**Bucket Policy (make public):**
```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
  ]
}
```

**CloudFront Setup:**
1. Create CloudFront distribution
2. Origin: Your S3 bucket
3. Default Root Object: index.html
4. SSL Certificate: Request free certificate
5. Wait for deployment (~15 minutes)

---

### Option 5: Traditional cPanel Hosting

1. **Login to cPanel**
2. **File Manager** → public_html
3. **Upload** all files from aurion-website folder
4. **Extract** if you uploaded as zip
5. Done! Visit your domain

**Via FTP:**
```
Host: ftp.yourdomain.com
Username: your-username
Password: your-password
Port: 21

Upload to: /public_html/ or /www/
```

---

### Option 6: Firebase Hosting

```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Initialize
firebase init hosting

# Select options:
# - Public directory: .
# - Configure as SPA: No
# - Overwrite index.html: No

# Deploy
firebase deploy
```

---

## 🔧 Pre-Deployment Checklist

### Essential Updates

- [ ] **Calendly Link**: Replace all instances of `your-calendly-link`
- [ ] **Email**: Update `main@aurion.com` to your email
- [ ] **Phone**: Update `+1 (234) 567-890` to your phone
- [ ] **Social Links**: Update LinkedIn, Twitter URLs in footer
- [ ] **Meta Tags**: Verify SEO meta tags in `<head>`
- [ ] **Favicon**: Ensure favicon displays correctly

### Optional Enhancements

- [ ] **Google Analytics**: Add tracking code
- [ ] **Facebook Pixel**: Add pixel code
- [ ] **Privacy Policy**: Add page/link
- [ ] **Terms of Service**: Add page/link
- [ ] **sitemap.xml**: Create and submit to search engines
- [ ] **robots.txt**: Configure crawler access
- [ ] **Images**: Optimize all images (use TinyPNG)

### Testing Checklist

- [ ] Test on Chrome, Firefox, Safari, Edge
- [ ] Test on mobile devices (iOS, Android)
- [ ] Verify all links work (especially Calendly)
- [ ] Check form submissions (if applicable)
- [ ] Test page load speed (Google PageSpeed Insights)
- [ ] Verify responsive design at all breakpoints
- [ ] Check accessibility (WAVE tool)
- [ ] Test with JavaScript disabled (graceful degradation)

---

## 🌐 Domain Configuration

### Namecheap
1. Advanced DNS settings
2. Add CNAME record:
   ```
   Type: CNAME Record
   Host: www
   Value: your-hosting-url
   TTL: Automatic
   ```
3. Add A record for root domain if needed

### GoDaddy
1. DNS Management
2. Add record:
   ```
   Type: CNAME
   Name: www
   Value: your-hosting-url
   ```

### Cloudflare (Recommended for CDN + SSL)
1. Add site to Cloudflare
2. Update nameservers at your registrar
3. Add DNS records
4. Enable "Always Use HTTPS"
5. Enable Auto Minify (HTML, CSS, JS)

---

## 📊 Post-Deployment

### Set Up Analytics

**Google Analytics:**
```html
<!-- Add to <head> in index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Google Tag Manager:**
```html
<!-- Add to <head> -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>

<!-- Add to <body> -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
```

### Submit to Search Engines

**Google Search Console:**
1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property (your domain)
3. Verify ownership
4. Submit sitemap

**Bing Webmaster Tools:**
1. Go to [bing.com/webmasters](https://www.bing.com/webmasters)
2. Add site
3. Verify and submit sitemap

### Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourdomain.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <!-- Add more URLs as your site grows -->
</urlset>
```

### Create robots.txt

```
User-agent: *
Allow: /

Sitemap: https://yourdomain.com/sitemap.xml
```

---

## ⚡ Performance Optimization

### Enable Compression (on server)

**.htaccess (Apache):**
```apache
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**nginx.conf:**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml;
```

### Browser Caching

**.htaccess:**
```apache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### Minify Files (Optional)

```bash
# Install minification tools
npm install -g html-minifier clean-css-cli uglify-js

# Minify HTML
html-minifier --collapse-whitespace --remove-comments index.html -o index.min.html

# Minify CSS
cleancss -o css/style.min.css css/style.css

# Minify JS
uglifyjs js/main.js -o js/main.min.js -c -m
```

---

## 🔒 Security

### SSL Certificate

Most modern hosts (Netlify, Vercel, Cloudflare) provide free SSL automatically.

For others:
- Use [Let's Encrypt](https://letsencrypt.org/) (free)
- Or use Cloudflare's free SSL

### Security Headers

Add to your hosting configuration:

```
X-Frame-Options: SAMEORIGIN
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
```

---

## 📞 Support

If you encounter issues:
1. Check hosting platform documentation
2. Verify all file paths are correct
3. Clear browser cache
4. Check browser console for errors

For Aurion-specific questions:
- Email: main@aurion.com

---

## ✅ Final Steps

1. **Test Everything**: Click every link, button, and form
2. **Mobile Check**: Test on actual mobile devices
3. **Analytics**: Verify tracking codes work
4. **Performance**: Run Google PageSpeed Insights
5. **SEO**: Use tools like SEMrush or Ahrefs
6. **Backup**: Keep a backup of all files
7. **Monitor**: Check analytics regularly

---

**🎉 Congratulations! Your Aurion AI website is now live!**
