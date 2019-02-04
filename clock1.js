function setup() {
	var canHeight = 400;
	var canWidth = 400;
	createCanvas(canWidth, canHeight);
	angleMode(DEGREES);
}

function draw() {
  background(0);
	var canHeight = 400;
	var canWidth = 400;

	let hr = hour();
	let mn = minute();
	let sc = second();
	let ms = millis();
	
	strokeWeight(6);
	stroke(255,100,150);
	noFill();
	let endS = map (sc,0,60,0,360);
	arc(canHeight/2,canWidth/2,300,300,0,endS);
	
	strokeWeight(9);
	stroke(25,10,150);
	noFill();
	let endH = map (hr,0,60,0,360);
	arc(canHeight/2,canWidth/2,300,300,0,endH);

	strokeWeight(6);
	stroke(25,10,150);
	noFill();
	let endM = map (mn,0,60,0,360);
	arc(200,200,275,275,0,endM);
	
}