function setup() {
  createCanvas(400, 400);
    background(255);
  fill(253,196,46)
  noStroke()
  
  //crear codigo de secuencia que se sigue en elcuadro
  for(var tri1=0; tri1<400; tri1=tri1+50){
    
    //se hacen las diagonales que empiezan y se basan en columna de la izquierda
    //triangulo tipo 2
    triangle (350+tri1,350-tri1,400+tri1,350-tri1,400+tri1,400-tri1)
    //triangulo tipo 1
    triangle (300+tri1,350-tri1,300+tri1,400-tri1,350+tri1,400-tri1)
    triangle (250+tri1,350-tri1,250+tri1,400-tri1,300+tri1,400-tri1)
    //triagulo tipo 2
    triangle (200+tri1,350-tri1,250+tri1,350-tri1,250+tri1,400-tri1)
    triangle (150+tri1,350-tri1,200+tri1,350-tri1,200+tri1,400-tri1)
    //triangulo tipo 1
    triangle (100+tri1,350-tri1,100+tri1,400-tri1,150+tri1,400-tri1)
    triangle (50+tri1,350-tri1,50+tri1,400-tri1,100+tri1,400-tri1)
    
    //se hacen las diagonales que empiezan y se basan en la fila de abajo
    //triangulo tipo 2
    triangle(tri1, 350-tri1,50+tri1,350-tri1,50+tri1,400-tri1)
    triangle(tri1, 300-tri1,50+tri1,300-tri1,50+tri1,350-tri1)
    //triangulo tipo 1
    triangle(tri1, 250-tri1,tri1,300-tri1,50+tri1,300-tri1)
    triangle(tri1, 200-tri1,tri1,250-tri1,50+tri1,250-tri1)
    //triangulo tipo 2
    triangle(tri1, 150-tri1,50+tri1,150-tri1,50+tri1,200-tri1)
    triangle(tri1, 100-tri1,50+tri1,100-tri1,50+tri1,150-tri1)
    //triangulo tipo 1
    triangle(tri1, 50-tri1,tri1,100-tri1,50+tri1,100-tri1)
    triangle(tri1, 0-tri1,tri1,50-tri1,50+tri1,50-tri1);
    
    }
}