const hero = document.querySelector('.hero');
  const images = [
    'slike/2.jpg',
    'slike/3.jpg',
    'slike/4.jpg'
  ];
  let i = 0;
  setInterval(() => {
    i = (i + 1) % images.length;
    hero.style.backgroundImage = `url('${images[i]}')`;
  }, 5000);

  // Hamburger toggle
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('nav');
  hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
    hamburger.classList.toggle('toggle');
  });

  // Change header background on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if(window.scrollY > 50){
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });