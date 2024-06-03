// script.js

// Smooth scroll for Learn More button
document.querySelector('button[href="#features"]').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#features').scrollIntoView({ behavior: 'smooth' });
  });
  