// P_1_0_01.pde
// 
// Generative Gestaltung, ISBN: 978-3-87439-759-9
// First Edition, Hermann Schmidt, Mainz, 2009
// Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
// Copyright 2009 Hartmut Bohnacker, Benedikt Gross, Julia Laub, Claudius Lazzeroni
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


/**
 * changing colors and size by moving the mouse
 *      
 * MOUSE
 * position x          : size
 * position y          : color
 * 
 * KEYS
 * s                   : save png
 */

var cnv;

function setup() {
  cnv = createCanvas(720, 720);
  cnv.position(windowWidth/2-width/2,windowHeight/2-height/2);
  noCursor();
}

function draw() {
  colorMode(HSB, 360, 100, 100);
  // rectMode(CENTER); 
  noStroke();
  background(mouseY/2, 100, 100);
  fill(360-mouseY/2, 100, 100);
  rect(10, 10, mouseX+1, mouseX+1);
   fill(250-mouseY/2, 150, 150);
  rect(50, 50, mouseX+2, mouseX+2);
   fill(300-mouseY/5, 160, 120);
  rect(100, 100, mouseX+1, mouseX+1);
  fill(30-mouseY/5, 180, 180);
  rect(170, 170, mouseX+1, mouseX+1);
    fill(350-mouseY/5, 180, 180);
  rect(190, 190, mouseX+1, mouseX+1);
    fill(250-mouseY/5, 140, 140);
  rect(150, 150, mouseX+1, mouseX+1);
    fill(150-mouseY/5, 160, 160);
  rect(130, 130, mouseX+1, mouseX+1);
    fill(30-mouseY/5, 180, 180);
  rect(110, 110, mouseX+1, mouseX+1);
    fill(350-mouseY/5, 180, 180);
  rect(170, 170, mouseX+1, mouseX+1);
    fill(300-mouseY/5, 110, 110);
  rect(260, 260, mouseX+1, mouseX+1);
    fill(320-mouseY/5, 180, 180);
  rect(270, 270, mouseX+1, mouseX+1);
}

function keyTyped() {
  if (key=='s' || key=='S') save("P_1_0_01.png");
}