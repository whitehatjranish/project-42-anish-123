var hr,mn,sc,hrAngle,mnAngle,scAngle;
 

function setup() {
  createCanvas(800,400);

  angleMode(DEGREES);
}

function draw() {
  background("black");

  text("The Clock Of Time",400,250);
  text("Time stops for no one",400,270);
  text("Time is very precious",400,290);
  text("Time should be used wisely",400,310);
  text("Time that is lost cannot come back",400,330);
  text("as time passes we make new friends,make new things,discover the world",400,150);
  text("as time continues we gain moments that make us happy ",370,170);
  text("so we should help time by utilising it for good and make it happy",390,190);
  text("------BY Anish",700,220)

  translate(200,200)
    rotate(-90)
 
  hr = hour();
  mn = minute();
  sc = second();


  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,60,0,360);
  hrAngle = map(hr%12,0,12,0,360);


 

  push();
  rotate(mnAngle);
  stroke(120,255,255);
  strokeWeight(7);
  line(0,0,70,0);
  pop();
  
  push();
  rotate(scAngle);
  stroke(255,248,42);
  strokeWeight(7);
  line(0,0,105,0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255,102,102);
  strokeWeight(7);
  line(0,0,55,0);
  pop();
 


  stroke(255,0,255);
  point(0,0)

  strokeWeight(10);
  noFill();
  
  stroke(255,248,42);
  arc(0,0,300,300,0,scAngle);

  stroke(120,255,255);
  arc(0,0,280,280,0,mnAngle);
  
  stroke(255,102,102);
  arc(0,0,260,260,0,hrAngle);

 

  drawSprites();
}