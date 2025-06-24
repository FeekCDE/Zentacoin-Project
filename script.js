document.addEventListener('DOMContentLoaded', function() {
// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navbarMenu = document.getElementById("navbarMenu");

menuToggle.addEventListener("click", function () {
  this.classList.toggle("active");
  navbarMenu.classList.toggle("active");
});

// Close menu when clicking on a link
const navLinks = document.querySelectorAll(".navbar-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navbarMenu.classList.remove("active");
  });
});

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.zen-feature-card').forEach((card) => {
    observer.observe(card);
  });

      // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-item, .phase, .widget-container');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.feature-item, .phase, .widget-container');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load
});

 // This is for the toggle between light and dark mode functionality

    document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  // Check for saved theme or use preferred color scheme
  const currentTheme = localStorage.getItem('theme') || 
                      (prefersDarkScheme.matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', currentTheme);
  
  // Set initial icon state
  if (currentTheme === 'light') {
    themeToggle.setAttribute('aria-label', 'Switch to dark mode');
  } else {
    themeToggle.setAttribute('aria-label', 'Switch to light mode');
  }
  
  // Toggle theme on button click
  themeToggle.addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    console.log("I am working")
    
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update ARIA label
    this.setAttribute('aria-label', 
      newTheme === 'light' ? 'Switch to dark mode' : 'Switch to light mode');
  });
});