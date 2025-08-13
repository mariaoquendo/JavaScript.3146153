
//1. captura de variables
const pantalla = document.querySelector("#cuadro-img")
const bnt1 = document.querySelector("#boton-1")
const bnt2 = document.querySelector("#boton-2")
const bnt3 = document.querySelector("#boton-3")

//2. funciones
function blancoynegro (){
  console.log("imagen modificada")
  pantalla.style. filter ="grayscale(100%"
/*   bnt1.style.background = "blueviolet"
  bnt1.style.color = "black"
  bnt1.style.heigth  = "200px"
  bnt1.style. borderRadius  = "50%" */
}

//3. eventos
bnt1.addEventListener("click", blancoynegro )


function desenfocar(){
  console.log("imagen modificada")
  pantalla.style.filter = "blur(5px)"
}
bnt2.addEventListener("click", desenfocar)

function zoom(){
  console.log("imagen modificada")
  pantalla.style.transform = "scale(1.5) rotate(45deg"
}
bnt3.addEventListener("click", zoom)



































