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

//kalkulator
  const options = document.querySelectorAll('.option');
  options.forEach(opt => {
    opt.addEventListener('click', () => {
      opt.classList.toggle('selected');
    });
  });

  function calculate() {
  const area = parseFloat(document.getElementById('area').value);
  const selected = document.querySelectorAll('.option.selected');
  const resultDiv = document.getElementById('result');
  
  if (selected.length === 0 || isNaN(area)) {
    resultDiv.innerHTML = "<p style='color:red;'>Odaberite barem jednu uslugu i unesite kvadraturu.</p>";
    return;
  }

  let totalMin = 0;
  let totalMax = 0;

  selected.forEach(opt => {
    const min = parseFloat(opt.getAttribute('data-min'));
    const max = parseFloat(opt.getAttribute('data-max'));
    totalMin += min * area;
    totalMax += max * area;
  });

  const pdvRate = 0.2;
  const totalMinPDV = totalMin * (1 + pdvRate);
  const totalMaxPDV = totalMax * (1 + pdvRate);
  let textBezPDV, textSaPDV;

  if (Math.round(totalMin) === Math.round(totalMax)) {
    textBezPDV = `Cena bez PDV-a: ${totalMin.toFixed(2)} €`;
    textSaPDV = `Cena sa PDV-om (20%): ${totalMinPDV.toFixed(2)} €`;
  } else {
    textBezPDV = `Cena bez PDV-a: ${totalMin.toFixed(2)} € - ${totalMax.toFixed(2)} €`;
    textSaPDV = `Cena sa PDV-om (20%): ${totalMinPDV.toFixed(2)} € - ${totalMaxPDV.toFixed(2)} €`;
  }

  resultDiv.innerHTML = `
    <p>${textBezPDV}</p>
    <p>${textSaPDV}</p>
  `;
}
//Animirani naslov
const titleText = "PROWELDING DOO";
const subtitles = [
  "Mi smo građevinska firma koja se bavi izgradnjom kuća po sistemu „ključ u ruke“.",
  "Naša misija je da vam obezbedimo kvalitet i sigurnost u svakom projektu.",
  "Stručnost i profesionalnost u svakom projektu."
];

const titleEl = document.getElementById('title');
const subtitleEl = document.getElementById('subtitle');

let titleIndex = 0;
let charIndex = 0;
let subtitleIndex = 0;

// Funkcija za kucanje naslova (jednom)
function typeTitle() {
  if (charIndex < titleText.length) {
    titleEl.textContent += titleText.charAt(charIndex);
    charIndex++;
    setTimeout(typeTitle, 150);
  } else {
    // Kada se naslov otkuca, startuje kucanje podnaslova
    charIndex = 0;
    setTimeout(typeSubtitle, 500);
  }
}

// Funkcija za kucanje podnaslova
function typeSubtitle() {
  const currentSubtitle = subtitles[subtitleIndex];
  if (charIndex < currentSubtitle.length) {
    subtitleEl.textContent += currentSubtitle.charAt(charIndex);
    charIndex++;
    setTimeout(typeSubtitle, 100);
  } else {
    // Kada se podnaslov otkuca, čekaj 2s pa briši
    setTimeout(eraseSubtitle, 2000);
  }
}

// Funkcija za brisanje podnaslova
function eraseSubtitle() {
  if (charIndex > 0) {
    subtitleEl.textContent = subtitleEl.textContent.slice(0, -1);
    charIndex--;
    setTimeout(eraseSubtitle, 50);
  } else {
    // Prelazak na sledeći podnaslov
    subtitleIndex = (subtitleIndex + 1) % subtitles.length;
    setTimeout(typeSubtitle, 500);
  }
}

// Pokreće animaciju
typeTitle();

