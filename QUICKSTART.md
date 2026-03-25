# 🚀 QUICK START GUIDE - Aurion AI Website

## ⚡ Get Running in 3 Steps

### Step 1: Open in VS Code
```bash
cd aurion-website
code .
```

### Step 2: Preview Locally
**Option A - Live Server (Recommended)**
1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Click "Open with Live Server"

**Option B - Python**
```bash
python -m http.server 8000
# Visit: http://localhost:8000
```

### Step 3: Customize & Deploy
1. Update Calendly link (search for `your-calendly-link`)
2. Change email/phone in contact sections
3. Customize colors in `css/style.css`
4. Deploy to Netlify (drag & drop at netlify.com/drop)

---

## 📁 What's Included

```
aurion-website/
├── index.html              # Main website file
├── css/
│   └── style.css          # All styles (26KB)
├── js/
│   └── main.js            # Animations & interactions
├── assets/
│   └── favicon.svg        # Site icon
├── README.md              # Full documentation
├── DEPLOYMENT.md          # Deploy guides for all platforms
├── CUSTOMIZATION.md       # Complete customization guide
├── package.json           # Optional npm scripts
└── .gitignore            # Git ignore file
```

---

## 🎯 Must-Do Updates Before Launch

### 1. Calendly Integration
Find and replace in `index.html` (appears 3 times):
```javascript
url: 'https://calendly.com/main-arioun/30min'
```
With your actual link:
```javascript
url: 'https://calendly.com/yourname/meeting'
```

### 2. Contact Information
Replace in `index.html`:
- `main@aurion.com` → your email
- `+1 (234) 567-890` → your phone

### 3. Social Links (Footer)
Update LinkedIn, Twitter URLs:
```html
<a href="https://linkedin.com/company/yourcompany">
<a href="https://twitter.com/yourcompany">
```

---

## 🎨 Quick Customization

### Change Colors
Edit `css/style.css` (line ~24):
```css
:root {
    --color-primary: #00ff88;     /* Your brand color */
    --color-secondary: #0affed;   /* Accent color */
}
```

### Change Text
All content is in `index.html`. Sections are clearly labeled:
- Hero (lines 50-100)
- Services (lines 150-300)
- Process (lines 350-450)
- etc.

---

## 🚀 Deploy Options

### Fastest: Netlify Drag & Drop
1. Go to [netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `aurion-website` folder
3. Done! (30 seconds)

### Free Options
- **GitHub Pages**: Free, custom domain supported
- **Vercel**: Free, excellent performance
- **Netlify**: Free, includes forms & SSL

### Paid Options
- **Traditional Hosting**: cPanel, FTP upload
- **AWS S3**: Scalable, with CloudFront CDN

See `DEPLOYMENT.md` for detailed guides.

---

## ✅ Pre-Launch Checklist

- [ ] Updated Calendly link
- [ ] Changed contact email
- [ ] Updated phone number
- [ ] Modified social media links
- [ ] Tested on mobile device
- [ ] Verified all links work
- [ ] Checked page load speed
- [ ] Added Google Analytics (optional)

---

## 📚 Documentation

- **README.md** - Complete setup & features guide
- **DEPLOYMENT.md** - Step-by-step deployment for all platforms
- **CUSTOMIZATION.md** - Deep dive into customization options

---

## 🆘 Need Help?

1. Check README.md for detailed info
2. Check DEPLOYMENT.md for deployment issues
3. Check CUSTOMIZATION.md for design questions
4. Email: main@aurion.com

---

## 🎯 Feature Highlights

✨ **Futuristic Design**
- Animated grid background
- Glowing effects on hover
- Smooth scroll animations
- Parallax effects

📱 **Fully Responsive**
- Mobile-first design
- Works on all devices
- Touch-friendly interface

⚡ **Performance Optimized**
- Fast loading (<2s)
- Lazy loading support
- Optimized animations
- Clean, semantic code

🔗 **Ready to Deploy**
- No build process needed
- Works with any host
- SSL/HTTPS ready
- SEO optimized

---

## 💡 Pro Tips

1. **Test Locally First**: Always preview changes before deploying
2. **Mobile Testing**: Use real devices, not just browser DevTools
3. **Speed Check**: Use Google PageSpeed Insights after deploying
4. **Backup**: Keep a copy of original files
5. **Version Control**: Use Git to track changes

---

**🎉 Your website is ready to launch!**

Questions? Check the docs or email main@aurion.com
