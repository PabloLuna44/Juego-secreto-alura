let number = 0;
let intentos = 0;
let listNumbers=[];
let numeroMaximo=10;

condicionesIniciales();


function verificarIntento() {
  let numUser = document.getElementById("valor").value;

  if (intentos < 3) {
    if (number === parseInt(numUser)) {
      asignarTextoElemento("p",`Acertaste el numero ${numUser} en  ${intentos}  ${intentos === 1 ? "intento" : "intentos" }`);
      let reiniciar=document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (number < parseInt(numUser)) {
        asignarTextoElemento("p", "El numero secreto es menor");
        clearInput("valor");
        intentos++;
      } else {
        asignarTextoElemento("p", "El numero secreto es mayor");
        clearInput("valor");
        intentos++;
      }
    }
  } else {
    asignarTextoElemento("p", "Haz exedido el numero de intentos");
    let reiniciar=document.getElementById('reiniciar').removeAttribute('disabled');
  }
  console.log(number);
console.log(listNumbers);

  return;
}

function reiniciarJuego(){
    //Limpiar el imput
    clearInput('valor');
   condicionesIniciales();
   //DEsabilidate el boton de reiniciar
   document.querySelector('#reiniciar').setAttribute('disabled','true');
   
}

function condicionesIniciales(){
     //Indicar mensaje de inicio
     mensajesIniciales();
 //Generar el numero aleatorio
 number=randomNumber();
 //Inicializar el numero de intento
 intentos=1;
 //DEsabilitar el boton nuevp juego
 
}

function clearInput(element) {
  
  document.querySelector(`#${element}`).value = "";
}

function asignarTextoElemento(elemento, texto) {
  let titulo = document.querySelector(elemento);
  titulo.innerHTML = texto;
}

function randomNumber() {
   
    
  let num= Math.floor(Math.random() * 10) + 1;

  if(listNumbers.length!=numeroMaximo){
  //Si el numero esta include en la lista
  if(listNumbers.includes(num) ){

   return randomNumber();
    
  }else{
    listNumbers.push(num);
    return num;
  }

}else{
    asignarTextoElemento("p", "todos los numero ya fueron sorteados");
    let reiniciar=document.getElementById('reiniciar').removeAttribute('disabled');
}
}

function mensajesIniciales(){
    asignarTextoElemento("h1", "Hora del desafio");
asignarTextoElemento("p", `Ingresa un numero del 1 al ${numeroMaximo}`);

}


