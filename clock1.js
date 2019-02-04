function setup() {
	var canHeight = 300;
	var canWidth = 300;
  createCanvas(canWidth, canHeight);
}

function draw() {
  background(0);
	var canHeight = 300;
	var canWidth = 300;
	let hr = hour();
	let min = minute();
	let sec = second();
	
	strokeWeight(8);
	stroke(255);
	noFill();
	ellipse((canHeight/2),canWidth/2,275,275);
	
	strokeWeight(6);
	stroke(255,100,150);
	// let end = map (mouseX,0,width,0,360);
	arc(150,150,275,275,0,360);
	
	
// 	fill(155);
// 	noStroke();
// 	text(hr + ':' + min + ':' + sec, 150,150);
	
}
