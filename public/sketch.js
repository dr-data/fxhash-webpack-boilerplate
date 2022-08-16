

const num = 10 + Math.floor(fxrand()*5);
const points = 400;
const period = Math.floor(fxrand()*10);

color1 = [255,0,0];
color2 = [0,255,255*fxrand()];


let amp = fxrand();
if (amp < 0.5) {
  amp = 10;
} else {
  amp = 50;
}

function setup() {
  createCanvas(800,800);
  color1 = color(color1);
  color2 = color(color2);
  //noLoop();
}

function draw() {
  background(color1);

 

  for (let j = 1 ; j <= num; j++) {
    let col = lerpColor(color1, color2, j/num);
    stroke(255);
    //noFill();
    fill(col);
    beginShape();
    vertex(0,height);
    for (let i = 0; i < points; i++) {
      let y = j*height / (num+1);
   // vertex(i*width/points, y+50*sin(i+frameCount/50));
    vertex(i*width/points, y+50*sin(i/period+frameCount*j/100, 3));

  }
  vertex(width,height);

  endShape();
}
}