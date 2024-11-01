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
  navLinks.classList.toggle('nav-active');
});

// --------------- PARA IDIOMA

function switchLanguage() {
  const selectedLanguage = document.getElementById('language-toggle').value;
  const elements = document.querySelectorAll('[data-en]');

  elements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${selectedLanguage}`);
  });
}