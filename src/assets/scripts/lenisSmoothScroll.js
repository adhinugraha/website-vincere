import '@styles/lenis.css';

import Lenis from 'lenis';

// Script to handle Lenis library settings for smooth scrolling
// https://github.com/darkroomengineering/lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Use event delegation to handle smooth scroll on anchor link clicks
document.addEventListener('click', (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute('href');
  if (targetId === '#') return;

  const targetElement = document.querySelector(targetId);
  if (targetElement) {
    e.preventDefault();
    lenis.scrollTo(targetElement);
    
    // Optional: Close mobile menu if Preline is used and it's open
    const navbar = document.querySelector('#navbar-collapse-with-animation');
    if (navbar && !navbar.classList.contains('hidden')) {
      // Preline's collapse logic might need a trigger or class toggle
      // but standard approach is to let Preline handle its own state
    }
  }
});
