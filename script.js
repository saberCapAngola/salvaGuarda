/* =======================
   FADE DAS SEÇÕES
======================= */
const fadeSections = document.querySelectorAll('.fade-section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

fadeSections.forEach(section => observer.observe(section));

/* =======================
   GALERIA / ACERVO + LIGHTBOX
======================= */
document.querySelectorAll('.cardimage').forEach(img => {
  const wrapper = document.createElement('div');
  wrapper.className = 'acervo-item';
  wrapper.setAttribute('data-caption', img.alt || '');

  img.parentNode.insertBefore(wrapper, img);
  wrapper.appendChild(img);

  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';

    const image = document.createElement('img');
    image.src = img.src;
    image.className = 'lightbox-content';

    const caption = document.createElement('div');
    caption.className = 'lightbox-caption';
    caption.textContent = img.alt || '';

    lightbox.appendChild(image);
    lightbox.appendChild(caption);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => lightbox.remove());
  });
});
