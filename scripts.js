function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-element');
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
      const positionFromTop = el.getBoundingClientRect().top;

      if (positionFromTop - windowHeight <= -100) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  window.addEventListener('load', revealOnScroll);