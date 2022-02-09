function horca(x, y){
    // Triangulo grande
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(50, 350);
    pincel.lineTo(350, 350);
    pincel.lineTo(200, 300);
    pincel.fill();

    // Triangulo chico
    pincel.fillStyle = "lightgray";
    pincel.beginPath();
    pincel.moveTo(100, 340);
    pincel.lineTo(300, 340);
    pincel.lineTo(200, 310);
    pincel.fill();

    //Palo
    pincel.fillStyle = "black";
    pincel.fillRect(195, 305, 10, -220);
    pincel.fillRect(195, 75, 100, 10);
    pincel.fillRect(295, 75, 10, 50);
    
}

function cabeza(){
    // Cabeza
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(300, 125, 20, 0, 2*Math.PI);
    pincel.fill();

    pincel.fillStyle = "lightgray";
    pincel.beginPath();
    pincel.arc(300, 125, 15, 0, 2*Math.PI);
    pincel.fill();
}

function torso(){
    // Torso
    pincel.fillStyle = "black";
    pincel.fillRect(298, 145, 5, 60);
}

function brazoI(){
    // BrazoI
    pincel.beginPath();
    pincel.moveTo(298, 150);
    pincel.lineTo(298, 155);
    pincel.lineTo(290, 190);
    pincel.lineTo(285, 185);
    pincel.fill();
}

function brazoD(){
    // BrazoD
    pincel.beginPath();
    pincel.moveTo(303, 150);
    pincel.lineTo(303, 155);
    pincel.lineTo(311, 190);
    pincel.lineTo(316, 185);
    pincel.fill();
}

function piernaI(){
    // PiernaI
    pincel.beginPath();
    pincel.moveTo(298, 200);
    pincel.lineTo(298, 205);
    pincel.lineTo(290, 245);
    pincel.lineTo(285, 240);
    pincel.fill();
}

function piernaD(){
    // PiernaD
    pincel.beginPath();
    pincel.moveTo(303, 200);
    pincel.lineTo(303, 205);
    pincel.lineTo(311, 245);
    pincel.lineTo(316, 240);
    pincel.fill();
}

function limpiarPantalla(){
    pincel.clearRect(0,0,600,600);
    pincel.fillStyle = "lightgray";
    pincel.fillRect(0,0,600,600);
    horca(125, 50);
}

var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

limpiarPantalla();

