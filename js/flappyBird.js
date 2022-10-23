var contexto = document.getElementById("lienzo").getContext("2d")
contexto.canvas.width = 300
contexto.canvas.height = 530
//variables
var gravedad = 1
var FPS = 60
var Personaje = {
    x: 50,
    y: 150,
    w: 50,
    h: 50
}
var tuberias = new Array()
tuberias[0] = {
    x: contexto.canvas.width,
    y: 0
}

var score = 0

//variables imagenes
var bird = new Image()
bird.src = "img/bird.png";

var background = new Image()
background.src = "img/background.png";

var tuberiaNorte = new Image()
tuberiaNorte.src = "img/tuberiaNorte.png";

var tuberiaSur = new Image()
tuberiaSur.src = "img/tuberiaSur.png";

var suelo = new Image()
suelo.src = "img/suelo.png";
