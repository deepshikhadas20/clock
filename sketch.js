var hr, mn, sc ; 
var scAngle, mnAngle, hrAngle; 
function setup() {
  createCanvas(800,400);

}

function draw() {
  background(255,255,255);  

  translate(200,200);
  rotate(-90);
  
  hr = hour(); 
  mn = minute(); 
  sc = second();  
  
  angleMode(DEGREES);

  scAngle= map(sc,0,60,0,360); 
  mnAngle= map(mn,0,60,0,360); 
  hrAngle= map(hr%12,0,12,0,360);

  stroke(0,0,255);
  strokeWeight(5);
  fill(255);
  arc(0,0,250,250,0,hrAngle);


  stroke(0,255,0);
  strokeWeight(5); 
  fill(255);
  arc(0,0,220,220,0,mnAngle);

  
  push();
  rotate(scAngle);
  stroke(255,0,0); 
  strokeWeight(7); 
  line(0,0,100,0); 
  pop(); 

  drawSprites();
}