# Customization Guide

Complete guide to customizing your Aurion AI website.

## 🎨 Color Scheme

All color sare defined as CSS variables in `css/style.css`. Find the `:root` section:

```css
:root {
    /* Primary Colors */
    --color-primary: #00ff88;           /* Main green - used for CTAs, highlights */
    --color-primary-dark: #00cc6a;      /* Darker green - hover states */
    --color-primary-light: #66ffb3;     /* Lighter green - subtle accents */
    --color-secondary: #0affed;         /* Cyan - secondary accent */
    --color-accent: #ff3366;            /* Pink/red - warnings, "not a fit" */
    
    /* Background Colors */
    --color-bg-primary: #0a0a0a;        /* Main black background */
    --color-bg-secondary: #1a1a1a;      /* Section backgrounds */
    --color-bg-tertiary: #2a2a2a;       /* Card backgrounds */
    
    /* Text Colors */
    --color-text-primary: #fafafa;      /* Main white text */
    --color-text-secondary: #999;       /* Gray text */
    --color-text-muted: #666;           /* Muted text */
}
```

### Popular Color Scheme Examples

**Blue Tech:**
```css
--color-primary: #00a8ff;
--color-secondary: #0099ff;
--color-accent: #ff4757;
```

**Purple Modern:**
```css
--color-primary: #9b59b6;
--color-secondary: #8e44ad;
--color-accent: #e74c3c;
```

**Orange Energy:**
```css
--color-primary: #ff6b35;
--color-secondary: #f7931e;
--color-accent: #00b4d8;
```

---

## 📝 Content Updates

### 1. Hero Section

In `index.html`, find the `.hero` section:

```html
<h1 class="hero-title">
    AI Systems That Run Your Business
    <span class="gradient-text">Automatically</span>
</h1>
<p class="hero-subtitle">
    Your subtitle here...
</p>
```

**Tips:**
- Keep headline under 15 words for impact
- Highlight 1-2 key words with `<span class="gradient-text">`
- Subtitle should be 1-2 sentences max

### 2. Services Section

Each service card follows this structure:

```html
<div class="service-card">
    <div class="service-icon-wrapper">
        <div class="service-icon">🎯</div>  <!-- Change emoji -->
    </div>
    <h3 class="service-title">Your Service Name</h3>
    <p class="service-description">Description here...</p>
    <ul class="service-features">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
    </ul>
</div>
```

**Recommended Emojis by Service Type:**
- Lead Gen: 🎯 📊 💼 🎪
- AI Chat: 💬 🤖 💭 🗨️
- Automation: ⚙️ 🔧 ⚡ 🔄
- Operations: 📋 📁 📊 🗂️

### 3. Process Steps

Update in the `.process-timeline`:

```html
<div class="process-step">
    <div class="step-number">
        <span>01</span>  <!-- Step number -->
    </div>
    <div class="step-content">
        <h3 class="step-title">Step Title</h3>
        <p class="step-description">Description...</p>
        <div class="step-features">
            <span class="step-tag">Tag 1</span>
            <span class="step-tag">Tag 2</span>
        </div>
    </div>
</div>
```

### 4. Statistics

In the hero stats section:

```html
<div class="stat-card">
    <div class="stat-number counter" data-target="100">0</div>
    <div class="stat-label">% Custom Built</div>
</div>
```

The `data-target` attribute sets the final number. The counter will animate from 0 to this number.

---

## 🔗 Calendly Integration

### Update Your Calendly Link

Find all instances in `index.html`:

```javascript
onclick="Calendly.initPopupWidget({url: 'https://calendly.com/main-arioun/30min'});return false;"
```

Replace with your actual Calendly link:

```javascript
onclick="Calendly.initPopupWidget({url: 'https://calendly.com/aurion-ai/strategy-call'});return false;"
```

### Customize Calendly Settings

You can add additional parameters:

```javascript
onclick="Calendly.initPopupWidget({
    url: 'https://calendly.com/aurion-ai/strategy-call',
    prefill: {
        name: '',
        email: '',
        customAnswers: {}
    },
    utm: {
        utmSource: 'website',
        utmMedium: 'cta_button',
        utmCampaign: 'homepage'
    }
});return false;"
```

### Alternative: Inline Calendly

Replace button with embedded calendar:

```html
<div class="calendly-inline-widget" 
     data-url="https://calendly.com/main-arioun/30min" 
     style="min-width:320px;height:630px;">
</div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>
```

---

## 📧 Contact Information

### Email Links

Find and replace in `index.html` and footer:

```html
<a href="mailto:main@aurion.com">main@aurion.com</a>
```

Change to your email:

```html
<a href="mailto:contact@yourcompany.com">contact@yourcompany.com</a>
```

### Phone Numbers

```html
<a href="tel:+1234567890">+1 (234) 567-890</a>
```

Change to your number:

```html
<a href="tel:+15555551234">+1 (555) 555-1234</a>
```

---

## 🎭 Typography

### Change Fonts

In `index.html` `<head>`, update the Google Fonts link:

