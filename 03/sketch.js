var posx = 0;
var posy = 0;

var nave = -20;
var navey = 0

var dir = 1;
var tam = 10;

var solx = 0;
var soly = 0;

var velx = 5;
var vely = 10;

var rayo = 0;
var rayox = 0;

var planex = 0
var planey = 0

function setup() {
  createCanvas(windowWidth, windowHeight);

  //frameRate(4);
}

function draw() {
  background(0, 13, 53);


  //crear movimiento hacia la esquina inferior izquierda del planeta azul
  fill(0, 255, 228);
  noStroke()
  ellipse((planex + 200) * width / 400, (-120 - planey) * height / 250, 100 * width / 400, 100 * height / 250)
  //poner menor velocidad (-) en el eje y para que este se mueva para abajo
  planex = planex + 0.6
  planey = planey - 1

  //sol movimiento
  fill(255, 212, 38);
  noStroke()
  ellipse(solx * width / 400, (200 - soly) * height / 250, 300 * width / 400, 300 * height / 250)
  //definir velocidad y dirección
  solx = solx + 0.5
  soly = soly - 0.4

  //rayo laser nave estatica
  stroke(246, 255, 110);
  line(166 * width / 400, (rayo + 118) * height / 250, 168 * width / 400, (rayo + 93) * height / 250);
  line(180 * width / 400, (rayo + 118) * height / 250, 182 * width / 400, (rayo + 93) * height / 250);

  //crear movimiento del laser solo sobre el eje y.
  rayo = rayo - 4
  //repetición del laser ?
  if (rayo < -100) {
    rayo = 70;
  }

  //nave estatica
  noStroke();
  fill(187);
  quad(162 * width / 400, 117 * height / 250, 169 * width / 400, 118 * height / 250, 169 * width / 400, 145 * height / 250, 150 * width / 400, 145 * height / 250);
  quad(177 * width / 400, 118 * height / 250, 184 * width / 400, 118 * height / 250, 193 * width / 400, 150 * height / 250, 177 * width / 400, 136 * height / 250);
  ellipse(170 * width / 400, 160 * height / 250, 50 * width / 400, 50 * height / 250);
  fill(255, 0, 0)
  ellipse(173 * width / 400, 140 * height / 250, 2 * width / 400, 2 * height / 250);
  ellipse(183 * width / 400, 148 * height / 250, 2 * width / 400, 2 * height / 250);
  ellipse(160 * width / 400, 147 * height / 250, 2 * width / 400, 2 * height / 250);

  //nave movimiento hacia arriba y a la izquierda.
  fill(172, 72, 72);
  noStroke();
  quad((249 + navey) * width / 400, (96 - nave) * height / 250, (300 + navey) * width / 400, (156 - nave) * height / 250, (279 + navey) * width / 400, (175 - nave) * height / 250, (249 + navey) * width / 400, (171 - nave) * height / 250);
  //velocidad y dirección de la nave:
  nave = nave + 0.4
  navey = navey - 0.3

  //explosión de nave
  if (frameCount >= 300) {
    fill(255)
    ellipse(167 * width / 400, 50 * height / 250, tam * width / 400, tam * height / 250);
    tam = tam + 5;
  }

  //fondo de estrellas: variación en lugar y tamaños
  fill(255)
  ellipse(posx * width / 400, posy * height / 250, 5);
  ellipse(posx + 200 * width / 400, (posy - 200) * height / 250, 3 * width / 400, 3 * height / 250);
  ellipse(posx + 100 * width / 400, (posy - 300) * height / 250, 3 * width / 400, 3 * height / 250);
  ellipse(posx + 10 * width / 400, (posy + 50) * height / 250, 5 * width / 400, 5 * height / 250);
  ellipse(posx + 10 * width / 400, (posy + 80) * height / 250, 7 * width / 400, 7 * height / 250);
  ellipse(posx - 50 * width / 400, (posy + 150) * height / 250, 7 * width / 400, 7 * height / 250);
  ellipse(posx + 250 * width / 400, (posy + 150) * height / 250, 3 * width / 400, 3 * height / 250);
  ellipse(posx + 300 * width / 400, (posy + 10) * height / 250, 5 * width / 400, 5 * height / 250);
  ellipse(posx + 130 * width / 400, (posy + 20) * height / 250, 3 * width / 400, 3 * height / 250);
  ellipse(posx + 10 * width / 400, (posy + 20) * height / 250, 2 * width / 400, 2 * height / 250);
  ellipse(posx + 30 * width / 400, (posy + 170) * height / 250, 2 * width / 400, 2 * height / 250);
  ellipse(posx + 200 * width / 400, (posy - 13) * height / 250, 3 * width / 400, 3 * height / 250);
  //velocidad y dirección de las estrellas:
  posx = posx + velx
  posy = posy + vely
  //para que vuelva a empezar:
  if (posx > 270) {
    posx = -200;
  }
  if (posy > 400) {
    posy = -300;
  }

  if (frameCount <= 410) {
    if (frameCount % 2 == 0) {
      //saveCanvas("MiFlipbook"+frameCount,'jpg');

    }
  }

}
