var posxbot1 = 20;
var posybot1 = 20;
var tambot1 = 20;

var posxbot2 = 50;
var posybot2 = 20;
var tambot2 = 20;

var posxbot3 = 80;
var posybot3 = 20;
var tambot3 = 20

var posxbot4 = 110;
var posybot4 = 20;
var tambot4 = 20;

var posxbot5 = 140;
var posybot5 = 20;
var tambot5 = 20;

var posxbot6 = 170;
var posybot6 = 20;
var tambot6 = 20;

var posxbot7 = 200;
var posybot7 = 20;
var tambot7 = 20;

var posxbot8 = 250;
var posybot8 = 20;
var tambot8 = 20;

var posxbot9 = 280;
var posybot9 = 20;
var tambot9 = 20;

var posxbot10 = 310;
var posybot10 = 20;
var tambot10 = 20;

var posxbot11 = 20;
var posybot11 = 360;
var tambot11 = 20;

var posxbot12 = 50;
var posybot12 = 360;
var tambot12 = 20;

var posxbot13 = 80;
var posybot13 = 360;
var tambot13 = 20;

var posxbot14 = 110;
var posybot14 = 360;
var tambot14 = 20;

var posxbot15 = 140;
var posybot15 = 360;
var tambot15 = 20;

var posxbot16 = 170;
var posybot16 = 360;
var tambot16 = 20;

var posxbot17 = 200;
var posybot17 = 360;
var tambot17 = 20;

var posxbot18 = 230;
var posybot18 = 360;
var tambot18 = 20;

var posxbot19 = 260;
var posybot19 = 360;
var tambot19 = 20;

var posxbot20 = 290;
var posybot20= 360;
var tambot20= 20;

var posxbotbor=370;
var posybotbor=200;
var tambotbor=20

var hersel = 0;
var colsel = 0;

