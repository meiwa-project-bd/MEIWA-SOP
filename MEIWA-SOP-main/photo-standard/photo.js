const dialog = document.getElementById('lightbox');
const dialogImg = dialog.querySelector('img');
const closeBtn = dialog.querySelector('.lightbox-close');

document.querySelectorAll('[data-full]').forEach(btn => {
  btn.addEventListener('click', () => {
    dialogImg.src = btn.dataset.full;
    dialog.showModal();
  });
});
closeBtn.addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape' && dialog.open) dialog.close(); });

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
