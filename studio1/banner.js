// p5 file
// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
var angle = 0;
var elipW = 80; //ellipse width and height
var opac = 120; //opacity

function setup() {
    var myCanvas = createCanvas(800, 250);
    myCanvas.parent('mySketch');
    background(50);
    //set up the color palette
    noStroke();
    fill(149, 198, 226);
    ellipse(800, 40, elipW, elipW);
    fill(141, 129, 155);
    ellipse(800, 120, elipW, elipW);
    fill(247, 107, 107);
    ellipse(800, 200, elipW, elipW);
    fill(50, opac); //set initial fill color, opacity
}

function draw() {
    // statements here
    //calculate if the mouse is inside the palette cirlcles
    var blue = dist(mouseX, mouseY, 800, 40);
    var purple = dist(mouseX, mouseY, 800, 120);
    var red = dist(mouseX, mouseY, 800, 200);
    //if the mouse is on top of the circle, change the square color
    if (blue <= elipW / 2) {
        fill(149, 198, 226, opac);
    }
    if (purple <= elipW / 2) {
        fill(141, 129, 155, opac);
    }
    if (red <= elipW / 2) {
        fill(247, 107, 107, opac);
    }
    if (mouseIsPressed) {
        fill(50, 120);
    }
    //setting up the rotating square
    stroke(255, 180);
    translate(mouseX, mouseY);
    rotate(angle);
    rect(-30, -30, 60, 60);
    angle += .1;
}