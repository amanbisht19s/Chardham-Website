// toggle button

function toggleMenu() {
    var nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }

// link

document.addEventListener("DOMContentLoaded", function() {
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-link');

  // Add click event listener to each navigation link
  navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Prevent default link behavior (page reload)
          
          // Get the target section ID from the href attribute
          const targetId = link.getAttribute('href').substring(1);
          
          // Scroll smoothly to the target section
          document.getElementById(targetId).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
});
