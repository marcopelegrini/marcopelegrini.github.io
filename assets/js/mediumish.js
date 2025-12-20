// Dark Mode Theme Toggle
(function() {
    // Get theme from localStorage or system preference
    const getPreferredTheme = () => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setTheme = (theme) => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        updateThemeIcon(theme);
    };

    const updateThemeIcon = (theme) => {
        const darkIcon = document.getElementById('dark-icon');
        const lightIcon = document.getElementById('light-icon');
        
        if (darkIcon && lightIcon) {
            if (theme === 'dark') {
                darkIcon.classList.remove('active');
                lightIcon.classList.add('active');
            } else {
                darkIcon.classList.add('active');
                lightIcon.classList.remove('active');
            }
        }
    };

    // Set theme on load
    const currentTheme = getPreferredTheme();
    setTheme(currentTheme);

    // Toggle theme on button click
    document.addEventListener('DOMContentLoaded', function() {
        const themeToggle = document.getElementById('theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', function() {
                const currentTheme = document.documentElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(newTheme);
            });
        }
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            setTheme(e.matches ? 'dark' : 'light');
        }
    });
})();

document.addEventListener('DOMContentLoaded', function() {

    // Fix for IE/Edge object cover (legacy browser support)
    if (document.documentMode || /Edge/.test(navigator.userAgent)) {
        document.querySelectorAll('.featured-box-img-cover').forEach(function(img) {
            const src = 'url(' + img.getAttribute('src') + ')';
            const parent = img.parentElement;
            const div = document.createElement('div');
            
            parent.appendChild(div);
            div.style.height = '290px';
            div.style.backgroundSize = 'cover';
            div.style.backgroundRepeat = 'no-repeat';
            div.style.backgroundPosition = '50% 20%';
            div.style.backgroundImage = src;
            img.style.display = 'none';
        });
    }

    // Alert bar show/hide on scroll
    const alertbar = document.querySelector('.alertbar');
    if (alertbar) {
        document.addEventListener('scroll', function() {
            const y = window.pageYOffset;
            if (y > 280) {
                alertbar.style.display = 'block';
            } else {
                alertbar.style.display = 'none';
            }
        });
    }

    // Smooth scrolling for anchor links
    function smoothScrollTo(target) {
        if (target) {
            window.scrollTo({
                top: target.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    // Smooth scroll on page load with hash
    setTimeout(function() {
        if (location.hash) {
            window.scrollTo(0, 0);
            const targetId = location.hash.substring(1);
            const target = document.getElementById(targetId);
            smoothScrollTo(target);
        }
    }, 1);

    // Smooth scroll for anchor link clicks
    document.querySelectorAll('a[href*="#"]:not([href="#"])').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && 
                location.hostname === this.hostname) {
                const targetId = this.hash.substring(1);
                const target = document.getElementById(targetId) || document.querySelector('[name="' + targetId + '"]');
                if (target) {
                    e.preventDefault();
                    smoothScrollTo(target);
                }
            }
        });
    });

    // Hide/Show Header on scroll
    let didScroll;
    let lastScrollTop = 0;
    const delta = 5;
    const nav = document.querySelector('nav');
    const navbarHeight = nav ? nav.offsetHeight : 0;

    if (nav) {
        window.addEventListener('scroll', function() {
            didScroll = true;
        });

        setInterval(function() {
            if (didScroll) {
                hasScrolled();
                didScroll = false;
            }
        }, 250);

        function hasScrolled() {
            const st = window.pageYOffset;
            
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) {
                return;
            }

            // If scrolled down and past navbar, hide it
            if (st > lastScrollTop && st > navbarHeight) {
                nav.classList.remove('nav-down');
                nav.classList.add('nav-up');
                nav.style.top = -nav.offsetHeight + 'px';
            } else {
                // Scroll Up
                if (st + window.innerHeight < document.documentElement.scrollHeight) {
                    nav.classList.remove('nav-up');
                    nav.classList.add('nav-down');
                    nav.style.top = '0px';
                }
            }

            lastScrollTop = st;
        }
    }

    // Adjust site content margin
    const siteContent = document.querySelector('.site-content');
    const header = document.querySelector('header');
    if (siteContent && header) {
        siteContent.style.marginTop = header.offsetHeight + 'px';
    }

    // Spoilers
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('spoiler')) {
            e.target.classList.remove('spoiler');
        }
    });

});
