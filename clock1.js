function setup() {
	var canHeight = 400;
	var canWidth = 400;
	createCanvas(canWidth, canHeight);
	angleMode(DEGREES);
}

function draw() {
	background(0);
	translate(200,200);
	rotate(-90);

	var canHeight = 400;
	var canWidth = 400;

	let hr = hour();
	let mn = minute();
	let sc = second();
	let ms = millis();
	
	strokeWeight(4);
	stroke(255,100,150);
	noFill();
	let endS = map (sc,0,59,0,360);
	arc(0,0,250,250,0,endS);
	
	strokeWeight(4);
	stroke(25,10,150);
	let endM = map (mn,0,59,0,360);
	arc(0,0,270,270,0,endM);


	strokeWeight(7);
	stroke(144,10,150);
	let endH = map (hr % 12,0,12,0,360);
	arc(0,0,290,290,0,endH);

}