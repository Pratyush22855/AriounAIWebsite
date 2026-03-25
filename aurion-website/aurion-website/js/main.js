/**
 * Aurion AI - Main JavaScript
 * Handles animations, interactions, and dynamic behavior
 */

// ==========================================================================
// Initialization
// ==========================================================================
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initAnimations();
    initCounters();
    initScrollEffects();
    initMobileMenu();
});

// ==========================================================================
// Navigation
// ==========================================================================
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    const navHeight = navbar.offsetHeight;
                    const targetPosition = targetElement.offsetTop - navHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    const navLinksContainer = document.getElementById('nav-links');
                    if (navLinksContainer.classList.contains('active')) {
                        navLinksContainer.classList.remove('active');
                        document.getElementById('mobile-toggle').classList.remove('active');
                    }
                }
            }
        });
    });
    
    // Active link highlighting
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - navbar.offsetHeight - 100)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// ==========================================================================
// Mobile Menu
// ==========================================================================
function initMobileMenu() {
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.getElementById('nav-links');
    
    if (mobileToggle) {
        mobileToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = this.querySelectorAll('span');
            if (this.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = '';
                spans[1].style.opacity = '';
                spans[2].style.transform = '';
            }
        });
    }
}

// ==========================================================================
// Scroll Animations (AOS Alternative)
// ==========================================================================
function initAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ==========================================================================
// Counter Animation
// ==========================================================================
function initCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;
        let hasAnimated = false;
        
        const observerOptions = {
            threshold: 0.5
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    hasAnimated = true;
                    animateCounter();
                }
            });
        }, observerOptions);
        
        observer.observe(counter);
        
        function animateCounter() {
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current);
                }
            }, 16);
        }
    });
}

// ==========================================================================
// Scroll Effects
// ==========================================================================
function initScrollEffects() {
    // Parallax effect for hero visual
    const heroVisual = document.querySelector('.hero-visual');
    
    if (heroVisual) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            heroVisual.style.transform = `translateY(${scrolled * 0.3}px)`;
        });
    }
    
    // Background grid animation based on scroll
    const bgGrid = document.querySelector('.background-grid');
    
    if (bgGrid) {
        window.addEventListener('scroll', function() {
            const scrolled = window.scrollY;
            const opacity = Math.max(0.03 - scrolled / 5000, 0);
            bgGrid.style.opacity = opacity;
        });
    }
}

// ==========================================================================
// Service Card Hover Effects
// ==========================================================================
document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = '';
    });
});

// ==========================================================================
// Form Handling (if you add contact form later)
// ==========================================================================
function handleFormSubmit(formId) {
    const form = document.getElementById(formId);
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Here you would typically send to a backend
            // For now, just show a success message
            showNotification('Thank you! We\'ll be in touch soon.', 'success');
            
            // Reset form
            form.reset();
        });
    }
}

// ==========================================================================
// Notification System
// ==========================================================================
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Style the notification
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        padding: 1rem 2rem;
        background: ${type === 'success' ? 'var(--color-primary)' : 'var(--color-accent)'};
        color: var(--color-bg-primary);
        border-radius: 8px;
        font-weight: 600;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==========================================================================
// Loading Animation
// ==========================================================================
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Add loaded class for animations
    setTimeout(() => {
        document.querySelectorAll('.hero-content > *').forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 100);
});

// ==========================================================================
// Utility Functions
// ==========================================================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================================================
// Performance Optimization
// ==========================================================================

// Optimize scroll listeners with throttle
window.addEventListener('scroll', throttle(function() {
    // Scroll-based animations here
}, 100));

// Lazy load images (if you add images later)
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading if images exist
if (document.querySelector('img[data-src]')) {
    lazyLoadImages();
}

// ==========================================================================
// Browser Detection & Polyfills
// ==========================================================================

// Check for IntersectionObserver support
if (!('IntersectionObserver' in window)) {
    console.warn('IntersectionObserver not supported. Animations may not work properly.');
    // You could load a polyfill here
}

// ==========================================================================
// Analytics & Tracking (placeholder)
// ==========================================================================
function trackEvent(category, action, label) {
    // Integrate with Google Analytics, Mixpanel, etc.
    console.log('Track Event:', category, action, label);
    
    // Example: gtag('event', action, { event_category: category, event_label: label });
}

// Track CTA clicks
document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function() {
        trackEvent('CTA', 'Click', this.textContent.trim());
    });
});

// ==========================================================================
// Accessibility Enhancements
// ==========================================================================

// Keyboard navigation for cards
document.querySelectorAll('.service-card, .principle-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    
    card.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            const link = this.querySelector('a');
            if (link) link.click();
        }
    });
});

// Skip to main content link (accessibility)
const skipLink = document.createElement('a');
skipLink.href = '#services';
skipLink.className = 'skip-to-content';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--color-primary);
    color: var(--color-bg-primary);
    padding: 8px;
    text-decoration: none;
    z-index: 100000;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ==========================================================================
// Console Easter Egg
// ==========================================================================
console.log('%cAurion AI', 'font-size: 40px; font-weight: bold; color: #00ff88;');
console.log('%cBuilt for ROI, not hype.', 'font-size: 16px; color: #999;');
console.log('%cInterested in joining our team? Email: careers@aurion.ai', 'font-size: 14px; color: #666;');

// ==========================================================================
// Export for use in other scripts
// ==========================================================================
window.AurionAI = {
    showNotification,
    trackEvent,
    debounce,
    throttle
};
