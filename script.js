function openModal() {
  const modal = document.querySelector('.modal');
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.querySelector('.modal');
  modal.classList.remove('active');
  document.body.style.overflow = '';
}


document.addEventListener('click', function(e) {
  const modal = document.querySelector('.modal');
  if (modal && e.target === modal) {
    closeModal();
  }
});

function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  const windowHeight = window.innerHeight;

  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    if (position < windowHeight - 100) {
      el.classList.add('show');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);


document.getElementById('callbackForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const formData = {
    name: document.getElementById('callbackName').value,
    phone: document.getElementById('callbackPhone').value,
    message: document.getElementById('callbackMessage').value
  };

  console.log('Форма отправлена:', formData);


  alert('Спасибо! Мы скоро с вами свяжемся.');
  this.reset();
});
