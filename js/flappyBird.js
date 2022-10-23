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

//variables audios
var punto = new Audio()
punto.src = "audio/punto.mp3";

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
//control
function presionar() {
    Personaje.y -= 25

}
//bucle
setInterval(loop, 1000 / FPS)
function loop() {
    contexto.clearRect(0, 0, 300, 700);

    //fondo
    contexto.drawImage(background, 0, 0);

    //suelo
    contexto.drawImage(suelo, 0, contexto.canvas.height - suelo.height)


    //personaje
    contexto.drawImage(bird, Personaje.x, Personaje.y)

    //tuberias
    for (var i = 0; i < tuberias.length; i++) {
        var constante = tuberiaNorte.height + 80
        contexto.drawImage(tuberiaNorte, tuberias[i].x, tuberias[i].y)
        contexto.drawImage(tuberiaSur, tuberias[i].x, tuberias[i].y + constante)
        tuberias[i].x--
        if (tuberias[i].y + tuberiaNorte.height < 80) {
            tuberias[i].y = 0
        }
        if (tuberias[i].x == 95) {
            tuberias.push({
                x: contexto.canvas.width,
                y: Math.floor(Math.random() * tuberiaNorte.height) - tuberiaNorte.height
            })

        }
        //colisiones
        if (Personaje.x + bird.width >= tuberias[i].x &&
            Personaje.x <= tuberias[i].x + tuberiaNorte.width &&
            (Personaje.y <= tuberias[i].y + tuberiaNorte.height ||
                Personaje.y + bird.height >= tuberias[i].y + constante)
            || Personaje.y + bird.height >= contexto.canvas.height - suelo.height) {
            location.reload()
        }

        if (tuberias[i].x == Personaje.x) {
            score++
            punto.play()
        }



    }
    //condiciones
    Personaje.y += gravedad
    contexto.fillStyles = "rgba(0,0,0,1)"
    contexto.font = "25px arial"
    contexto.fillText("Score:" + score, 10, contexto.canvas.height - 40)
}
//eventos
window.addEventListener("keydown", presionar)