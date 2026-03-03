function showPage(pageId) {
  const sections = document.querySelectorAll('.section');

  sections.forEach(section => {
    section.classList.remove('active');
  });

  const target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}