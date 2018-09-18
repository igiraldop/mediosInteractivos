function setup() {
  createCanvas(400, 400);
  background(249, 255, 138);
}

function draw() {



  hora = hour();
  //hora=15


  if (hora < 7 & hora >= 5) {
    //CARA CON SUEÑO
    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 20);
    ellipse(257, 177, 55, 20);

    fill(96, 54, 25);
    ellipse(147, 175, 19);
    ellipse(257, 176, 19);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    //line(109,165,120,176);
    line(118, 160 + 1, 125, 169);
    line(127, 156 + 1, 132, 166);
    line(138, 154 + 1, 141, 164 + 1);
    line(149, 154 + 1, 149, 163 + 1);
    line(160, 156 + 1, 157, 164 + 2);
    line(169, 161 + 1, 165, 166 + 1);

    //line(296,167,285,178);
    line(286, 162 + 1, 279, 170);
    line(277, 158 + 1, 272, 167 + 1);
    line(266, 156 + 1, 263, 165 + 2);
    line(255, 155 + 1, 255, 166 + 1);
    line(244, 158 + 1, 247, 165 + 2);
    line(234, 162 + 1, 239, 167 + 1);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);
    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 296, 194, 279, 197, 292);
    triangle(216, 279, 239, 296, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    //pelo
    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);


    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)

    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);
  } 
  else if (hora < 10 & hora >= 7) {
//CARA NORMAL
    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 25);
    ellipse(257, 177, 55, 25);

    fill(96, 54, 25);
    ellipse(147, 175, 22);
    ellipse(257, 176, 22);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    line(109, 165, 120, 176);
    line(118, 160, 125, 169);
    line(127, 156, 132, 166);
    line(138, 154, 141, 164);
    line(149, 154, 149, 163);
    line(160, 156, 157, 164);
    line(169, 161, 165, 166);

    line(296, 167, 285, 178);
    line(286, 162, 279, 170);
    line(277, 158, 272, 167);
    line(266, 156, 263, 165);
    line(255, 155, 255, 166);
    line(244, 158, 247, 165);
    line(234, 162, 239, 167);

    //nariz
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);
    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 292, 194, 279, 197, 292);
    triangle(216, 279, 239, 292, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293, 194, 306, 217, 306, 233, 293);
    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);

    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);

    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)
  } 
  else if (hora < 12 & hora >= 10) {
    //CARA CONFUNDIDA
    rect(85, 241, 247, 123);

    noStroke();

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 20);
    ellipse(257, 177, 55, 20);

    fill(96, 54, 25);
    ellipse(147, 175, 19);
    ellipse(257, 176, 19);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    //line(109,165,120,176);
    line(118, 160 + 1, 125, 169);
    line(127, 156 + 1, 132, 166);
    line(138, 154 + 1, 141, 164 + 1);
    line(149, 154 + 1, 149, 163 + 1);
    line(160, 156 + 1, 157, 164 + 2);
    line(169, 161 + 1, 165, 166 + 1);

    //line(296,167,285,178);
    line(286, 162 + 1, 279, 170);
    line(277, 158 + 1, 272, 167 + 1);
    line(266, 156 + 1, 263, 165 + 2);
    line(255, 155 + 1, 255, 166 + 1);
    line(244, 158 + 1, 247, 165 + 2);
    line(234, 162 + 1, 239, 167 + 1);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    line(204, 159, 204, 145);

    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);

    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 296, 194, 279, 197, 292);
    triangle(216, 279, 239, 296, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    //pelo
    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);


    noStroke();
    fill(35, 19, 11);
    quad(185, 143, 185, 155, 109, 145, 134, 139);
    quad(231 - 5, 135, 230 - 5, 147, 305 - 5, 143, 281 - 5, 135)



    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);
    
  } 
  else if (hora < 14 && hora >= 12) {
    //CARA CONTENTA

    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    strokeWeight(1);
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 25);
    ellipse(257, 177, 55, 25);

    fill(96, 54, 25);
    ellipse(147, 175, 22);
    ellipse(257, 176, 22);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    line(109, 165, 120, 176);
    line(118, 160, 125, 169);
    line(127, 156, 132, 166);
    line(138, 154, 141, 164);
    line(149, 154, 149, 163);
    line(160, 156, 157, 164);
    line(169, 161, 165, 166);

    line(296, 167, 285, 178);
    line(286, 162, 279, 170);
    line(277, 158, 272, 167);
    line(266, 156, 263, 165);
    line(255, 155, 255, 166);
    line(244, 158, 247, 165);
    line(234, 162, 239, 167);



    strokeWeight(0.5);
    fill(221, 153, 115);
    curve(57, 224, 114, 189, 178, 192, 230, 230);
    curve(57 + 115, 224, 114 + 115, 189, 178 + 115, 192, 230 + 115, 230);
    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);

    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);

    //boca
    noStroke();
    fill(255);
    ellipse(205, 293, 57, 15);

    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171 - 4, 292 - 3, 194, 279, 197, 292);
    triangle(216, 279, 239 + 4, 292 - 3, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);

    noFill();
    strokeWeight(0.5);
    stroke(204, 142, 110);
    curve(195, 186, 175, 253, 159, 278, 81, 336);
    curve(225, 206, 232, 252, 249, 278, 304, 312);

    //sombras
    noStroke();
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    beginShape();
    noStroke();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);



    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133);
    quad(231, 135, 230, 147, 305, 143, 281, 135);

  } 
  else if (hora < 17 && hora >= 14) {
    //CARA DURMIENDO
    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    strokeWeight(2)
    fill(193, 135, 112);
    stroke(0);
    curve(88, 150, 120, 177, 176, 177, 207, 150);
    curve(211, 151, 229, 177, 284, 177, 305, 157);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 292, 194, 279, 197, 292);
    triangle(216, 279, 239, 292, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 5, 194, 306 + 5, 217, 306 + 5, 233, 293 + 5);

    fill(165, 211, 249);
    ellipse(239, 303, 6);
    triangle(237, 294, 236, 302, 241, 302);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);

    triangle(118, 45, 133, 21, 124, 40);
    triangle(113, 47, 97, 49, 110, 49);
    triangle(44, 183, 33, 210, 45, 190);
    triangle(355, 169, 362, 214, 355, 185);

    //cejas
    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)

    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);

  } 
  else if (hora < 19 && hora >= 17) {
    //CARA BRAVA
    rect(85, 241, 247, 123);
    noStroke();
    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 20);
    ellipse(257, 177, 55, 20);

    fill(96, 54, 25);
    ellipse(147, 175, 19);
    ellipse(257, 176, 19);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    //line(109,165,120,176);
    line(118, 160 + 1, 125, 169);
    line(127, 156 + 1, 132, 166);
    line(138, 154 + 1, 141, 164 + 1);
    line(149, 154 + 1, 149, 163 + 1);
    line(160, 156 + 1, 157, 164 + 2);
    line(169, 161 + 1, 165, 166 + 1);

    //line(296,167,285,178);
    line(286, 162 + 1, 279, 170);
    line(277, 158 + 1, 272, 167 + 1);
    line(266, 156 + 1, 263, 165 + 2);
    line(255, 155 + 1, 255, 166 + 1);
    line(244, 158 + 1, 247, 165 + 2);
    line(234, 162 + 1, 239, 167 + 1);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    line(204, 159, 204, 145);

    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);

    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 296, 194, 279, 197, 292);
    triangle(216, 279, 239, 296, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    //pelo
    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);


    noStroke();
    fill(35, 19, 11);
    quad(185, 143, 185, 155, 109, 145, 134, 139);
    quad(221, 143, 221, 156, 295, 145, 270, 140);



    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);

  } else if (hora < 20 && hora >= 19) {
    //CARA CANSADA
    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 20);
    ellipse(257, 177, 55, 20);

    fill(96, 54, 25);
    ellipse(147, 175, 19);
    ellipse(257, 176, 19);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    //line(109,165,120,176);
    line(118, 160 + 1, 125, 169);
    line(127, 156 + 1, 132, 166);
    line(138, 154 + 1, 141, 164 + 1);
    line(149, 154 + 1, 149, 163 + 1);
    line(160, 156 + 1, 157, 164 + 2);
    line(169, 161 + 1, 165, 166 + 1);

    //line(296,167,285,178);
    line(286, 162 + 1, 279, 170);
    line(277, 158 + 1, 272, 167 + 1);
    line(266, 156 + 1, 263, 165 + 2);
    line(255, 155 + 1, 255, 166 + 1);
    line(244, 158 + 1, 247, 165 + 2);
    line(234, 162 + 1, 239, 167 + 1);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);
    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 296, 194, 279, 197, 292);
    triangle(216, 279, 239, 296, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    //pelo
    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);


    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)

    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);

  } else if (hora < 22 && hora >= 20) {
    //CARA RELAJADA

    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);

    //ojos
    strokeWeight(1);
    stroke(0);
    fill(221, 153, 115);
    curve(57, 224, 114, 189, 178, 192, 230, 230);
    curve(57 + 115, 224 + 2, 114 + 115, 189 + 2, 178 + 115, 192 + 2, 230 + 115, 230 + 2);

    //nariz
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);
    //boca
    noStroke();
    fill(255);
    ellipse(205, 293, 57, 15);

    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171 - 4, 292 - 3, 194, 279, 197, 292);
    triangle(216, 279, 239 + 4, 292 - 3, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);

    noFill();
    strokeWeight(0.5);
    stroke(204, 142, 110);
    curve(195, 186, 175, 253, 159, 278, 81, 336);
    curve(225, 206, 232, 252, 249, 278, 304, 312);

    //sombras
    noStroke();
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    beginShape();
    noStroke();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);


    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)

  } else if (hora < 0 && hora >= 22) {
    //CARA CANSADA
    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    stroke(0);
    fill(255);
    ellipse(148, 176, 55, 20);
    ellipse(257, 177, 55, 20);

    fill(96, 54, 25);
    ellipse(147, 175, 19);
    ellipse(257, 176, 19);

    fill(0);
    ellipse(147, 175, 7);
    ellipse(257, 176, 7);

    //line(109,165,120,176);
    line(118, 160 + 1, 125, 169);
    line(127, 156 + 1, 132, 166);
    line(138, 154 + 1, 141, 164 + 1);
    line(149, 154 + 1, 149, 163 + 1);
    line(160, 156 + 1, 157, 164 + 2);
    line(169, 161 + 1, 165, 166 + 1);

    //line(296,167,285,178);
    line(286, 162 + 1, 279, 170);
    line(277, 158 + 1, 272, 167 + 1);
    line(266, 156 + 1, 263, 165 + 2);
    line(255, 155 + 1, 255, 166 + 1);
    line(244, 158 + 1, 247, 165 + 2);
    line(234, 162 + 1, 239, 167 + 1);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    noStroke();
    fill(255);
    ellipse(144, 179, 4);
    ellipse(254, 180, 4);
    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 296, 194, 279, 197, 292);
    triangle(216, 279, 239, 296, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 2, 194, 306 + 2, 217, 306 + 2, 233, 293 + 2);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    //pelo
    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);


    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)

    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);
  } else {
    //CARA DURMIENDO
    rect(85, 241, 247, 123);

    fill(204, 142, 110);
    rect(153, 315, 107, 93);

    fill(221, 153, 115);
    ellipse(205, 186, 258, 330);

    fill(81, 69, 64);
    quad(108, 50, 129, 72, 146, 59, 123, 41);
    //ojos
    strokeWeight(2)
    fill(193, 135, 112);
    stroke(0);
    curve(88, 150, 120, 177, 176, 177, 207, 150);
    curve(211, 151, 229, 177, 284, 177, 305, 157);
    strokeWeight(0.1)
    fill(193, 135, 112);
    curve(104, 177, 126, 198, 176, 180, 238, 103);
    curve(182, 110, 230, 181, 279, 198, 322, 189);

    //boca
    noStroke();
    fill(221, 114, 88);
    ellipse(198, 285, 15, 14);
    ellipse(211, 285, 15, 14);
    triangle(171, 292, 194, 279, 197, 292);
    triangle(216, 279, 239, 292, 212, 292);
    quad(197, 292, 204, 293, 212, 292, 205, 283);
    fill(216, 110, 89);
    quad(175, 293 + 5, 194, 306 + 5, 217, 306 + 5, 233, 293 + 5);

    fill(165, 211, 249);
    ellipse(239, 303, 6);
    triangle(237, 294, 236, 302, 241, 302);


    //sombras
    fill(204, 142, 110);
    triangle(211, 249, 224, 235, 210, 179);
    triangle(203, 263, 199, 276, 205, 279);
    triangle(131, 266, 65, 200, 68, 233);
    triangle(274, 268, 341, 201, 337, 234);
    fill(244, 229, 223);
    triangle(203, 192, 204, 244, 200, 228);

    beginShape();
    fill(40, 15, 3);
    vertex(118, 45);
    vertex(142, 64);
    vertex(196, 87);
    vertex(268, 123);
    vertex(305, 143);
    vertex(317, 192);
    vertex(317, 255);
    vertex(312, 361);
    vertex(345, 389);
    vertex(355, 343);
    vertex(355, 169);
    vertex(348, 122);
    vertex(337, 91);
    vertex(319, 64);
    vertex(289, 45);
    vertex(269, 29);
    vertex(236, 18);
    vertex(151, 15);
    endShape(CLOSE);

    beginShape();
    vertex(115, 46);
    vertex(136, 64);
    vertex(109, 108);
    vertex(92, 191);
    vertex(103, 355);
    vertex(87, 389);
    vertex(66, 369);
    vertex(44, 183);
    vertex(72, 74);
    endShape(CLOSE);

    triangle(118, 45, 133, 21, 124, 40);
    triangle(113, 47, 97, 49, 110, 49);
    triangle(44, 183, 33, 210, 45, 190);
    triangle(355, 169, 362, 214, 355, 185);

    //cejas
    noStroke();
    fill(35, 19, 11);
    quad(179, 134, 180, 146, 102, 140, 128, 133)
    quad(231, 135, 230, 147, 305, 143, 281, 135)

    //nariz
    stroke(0);
    strokeWeight(1);
    line(191, 250, 200, 257);
    line(200, 257, 209, 257);
    line(209, 257, 216, 250);
    line(186, 241, 181, 253);
    line(181, 253, 191, 257);
    line(223, 241, 228, 253);
    line(228, 253, 218, 257);
  }
}