function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  //grafica del botón
  //1
  fill(255);
  strokeWeight(1)
  ellipse(posxbot1 + 10, posybot1 + 10, tambot1, tambot1);
  //2
  fill(255);
  strokeWeight(1)
  rect(posxbot2, posybot2, tambot2, tambot2);
  line(60, 30, 40, 10);
  //bot3, hersel2
  fill(255);
  strokeWeight(1);
  rect(posxbot3, posybot3, tambot3, tambot3);
  line(posxbot3, posybot3, posxbot3 + 20, posybot3 + 20);
  //bot4, hersel3
  fill(255);
  strokeWeight(3)
  rect(posxbot4, posybot4, tambot4, tambot4);
  //bot5, hersel4
  fill(255);
  strokeWeight(1);
  ellipse(posxbot5 + 10, posybot5 + 10, tambot5, tambot5);
  ellipse(140, 16, 12, 12);
  ellipse(160, 16, 12, 12);
  //bot 6 hersel5
  fill(255);
  triangle(posxbot6 + 11, posybot6, posxbot6 + 20, posybot6 + 20, posxbot6 - 2, posybot6 + 20);
  //bot7 hersel6
  ellipse(posxbot7 + 10, posybot7 + 10, tambot7);
  ellipse(posxbot7 + 30, posybot7 + 8, tambot7);
  ellipse(posxbot7 + 10, posybot7 + 8, 5);
  ellipse(posxbot7 + 30, posybot7 + 6, 5);
  //bot8 hersel7
  fill(255);
  rect(posxbot8, posybot8, tambot8, tambot8);
  point(posxbot8 + 10, posybot8 + 10);
  //bot9 hersel8
  fill(255);
  rect(posxbot9, posybot9, tambot9, tambot9);
  line(280,40,300,20);
  //bot 10 hersel9
  fill(255);
  rect(posxbot10, posybot10, tambot10, tambot10);
  ellipse(posxbot10+10.5,posybot10+10.5,tambot10-1);
  //bot 11 colsel10
  fill(255);
  rect(posxbot11, posybot11, tambot11, tambot11);
  //bot 12 colsel1
  fill(102,200,176);
  rect(posxbot12, posybot12, tambot12, tambot12);
  //bot 13 colsel2
  fill(90,229,83);
  rect(posxbot13, posybot13, tambot13, tambot13);
  //bot 14 colsel3
  fill(219,221,38);
  rect(posxbot14, posybot14, tambot14, tambot14);
  //bot 15 colsel4
  fill(221,133,38);
  rect(posxbot15, posybot15, tambot15, tambot15);
  //bot 16 colsel5
  fill(221,38,38);
  rect(posxbot16, posybot16, tambot16, tambot16);
  //bot 17 colsel6
  fill(221,38,129);
  rect(posxbot17, posybot17, tambot17, tambot17);
  //bot 18 colsel7
  fill(202,38,221);
  rect(posxbot18, posybot18, tambot18, tambot18);
  //bot 19 colsel8
  fill(60,38,221);
  rect(posxbot19, posybot19, tambot19, tambot19);
  //bot 20 colsel9
  fill(0);
  rect(posxbot20, posybot20, tambot20, tambot20);
  
  //boton borrado 
  fill(225);
  rect(posxbotbor,posybotbor,tambotbor, tambotbor);
  




  if (mouseIsPressed) {
    
    if (colsel == 10) {
      background(225)
      }

    if (colsel == 0) {
      fill(255)
      stroke(255)
      }
    if (colsel == 1) {
      fill(102,200,176)
      stroke(255)
      }
    if (colsel == 2) {
      fill(90,229,83)
      stroke(90,229,83)
      }
    if (colsel == 3) {
      fill(219,221,38)
      stroke(90,229,83)
      }
    if (colsel == 4) {
      fill(221,133,38)
      stroke(0)
      }
     if (colsel == 5) {
      fill(221,38,38)
      stroke(22)
      }
    if (colsel == 6) {
      fill(221,38,129)
      stroke(221,38,129)
      }
    if (colsel == 7) {
      fill(202,38,221)
      stroke(221,38,129)
      }
    if (colsel == 8) {
      fill(60,38,221)
      stroke(255)
      }
    if (colsel == 9) {
      fill(0)
      stroke(255)
      }

      if (hersel == 0) {
        strokeWeight(1)
        ellipse(mouseX, mouseY, 20, 20);
      }
      if (hersel == 1) {
        strokeWeight(1)
        rect(mouseX, mouseY, 20, 20);
      }

      if (hersel == 1) {
        strokeWeight(1)
        line(mouseX + 10, mouseY + 10, mouseX - 10, mouseY - 10);
      }

      if (hersel == 2) {
        strokeWeight(1)
        line(mouseX + 20, mouseY + 200, mouseX, mouseY);
      }
      if (hersel == 3) {
        strokeWeight(3)
        quad(mouseX + 10, mouseY + 15, mouseX + 70, mouseY + 30, mouseX + 50, mouseY + 10, mouseX, mouseY);
      }
      if (hersel == 4) {
        strokeWeight(1)
        ellipse(mouseX + 11, mouseY + 30, 20);
        ellipse(mouseX, mouseY + 16, 12, 12);
        ellipse(mouseX + 20, mouseY + 15, 12, 12);

      }
      if (hersel == 5) {
        strokeWeight(1)
        triangle(mouseX, mouseY + 30, mouseX - 20, mouseY, mouseX + 20, mouseY);
        triangle(mouseX - 40, mouseY + 30, mouseX - 60, mouseY, mouseX - 20, mouseY);

        triangle(mouseX, mouseY + 30, mouseX - 40, mouseY + 30, mouseX - 20, mouseY + 60);
      }
      if (hersel == 6) {
        strokeWeight(1)
        ellipse(mouseX, mouseY, 20, 20);
        ellipse(mouseX + 20, mouseY + 3, 20, 20);
        ellipse(mouseX, mouseY, 5);
        ellipse(mouseX + 20, mouseY, 5);
      }
      if (hersel == 7) {
        point(mouseX, mouseY, 20, 20)
      }
      if (hersel == 8) {
        strokeWeight(1)
        line(width / 2, height / 2, mouseX, mouseY);
      }
      if (hersel == 9) {
        strokeWeight(1)
        ellipse(width / 2, height / 2, mouseX + 2, mouseY + 2);
      }
      //Definición de area de funcion del boton.

      if (mouseX > posxbot1 && mouseX < posxbot1 + tambot1 && mouseY > posybot1 && mouseY < posybot1 + tambot1) {
        hersel = 0;
      }

      if (mouseX > posxbot2 && mouseX < posxbot2 + tambot2 && mouseY > posybot2 && mouseY < posybot2 + tambot2) {
        hersel = 1;
      }
      if (mouseX > posxbot3 && mouseX < posxbot3 + tambot3 && mouseY > posybot3 && mouseY < posybot3 + tambot3) {
        hersel = 2;
      }
      if (mouseX > posxbot4 && mouseX < posxbot4 + tambot4 && mouseY > posybot4 && mouseY < posybot4 + tambot4) {
        hersel = 3;
      }
      if (mouseX > posxbot5 && mouseX < posxbot5 + tambot5 && mouseY > posybot5 && mouseY < posybot5 + tambot5) {
        hersel = 4;
      }

      if (mouseX > posxbot6 && mouseX < posxbot6 + tambot6 && mouseY > posybot6 && mouseY < posybot6 + tambot6) {
        hersel = 5;
      }
      if (mouseX > posxbot7 && mouseX < posxbot7 + tambot7 && mouseY > posybot7 && mouseY < posybot7 + tambot7) {
        hersel = 6;
      }
      if (mouseX > posxbot8 && mouseX < posxbot8 + tambot8 && mouseY > posybot8 && mouseY < posybot8 + tambot8) {
        hersel = 7;
      }
      if (mouseX > posxbot9 && mouseX < posxbot9 + tambot9 && mouseY > posybot9 && mouseY < posybot9 + tambot9) {
        hersel = 8;
      }
      if (mouseX > posxbot10 && mouseX < posxbot10 + tambot10 && mouseY > posybot10 && mouseY < posybot10 + tambot10) {
        hersel = 9;
      }
    if (mouseX > posxbot11 && mouseX < posxbot11 + tambot11 && mouseY > posybot11 && mouseY < posybot11 + tambot11) {
        colsel = 0;
      }
    if (mouseX > posxbot12 && mouseX < posxbot12 + tambot12 && mouseY > posybot12 && mouseY < posybot12 + tambot12) {
        colsel=1;
      }
    if (mouseX > posxbot13 && mouseX < posxbot13 + tambot13 && mouseY > posybot13 && mouseY < posybot13 + tambot13) {
        colsel=2;
      }
    if (mouseX > posxbot14 && mouseX < posxbot14 + tambot14 && mouseY > posybot14 && mouseY < posybot14 + tambot14) {
        colsel=3;
      }
    if (mouseX > posxbot15 && mouseX < posxbot15 + tambot15 && mouseY > posybot15 && mouseY < posybot15 + tambot15) {
        colsel=4;
      }
    if (mouseX > posxbot16 && mouseX < posxbot16 + tambot16 && mouseY > posybot16 && mouseY < posybot16 + tambot16) {
        colsel=5;
      }
    if (mouseX > posxbot17 && mouseX < posxbot17 + tambot17 && mouseY > posybot17 && mouseY < posybot17 + tambot17) {
        colsel=6;
      }
    if (mouseX > posxbot18 && mouseX < posxbot18 + tambot18 && mouseY > posybot18 && mouseY < posybot18 + tambot18) {
        colsel=7;
      }
    if (mouseX > posxbot19 && mouseX < posxbot19 + tambot19 && mouseY > posybot19 && mouseY < posybot19 + tambot19) {
        colsel=8;
      }
    if (mouseX > posxbot20 && mouseX < posxbot20 + tambot20 && mouseY > posybot20 && mouseY < posybot20 + tambot20) {
        colsel=9;
      
      }
    if (mouseX > posxbotbor && mouseX < posxbotbor + tambotbor && mouseY > posybotbor && mouseY < posybotbor + tambotbor) {
        colsel=10;
      }
    }
  }
