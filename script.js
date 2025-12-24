<script>
/* =======================
   FADE-IN DAS SEÇÕES
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
   LIGHTBOX
======================= */
const images = document.querySelectorAll('.cardimage');

images.forEach(img => {
  img.addEventListener('click', () => {
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');

    const content = document.createElement('img');
    content.src = img.src;
    content.classList.add('lightbox-content');

    const caption = document.createElement('div');
    caption.classList.add('lightbox-caption');
    caption.textContent = img.alt || '';

    lightbox.appendChild(content);
    lightbox.appendChild(caption);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
      lightbox.remove();
    });
  });
});
</script>
