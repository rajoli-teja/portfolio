// Wait for page to load before running scripts
document.addEventListener('DOMContentLoaded', function() {
    // Get hamburger menu elements
    const hamburgerBtn = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.nav-menu');

    // Check if elements exist (some pages might not have them)
    if (hamburgerBtn && mobileMenu) {
        // Toggle mobile menu when hamburger is clicked
        hamburgerBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            hamburgerBtn.classList.toggle('active');
        });

        // Close menu when user clicks on any navigation link
        const navLinks = document.querySelectorAll('.nav-link');
        for (let i = 0; i < navLinks.length; i++) {
            navLinks[i].addEventListener('click', function() {
                mobileMenu.classList.remove('active');
                hamburgerBtn.classList.remove('active');
            });
        }
    }

    // Handle smooth scrolling for anchor links (if any exist on the page)
    const allNavLinks = document.querySelectorAll('.nav-link');
    allNavLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            const linkHref = link.getAttribute('href');

            // Check if it's an anchor link (starts with #)
            if (linkHref && linkHref.charAt(0) === '#') {
                event.preventDefault();
                const targetElement = document.querySelector(linkHref);
                if (targetElement) {
                    // Smooth scroll to the target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            // Let normal page links work as expected
        });
    });

    // Contact form submission handler
    const myContactForm = document.getElementById('contactForm');
    if (myContactForm) {
        myContactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get all the form values
            const formData = new FormData(this);
            const userName = formData.get('name');
            const userEmail = formData.get('email');
            const emailSubject = formData.get('subject');
            const userMessage = formData.get('message');

            // Basic form validation
            if (!userName || !userEmail || !emailSubject || !userMessage) {
                alert('Please fill in all fields');
                return false;
            }

            // Show loading state
            const submitButton = document.querySelector('.submit-btn');
            const buttonOriginalText = submitButton.innerHTML;

            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitButton.disabled = true;

            // Simulate sending (replace with actual form submission later)
            setTimeout(function() {
                alert('Thank you for your message! I\'ll get back to you soon.');
                myContactForm.reset();
                submitButton.innerHTML = buttonOriginalText;
                submitButton.disabled = false;
            }, 2000);
        });

        // Add focus effects to form inputs
        const formInputElements = document.querySelectorAll('.form-group input, .form-group textarea');

        for (let j = 0; j < formInputElements.length; j++) {
            const inputElement = formInputElements[j];

            inputElement.addEventListener('focus', function() {
                inputElement.parentElement.classList.add('focused');
            });

            inputElement.addEventListener('blur', function() {
                if (inputElement.value === '') {
                    inputElement.parentElement.classList.remove('focused');
                }
            });
        }
    }

    // Add hover effects to project cards if they exist
    const projectCardElements = document.querySelectorAll('.project-card');
    if (projectCardElements.length > 0) {
        for (let k = 0; k < projectCardElements.length; k++) {
            const card = projectCardElements[k];

            card.addEventListener('mouseenter', function() {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });

            card.addEventListener('mouseleave', function() {
                card.style.transform = 'translateY(0) scale(1)';
            });
        }
    }

    // Service cards hover effects
    const serviceCardElements = document.querySelectorAll('.service-card');
    if (serviceCardElements.length > 0) {
        for (let m = 0; m < serviceCardElements.length; m++) {
            const serviceCard = serviceCardElements[m];

            serviceCard.addEventListener('mouseenter', function() {
                serviceCard.style.transform = 'translateY(-10px) scale(1.02)';
            });

            serviceCard.addEventListener('mouseleave', function() {
                serviceCard.style.transform = 'translateY(0) scale(1)';
            });
        }
    }

    // Hide/show navbar on scroll
    let previousScrollPosition = 0;
    const navigationBar = document.querySelector('.navbar');

    if (navigationBar) {
        window.addEventListener('scroll', function() {
            const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;

            // Hide navbar when scrolling down, show when scrolling up
            if (currentScrollPosition > previousScrollPosition && currentScrollPosition > 100) {
                navigationBar.style.transform = 'translateY(-100%)';
            } else {
                navigationBar.style.transform = 'translateY(0)';
            }
            previousScrollPosition = currentScrollPosition;
        });
    }

    // Highlight current page in navigation
    const currentPageName = window.location.pathname.split('/').pop();
    const navigationLinks = document.querySelectorAll('.nav-link');

    for (let n = 0; n < navigationLinks.length; n++) {
        const link = navigationLinks[n];
        const linkTarget = link.getAttribute('href');

        // Check if this link matches the current page
        if (linkTarget === currentPageName ||
            (currentPageName === 'portfolio.html' && linkTarget === 'portfolio.html') ||
            (currentPageName === '' && linkTarget === 'portfolio.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    }
});

// Function to create smooth page transitions (not currently used but might be useful later)
function goToPageWithTransition(pageUrl) {
    document.body.style.opacity = '0';
    setTimeout(function() {
        window.location.href = pageUrl;
    }, 300);
}

// Make page fade in when it loads
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.transition = 'opacity 0.3s ease-in-out';
});
