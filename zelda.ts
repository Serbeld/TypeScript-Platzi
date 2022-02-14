let vp : HTMLCanvasElement = document.getElementById("zelda") as HTMLCanvasElement;

var papel = vp.getContext("2d");
vp.width  = window.innerWidth;
vp.height = window.innerHeight;

var fondo = {
    url: "",
    cargaOK: false,
    imagen: new Image()
}
var link_zelda = {
    url: "LinkFrente.png",
    cargaOK: false,
    imagen: new Image()
};

var cantidad = aleatorio(5, 15);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

link_zelda.imagen = new Image();
link_zelda.imagen.src = link_zelda.url;
link_zelda.imagen.addEventListener("load", cargar_link_zeldas);

function cargarFondo() {
    fondo.cargaOK = true;
    dibujar();
}
function cargar_link_zeldas() {
    link_zelda.cargaOK = true;
    dibujar();
}

function dibujar() {
    if (fondo.cargaOK && papel) {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if (link_zelda.cargaOK && papel) {
        // Cantidad de elementos random
        // console.log(cantidad);
        for (var v = 0; v < cantidad; v++) {
            var x = aleatorio(0, 10);
            var y = aleatorio(0, 10);
            x = x * 200;
            y = y * 100;
            papel.drawImage(link_zelda.imagen, x, y);
        }
    }
}
function aleatorio(min=0, maxi=10) {
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}