```html
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Replace with your chosen fonts from [Google Fonts](https://fonts.google.com).

Then update in `css/style.css`:

```css
:root {
    --font-heading: 'Your-Heading-Font', sans-serif;
    --font-body: 'Your-Body-Font', sans-serif;
    --font-mono: 'JetBrains Mono', monospace;
}
```

**Font Pairing Suggestions:**

1. **Modern Tech:**
   - Heading: Space Grotesk
   - Body: Inter

2. **Professional:**
   - Heading: Poppins
   - Body: Open Sans

3. **Futuristic:**
   - Heading: Orbitron (current)
   - Body: Rajdhani

4. **Clean Minimal:**
   - Heading: Montserrat
   - Body: Lato

---

## 🖼️ Adding Images

### Logo

Replace the SVG logo in the nav:

```html
<a href="#home" class="logo">
    <img src="assets/logo.png" alt="Aurion AI" class="logo-icon">
    <span class="logo-text">AURION<span class="logo-accent">.ai</span></span>
</a>
```

### Background Images

Add a hero background image:

```css
.hero {
    background-image: url('../assets/hero-bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(10, 10, 10, 0.7); /* Dark overlay */
}
```

### Service Icons

Replace emoji icons with image icons:

```html
<div class="service-icon">
    <img src="assets/icons/automation.svg" alt="Automation">
</div>
```

---

## 🎬 Animations

### Disable Animations

To disable all animations (for accessibility or preference):

```css
/* Add to css/style.css */
*, *::before, *::after {
    animation: none !important;
    transition: none !important;
}
```

### Adjust Animation Speed

```css
:root {
    --transition-fast: 0.1s ease;   /* Faster */
    --transition-normal: 0.2s ease; /* Faster normal */
    --transition-slow: 0.3s ease;   /* Faster slow */
}
```

### Add Custom Animations

```css
/* Define animation */
@keyframes myCustomAnimation {
    0% { transform: scale(1); }
    50% { transform: scale(1.1); }
    100% { transform: scale(1); }
}

/* Apply to element */
.my-element:hover {
    animation: myCustomAnimation 0.5s ease;
}
```

---

## 📱 Responsive Breakpoints

Modify breakpoints in `css/style.css`:

```css
/* Default breakpoint */
@media (max-width: 768px) {
    /* Mobile styles */
}

/* Add custom breakpoints */
@media (max-width: 1200px) {
    /* Laptop styles */
}

@media (max-width: 480px) {
    /* Small mobile styles */
}
```

---

## 🔘 Buttons

### Button Variants

Create new button styles:

```css
.btn-outline {
    background: transparent;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
}

.btn-ghost {
    background: transparent;
    border: none;
    color: var(--color-text-secondary);
}

.btn-rounded {
    border-radius: 50px;
}
```

Use in HTML:

```html
<a href="#" class="btn btn-outline">Outline Button</a>
<a href="#" class="btn btn-ghost">Ghost Button</a>
<a href="#" class="btn btn-primary btn-rounded">Rounded</a>
```

---

## 🎯 Call-to-Action Customization

### Change CTA Text

Primary CTA (hero):
```html
<a href="#" class="btn btn-primary btn-glow">
    <span>Book Strategy Call</span>
</a>
```

Change to:
```html
<a href="#" class="btn btn-primary btn-glow">
    <span>Get Started Now</span>
</a>
```

### Add Multiple CTAs

```html
<div class="cta-buttons">
    <a href="#" class="btn btn-primary">Primary Action</a>
    <a href="#" class="btn btn-secondary">Secondary Action</a>
    <a href="#" class="btn btn-outline">Tertiary Action</a>
</div>
```

---

## 🧩 Adding New Sections

Template for new section:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <div class="section-header" data-aos="fade-up">
            <span class="section-tag">
                <span class="tag-line"></span>
                SECTION TAG
            </span>
            <h2 class="section-title">
                Section <span class="gradient-text">Title</span>
            </h2>
            <p class="section-subtitle">
                Section subtitle or description
            </p>
        </div>

        <div class="section-content">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

Add corresponding styles:

```css
.new-section {
    background: var(--color-bg-secondary);
    padding: var(--spacing-xl) 0;
}
```

---

## 🌐 Social Media Links

Update in footer:

```html
<div class="social-links">
    <a href="https://linkedin.com/company/yourcompany" aria-label="LinkedIn">
        <!-- LinkedIn SVG -->
    </a>
    <a href="https://twitter.com/yourcompany" aria-label="Twitter">
        <!-- Twitter SVG -->
    </a>
    <a href="https://facebook.com/yourcompany" aria-label="Facebook">
        <!-- Facebook SVG -->
    </a>
</div>
```

---

## 🔍 SEO Meta Tags

Update in `<head>`:

```html
<meta name="description" content="Your custom description (150-160 characters)">
<meta name="keywords" content="keyword1, keyword2, keyword3">

<!-- Open Graph (Facebook, LinkedIn) -->
<meta property="og:title" content="Aurion AI - Your Custom Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Your Title">
<meta name="twitter:description" content="Your description">
<meta name="twitter:image" content="https://yoursite.com/twitter-image.jpg">
```

---

## 💡 Tips

1. **Test Changes Locally**: Always preview changes in browser before deploying
2. **Use Browser DevTools**: Inspect and modify CSS in real-time
3. **Keep Backups**: Save original files before major changes
4. **Mobile First**: Test every change on mobile devices
5. **Performance**: Optimize images before adding them
6. **Consistency**: Maintain consistent spacing, colors, and typography

---

## 🆘 Need Help?

- Email: hello@aurion.ai
- Check README.md for setup issues
- Check DEPLOYMENT.md for deployment help

---

**Happy Customizing! 🎨**
