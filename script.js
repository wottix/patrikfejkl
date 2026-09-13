const heroMark = document.querySelector('.hero-mark');

if (heroMark) {
  heroMark.addEventListener('click', () => {
    document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' });
  });
  heroMark.setAttribute('role', 'button');
  heroMark.setAttribute('tabindex', '0');
}
