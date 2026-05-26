document.addEventListener('DOMContentLoaded', () => {

  // ── Image Lightbox ──────────────────────────────
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  document.querySelectorAll('.gallery-grid img').forEach(img => {
    img.style.cursor = 'pointer';
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
      setTimeout(() => {
        lightbox.style.opacity = '1';
        lightboxImg.style.transform = 'scale(1)';
      }, 10);
    });
  });

  lightbox.addEventListener('click', () => {
    lightbox.style.opacity = '0';
    lightboxImg.style.transform = 'scale(0.95)';
    setTimeout(() => {
      lightbox.style.display = 'none';
    }, 300);
  });

});