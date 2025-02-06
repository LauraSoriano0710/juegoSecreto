

function asignarTextoElemento(etiqueta, texto)
{
    let elemento = document.querySelector(etiqueta);
    elemento.innerHTML=texto;
    return;
}


function verificarIntento()
{
    //let numeroDeUsuario= document.querySelector("input");
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroDeUsuario === numeroSecreto);
    console.log("intentos: "+ intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto()
{
     let numeroGenerado = parseInt(Math.floor(Math.random()*numeroMaximo)+1);

     //si el tamaño de la lista es igual a el numero maximo de numeros generados 
     if(listaNumerosSorteados.length == numeroIntentos)
     {
        asignarTextoElemento('p', `Ya se sortearon todos los numeros posibles`);
     }
     else 
     {   
          //Si el numero generado esta en la lista
          console.log(listaNumerosSorteados);
          if( listaNumerosSorteados.includes(numeroGenerado))
          {
             return generarNumeroSecreto(); 
          }
          else
          {
             listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
          }
    }
}

function condicionesIniciales() 
{
    asignarTextoElemento('h1', "Juego del numero secreto!!!");
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    console.log("numeroSecreto: "+numeroSecreto+" "+typeof(numeroSecreto));
}


function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número secreto aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

let numeroMaximo= 10;
let numeroIntentos = parseInt(Math.floor(Math.random()*(numeroMaximo-1))+1);
let numeroSecreto =0;
let intentos= 1;
let listaNumerosSorteados=[];

condicionesIniciales();
