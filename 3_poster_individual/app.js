const monedas = document.querySelectorAll('.coin');
const corazones = document.querySelectorAll('[class^="corazon-pequeño"]');
const botonAudio = document.querySelector('#boton-Audio');
const audioFondo = document.getElementById('audioFondo');
const sonidomonedas = document.querySelector('#audiomoneda');
const sonidopersonaje = document.querySelector('#sonidopersonaje');
let monedasRecogidas =  0;

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
          sonidomonedas.play();
        }
      }, 500);
    }
  });
});







const personaje = document.querySelector('.personaje');

personaje.addEventListener('click', () => {
  personaje.classList.toggle('grande');
  sonidopersonaje.play();
});


const bloqueGrande = document.querySelector('.bloque-grande');

bloqueGrande.addEventListener('click', () => {
  bloqueGrande.classList.add('mover');

  
  setTimeout(() => {
    bloqueGrande.style.display = 'none';
  }, 800);
});







botonAudio.addEventListener('click', () => {
  if (audioFondo.paused) {
    audioFondo.play();
    botonAudio.textContent = '🔊 Pausar música';
  } else {
    audioFondo.pause();
    botonAudio.textContent = '🔈 Reproducir música';
  }
});


const anterior = document.querySelector('.anterior');
const siguiente = document.querySelector('.siguiente');
const escena1 = document.querySelector('.escena-1');
const escena2 = document.querySelector('.escena-2');
const escena3 = document.querySelector('.escena-3');
let i = 1

siguiente.addEventListener('click', function () {
  if (i === 1){
    escena1.classList.add('d-none');
    escena2.classList.remove('d-none');

    i++
  }else if (i === 2){
    escena2.classList.add('d-none');
    escena3.classList.remove('d-none');

    i++
  }

})










