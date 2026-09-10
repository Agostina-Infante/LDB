document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('is-active');
  });

  card.addEventListener('mouseleave', () => {
    card.classList.remove('is-active');
  });
});