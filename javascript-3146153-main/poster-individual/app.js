const monedas = document.querySelectorAll('.coin');
const corazones = document.querySelectorAll('[class^="corazon-pequeño"]');

let monedasRecogidas = 0;

monedas.forEach(moneda => {
  moneda.addEventListener('click', () => {
    if (moneda.style.display !== 'none') {
      moneda.classList.add('rebote');

      setTimeout(() => {
        moneda.style.display = 'none';
        moneda.classList.remove('rebote');

        if (monedasRecogidas < corazones.length) {
          corazones[monedasRecogidas].style.opacity = 1;
          monedasRecogidas++;
        }
      }, 500);
    }
  });
});

const personaje = document.querySelector('.personaje');

personaje.addEventListener('click', () => {
  personaje.classList.toggle('grande');
});


const bloqueGrande = document.querySelector('.bloque-grande');

bloqueGrande.addEventListener('click', () => {
  bloqueGrande.classList.add('mover');

  
  setTimeout(() => {
    bloqueGrande.style.display = 'none';
  }, 800);
});

