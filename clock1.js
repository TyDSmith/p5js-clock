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

	// fill(255);
	// noStroke();
	// textSize(20);
	// text(hr%12 + ':' + mn + ':' + sc, canHeight/2, canWidth/2);

	translate(200,200);
	rotate(-90);
	
	strokeWeight(8);
	stroke(255,25,88);
	noFill();
	let endS = map (sc,0,59,0,360);
	arc(0,0,250,250,0,endS);
	
	strokeWeight(8);
	stroke(0,193,255);
	let endM = map (mn,0,59,0,360);
	arc(0,0,270,270,0,endM);


	strokeWeight(8);
	stroke(204,191,20);
	let endH = map (hr % 12,0,12,0,360);
	arc(0,0,290,290,0,endH);

}