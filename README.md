# Aurion AI - Website

A futuristic, production-ready website for Aurion AI - building AI systems that run your business automatically.

## 🚀 Features

- **Futuristic Design**: Modern, sleek interface with animated backgrounds, glowing effects, and smooth transitions
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Calendly Integration**: Direct booking system for strategy calls
- **Optimized Performance**: Fast loading, smooth animations, lazy loading support
- **SEO Ready**: Proper meta tags, semantic HTML, and structured data
- **Accessibility**: WCAG compliant with keyboard navigation and screen reader support

## 📁 Project Structure

```
aurion-website/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Main stylesheet with all styles
├── js/
│   └── main.js         # JavaScript for animations and interactions
├── assets/
│   └── favicon.svg     # Site favicon
└── README.md           # This file
```

## 🛠️ Setup Instructions

### 1. Basic Setup (No Build Tools Required)

Simply open the project folder in VS Code:

```bash
# Navigate to the project folder
cd aurion-website

# Open in VS Code
code .
```

### 2. Live Preview

**Option A: VS Code Live Server Extension (Recommended)**

1. Install the "Live Server" extension in VS Code
2. Right-click on `index.html`
3. Select "Open with Live Server"
4. Your website will open in the browser with auto-reload

**Option B: Python Simple Server**

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Then visit: `http://localhost:8000`

**Option C: Node.js http-server**

```bash
# Install globally
npm install -g http-server

# Run server
http-server
```

## 🎨 Customization Guide

### Update Calendly Link

In `index.html`, find all instances of:
```javascript
onclick="Calendly.initPopupWidget({url: 'https://calendly.com/main-arioun/30min'});return false;"
```

Replace `your-calendly-link` with your actual Calendly URL.

### Change Colors

Edit CSS variables in `css/style.css`:

```css
:root {
    --color-primary: #00ff88;        /* Main brand color */
    --color-secondary: #0affed;      /* Secondary accent */
    --color-accent: #ff3366;         /* Warning/contrast color */
}
```

### Update Contact Information

In `index.html`, find and update:
- Email: `main@aurion.xom`
- Phone: `+1 (234) 567-890`
- Social media links in the footer

### Modify Content

All content is in `index.html`. Each section is clearly marked with comments:
- Hero section
- Services section
- Process section
- Who It's For section
- Principles section
- CTA section
- Footer

## 🚢 Deployment

### Option 1: Netlify (Easiest)

1. Push code to GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select your repository
5. Deploy!

**Or drag and drop:**
1. Zip the entire `aurion-website` folder
2. Drag it to Netlify's drop zone
3. Done!

### Option 2: Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 3: GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch (main/master)
4. Select folder (root or /docs)
5. Save

### Option 4: Traditional Hosting (cPanel, etc.)

1. Use FTP client (FileZilla, Cyberduck)
2. Upload all files to `public_html` or `www` directory
3. Done!

## 📊 Analytics Setup

### Google Analytics

Add to `<head>` in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Facebook Pixel

Add to `<head>` in `index.html`:

```html
<!-- Facebook Pixel Code -->
<script>
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window, document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init', 'YOUR_PIXEL_ID');
  fbq('track', 'PageView');
</script>
```

## 🔧 Advanced Customization

### Adding a Contact Form

1. Create form in HTML
2. Use services like:
   - Formspree
   - Netlify Forms
   - Google Forms
   - Custom backend

Example using Formspree:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  <input type="email" name="email" required>
  <textarea name="message" required></textarea>
  <button type="submit">Send</button>
</form>
```

### Adding Blog

Consider using:
- [Jekyll](https://jekyllrb.com/) for static blog
- [Ghost](https://ghost.org/) for CMS
- Subdomain with WordPress

### Performance Optimization

Already implemented:
- ✅ Minified CSS and JS (can be further minified)
- ✅ Lazy loading support
- ✅ Optimized animations
- ✅ Throttled scroll events

Additional steps:
1. Compress images (use TinyPNG, ImageOptim)
2. Enable gzip compression on server
3. Add CDN (Cloudflare)
4. Minify HTML, CSS, JS for production

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 SEO Checklist

- [x] Meta tags configured
- [x] Semantic HTML structure
- [x] Alt text for images (add when you include images)
- [ ] sitemap.xml (add if needed)
- [ ] robots.txt (add if needed)
- [ ] Schema markup (optional)
- [ ] Open Graph tags (add if needed)

### Add Sitemap

Create `sitemap.xml`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yoursite.com/</loc>
    <lastmod>2025-01-01</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

### Add robots.txt

Create `robots.txt`:

```
User-agent: *
Allow: /

Sitemap: https://yoursite.com/sitemap.xml
```

## 💡 Tips

1. **Test Calendly**: Make sure your Calendly link works before deploying
2. **Update Content**: Replace placeholder text with real company info
3. **Add Images**: Consider adding team photos, screenshots, or graphics
4. **Legal Pages**: Add Privacy Policy and Terms of Service
5. **Monitor Performance**: Use Google PageSpeed Insights
6. **Check Mobile**: Always test on real mobile devices

## 🐛 Troubleshooting

### Animations not working
- Check browser console for errors
- Ensure JavaScript is enabled
- Verify all files are loaded correctly

### Calendly not opening
- Verify Calendly URL is correct
- Check if popup blockers are disabled
- Ensure Calendly script is loaded

### Styles not applying
- Clear browser cache
- Check CSS file path is correct
- Verify no CSS syntax errors

## 📞 Support

For questions or issues:
- Email: main@aurion.com
- Create an issue in the repository

## 📄 License

Copyright © 2025 Aurion AI. All rights reserved.

---

**Built with ❤️ for businesses that want real AI automation, not hype.**
