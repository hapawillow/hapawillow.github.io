document.querySelectorAll('[data-carousel]').forEach((carousel) => {
  const track = carousel.querySelector('.notifier-slides');
  const slides = [...track.querySelectorAll('.notifier-slide')];
  const position = carousel.querySelector('.carousel-position');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let active = 0;

  function showSlide(index) {
    active = (index + slides.length) % slides.length;
    track.scrollTo({
      left: active * track.clientWidth,
      behavior: reducedMotion.matches ? 'instant' : 'smooth',
    });
  }

  carousel.querySelector('[data-carousel-prev]').addEventListener('click', () => showSlide(active - 1));
  carousel.querySelector('[data-carousel-next]').addEventListener('click', () => showSlide(active + 1));
  carousel.addEventListener('keydown', (event) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    showSlide(active + (event.key === 'ArrowRight' ? 1 : -1));
  });

  track.addEventListener('scroll', () => {
    const index = Math.round(track.scrollLeft / track.clientWidth);
    position.textContent = `${index + 1} / ${slides.length}`;
  }, { passive: true });
  track.addEventListener('scrollend', () => {
    active = Math.round(track.scrollLeft / track.clientWidth);
  });
  new ResizeObserver(() => {
    track.scrollTo({ left: active * track.clientWidth, behavior: 'instant' });
  }).observe(track);
});
