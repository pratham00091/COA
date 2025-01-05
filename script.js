// JavaScript to trigger the transition when the section is in view
window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.about-section');
    const abText = document.querySelector('.about-section .abtext');
    
    // Get the section's position relative to the viewport
    const sectionTop = aboutSection.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight) {
        // Add the 'visible' class when the section comes into view
        aboutSection.classList.add('visible');
        abText.classList.add('visible');
    }
});

// JavaScript to trigger the transition when the section is in view
window.addEventListener('scroll', function () {
    const skillsSection = document.querySelector('.skills');
    
    // Get the section's position relative to the viewport
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    
    // Check if the section is in the viewport (sectionTop < windowHeight)
    if (sectionTop < windowHeight) {
        skillsSection.classList.add('visible'); // Add the visible class
    }
});

window.addEventListener('scroll', function () {
    const courseIntro = document.querySelector('.course-int');
    const courseIntroPosition = courseIntro.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2; // Trigger earlier (when 1/1.2 of the section is visible)
  
    if (courseIntroPosition < screenPosition) {
      courseIntro.classList.add('visible');
    }
  });

  
  // Function to check if the section is in the viewport
function checkVisibility() {
    const bookSection = document.querySelector('.book');
    const rect = bookSection.getBoundingClientRect();
    
    // If the section is in the viewport, add the 'active' class
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      bookSection.classList.add('active');
    }
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', checkVisibility);
  
  // Run the checkVisibility function on page load as well
  document.addEventListener('DOMContentLoaded', checkVisibility);
  
  
  
  