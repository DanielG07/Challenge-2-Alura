const palabras = ["ONE", "KOTLIN", "ORACLE"];
const oracion = "La palabra es: ";

// Juego
var letrasOprimidas = [];
var palabra = "";
var palabraOcultar = [];
var vidas = 6;
var statusJuego = false;

var palabraAdivinar = document.querySelector("#palabra-adivinar");
var mensajeFinal = document.querySelector("#mensaje-final");
var historialLetras = document.querySelector("#letras");
let palabraNuevaInput = document.querySelector("#mensaje-entrada");
var botonIniciar = document.querySelector("#iniciar");
var botonAgregar = document.querySelector("#agregar-palabra");


botonIniciar.addEventListener("click", function() {
    statusJuego = true;
    palabra = palabraAleatoria(palabras);
    palabraOcultar = Array.from(palabra.replace(/[a-z A-Z]/g, "_"));

    palabraNuevaInput.readOnly = true;
    mensajeFinal.textContent = "";


    actualizarPalabra();
    limpiarPantalla();
});

botonAgregar.addEventListener("click", function() {
    let palabraNueva = palabraNuevaInput.value.toUpperCase().replace(/[^A-Z]/g, "");
    palabraNuevaInput.value = "";
    palabras.push(palabraNueva);

    alert("Palabra  " + palabraNueva + " agregada correctamente");
});

window.addEventListener("keypress", function(event) {
    

    if(statusJuego){
        if(letrasOprimidas.includes(event.key)){
            this.alert("Letra ya usada");
            return 
        }
        console.log(event.key)
        if(event.key.match(/[A-Z]/) && event.key != "Enter"){
            if(checarLetra(event.key)){
                if(palabra == palabraOcultar.join("")){
                    mensajeFinal.textContent = "Ganaste";
                    reiniciar();
                }

            }
            else{
                vidas--;
                dibujar(vidas);
                if(vidas == 0){
                    mensajeFinal.textContent = "Perdiste";
                    palabraOcultar = Array.from(palabra);
                    reiniciar();
                }
            }

            actualizarPalabra();
        }
        else{
            this.alert("Solo letras mayusculas")
        }
    }
    
}, false);

function dibujar(vidas){
    switch(vidas){
        case 0: piernaD(); break;
        case 1: piernaI(); break;
        case 2: brazoD(); break;
        case 3: brazoI(); break;
        case 4: torso(); break;
        case 5: cabeza(); break;
    }
}

function actualizarPalabra(){
    historialLetras.textContent = letrasOprimidas.join(" ")
    palabraAdivinar.textContent = oracion + palabraOcultar.join(" ");
}

function checarLetra(letra) {
    letrasOprimidas.push(letra);
    let idx = 0;
    if(palabra.match(letra)){
        idx = palabra.indexOf(letra);
        while (idx != -1) {
            palabraOcultar[idx] = letra 
            idx = palabra.indexOf(letra, idx + 1);
        }
        return true;
    }
    return false;
}

function reiniciar(){
    letrasOprimidas = [];
    palabra = "";
    vidas = 6;
    statusJuego = false;
    palabraNuevaInput.readOnly = false;

}

function palabraAleatoria(palabras) {
    let aleatorio = Math.round(Math.random() * (palabras.length - 1));
    return palabras[aleatorio];
}

