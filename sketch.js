function setup() {
  createCanvas(windowWidth, windowHeight);  
   // colore sfondo
  background(8, 12, 28);

  let numeroglifi = 25; // n pianeti generati
  let colonne = ceil(sqrt(numeroglifi));
  let righe = sqrt(numeroglifi);
  let discolonna = windowWidth / colonne;
  let disriga = windowHeight / righe;
  
  let xcorrente = 0;
  let ycorrente = 0;

  for (let g = 0; g < numeroglifi; g++) { //come sono distribuiti
    pianeta(xcorrente + discolonna / 2, ycorrente + disriga / 2, disriga * 0.8);
    xcorrente = xcorrente + discolonna;

    if (xcorrente >= windowWidth) {
      xcorrente = 0;
      ycorrente = ycorrente + disriga;
    }
  }
}

function draw() {
  // 
}

function pianeta(_x, _y, _size) {
  push();
  translate(_x, _y);
  angleMode(DEGREES);

  // tipi di pianeti (grandezza random e i tre colori)
  let tipoPianeta = random(0, 3);
  
  if (tipoPianeta < 1) {
    fill(30, 144, 255); 
  } else if (tipoPianeta < 2) {
    fill(135, 206, 235); 
  } else {
    fill(245, 222, 179); 
  }
  
  stroke(255, 80);
  strokeWeight(1);
  
  let diametroCorpo = _size * random(0.4, 0.85);
  circle(0, 0, diametroCorpo);

  // anelli dei pianeti
  noFill();
  let selectorAnelli = random(0, 3);
  
  if (selectorAnelli >= 1 && selectorAnelli < 2) {
    
    push();
    rotate(random(0, 360));
    stroke(200, 200, 200, 120);
    strokeWeight(1);
    ellipse(0, 0, diametroCorpo * 1.6, diametroCorpo * 0.9);
    pop();
  } else if (selectorAnelli >= 2) {

    push();
    rotate(random(0, 360));
    stroke(200, 200, 200, 120);
    strokeWeight(1);
    ellipse(0, 0, diametroCorpo * 1.6, diametroCorpo * 0.9);
    pop();
    
    push();
    rotate(random(0, 360));
    stroke(150, 150, 200, 80);
    ellipse(0, 0, diametroCorpo * 2.1, diametroCorpo * 1.2);
    pop();
  }

  // dettagli pianeti (i vari colori)
  noStroke();
  let numPallini = ceil(random(2, 7)); 
  
  for (let i = 0; i < numPallini; i++) {
    let angolo = random(0, 360);
    let distanza = random(0, diametroCorpo * 0.35);
    let dimPallino = random(2, diametroCorpo * 0.15);
    
    let colorePallino = random(0, 3);
    if (colorePallino < 1) {
      fill(128, 128, 128, 60); 
    } else if (colorePallino < 2) {
      fill(139, 69, 19, 60); 
    } else {
      fill(10, 25, 70, 60); 
    }
    
    push();
    rotate(angolo);
    translate(distanza, 0);
    circle(0, 0, dimPallino);
    pop();
  }

  pop();
}