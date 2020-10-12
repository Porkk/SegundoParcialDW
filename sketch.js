let datos = [];
let auxdatos = [];

let y = 80;

let ancho_c = 1345;
let alto_c = 500;

function setup() {
    datos[0] = "";
    mostrarcan();
}

function draw(){
    grafico(datos);
    texto(datos);
}

function barra(x, largo){
    noStroke();
    fill(0);
    rect(x, y + 10, 45, largo);
}

function grafico(datos){
    separacion = 50;
    for(let i = 1; i < datos.length; i++){
        barra(separacion * i, (datos[i]) + (datos[i] * 2));
  }
}

function texto(datos){
    textSize(16);
    fill(0);
    for(let i = 1; i < datos.length; i++){
        text(datos[i], (i*50) + 12, y);
    }
}

function num_random(){
    for(let i = 1; i < 26; i++){
         datos[i] = int (random(1, 100));
    }
    for(let i = 0; i < datos.length; i++){
        auxdatos[i] = datos[i];
    }
    clear();
    mostrarcan();
}

function burbuja(){
    let i, j, aux;
    for(i = 1; i < datos.length; i++){
        for(j = 0; j < datos.length; j++){
            if(datos[j] > datos[j + 1]){
                aux = datos[j];
                datos[j] = datos[j + 1];
                datos[j + 1] = aux;
            }
        }
    }
    for(i = 0; i < datos.length; i++){
        auxdatos[i] = datos[i];
    }
    clear();
    mostrarcan();
}

function burbuja_inversa(){
    let i, j, aux;
    for(i = 1; i < datos.length; i++){
        for(j = 1; j < datos.length; j++){
            if(datos[j] < datos[j + 1]){
                aux = datos[j];
                datos[j] = datos[j + 1];
                datos[j + 1] = aux;
            }
        }
    }
    for(i = 0; i < datos.length; i++){
        auxdatos[i] = datos[i];
    }
    clear();
    mostrarcan();
}

function maximo(){
    let maximo = Math.max.apply(null, auxdatos);
    window.alert("El numero maximo es " + maximo);
}

function minimo(){
    let minimo = Math.min.apply(null, auxdatos);
    window.alert("El numero minimo es " + minimo);
}


function mostrarcan(){
    createCanvas(ancho_c, alto_c);
    background(0,220,80);
}