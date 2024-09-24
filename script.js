document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert('¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.');
  });  

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active'); // Alterna la clase 'nav-active' para mostrar u ocultar el menú
});

