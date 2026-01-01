/**
 * Hussain Lakhani Jewellers - Main JavaScript
 * A Legacy of Pure Gold Since 1965
 */

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initNavigation();
    initScrollAnimations();
    initReviewsCarousel();
    initMobileMenu();
    initSmoothScroll();
    initParallax();
});

/**
 * Navigation functionality
 */
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    // Scroll effect for navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    navMenu.querySelectorAll('.nav-link').forEach(function(link) {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navbar.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Scroll animations using Intersection Observer
 */
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Add fade-in class to elements and observe them
    const animatedElements = document.querySelectorAll(
        '.collection-card, .about-content, .contact-info, .review-card, .trust-item'
    );
    
    animatedElements.forEach(function(el) {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

/**
 * Reviews Carousel functionality
 */
function initReviewsCarousel() {
    const track = document.getElementById('reviews-track');
    const prevBtn = document.getElementById('review-prev');
    const nextBtn = document.getElementById('review-next');
    const dotsContainer = document.getElementById('reviews-dots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) {
        return;
    }
    
    const cards = track.querySelectorAll('.review-card');
    const totalCards = cards.length;
    let currentIndex = 0;
    let autoplayInterval;
    
    // Create dots
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement('button');
        dot.classList.add('review-dot');
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', function() {
            goToSlide(i);
        });
        dotsContainer.appendChild(dot);
    }
    
    const dots = dotsContainer.querySelectorAll('.review-dot');
    
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach(function(dot, index) {
            dot.classList.toggle('active', index === currentIndex);
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        if (currentIndex < 0) currentIndex = totalCards - 1;
        if (currentIndex >= totalCards) currentIndex = 0;
        updateCarousel();
        resetAutoplay();
    }
    
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }
    
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }
    
    function startAutoplay() {
        autoplayInterval = setInterval(nextSlide, 5000);
    }
    
    function resetAutoplay() {
        clearInterval(autoplayInterval);
        startAutoplay();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    track.addEventListener('touchstart', function(e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    
    track.addEventListener('touchend', function(e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });
    
    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;
        
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        }
    }
    
    // Pause autoplay on hover
    track.addEventListener('mouseenter', function() {
        clearInterval(autoplayInterval);
    });
    
    track.addEventListener('mouseleave', function() {
        startAutoplay();
    });
    
    // Start autoplay
    startAutoplay();
}

/**
 * Mobile menu functionality
 */
function initMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    if (!hamburger || !navMenu) {
        return;
    }
    
    // Toggle menu on hamburger click
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href === '#') return;
            
            e.preventDefault();
            
            const target = document.querySelector(href);
            
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Parallax effect for hero section
 */
function initParallax() {
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (!hero) return;
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        
        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${rate}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
        }
    }, { passive: true });
}

/**
 * Collection card hover effects
 */
document.querySelectorAll('.collection-card').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

/**
 * WhatsApp button click tracking (for analytics)
 */
document.querySelectorAll('.btn-whatsapp, .btn-whatsapp-large').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // You can add analytics tracking here
        console.log('WhatsApp button clicked');
    });
});

/**
 * Lazy loading for images (if needed)
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        lazyImages.forEach(function(img) {
            imageObserver.observe(img);
        });
    }
}

/**
 * Form validation (if contact forms are added)
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(function(input) {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

/**
 * Add loading animation to buttons
 */
document.querySelectorAll('.btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        // Add visual feedback
        this.style.transform = 'scale(0.98)';
        
        setTimeout(() => {
            this.style.transform = '';
        }, 150);
    });
});

/**
 * Counter animation for stats (if added later)
 */
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    updateCounter();
}

/**
 * Staggered animation for collection cards
 */
function initStaggeredAnimation() {
    const cards = document.querySelectorAll('.collection-card');
    
    cards.forEach(function(card, index) {
        card.style.animationDelay = `${index * 0.1}s`;
    });
}

// Initialize staggered animations
initStaggeredAnimation();

/**
 * Preload critical images
 */
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=1920&q=80'
    ];
    
    criticalImages.forEach(function(src) {
        const img = new Image();
        img.src = src;
    });
}

// Preload critical images
preloadImages();

/**
 * Console welcome message
 */
console.log(
    '%c Hussain Lakhani Jewellers ',
    'background: #0a0a0a; color: #c9a227; font-size: 20px; padding: 10px 20px; font-family: serif;'
);
console.log(
    '%c A Legacy of Pure Gold Since 1965 ',
    'background: #c9a227; color: #0a0a0a; font-size: 12px; padding: 5px 15px; font-family: sans-serif;'
);
