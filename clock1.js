function setup() {
  createCanvas(300, 300);
}

function draw() {
  background(0);

	let hr = hour();
	let min = minute();
	let sec = second();
	
	strokeWeight(8);
	stroke(255);
	noFill();
	ellipse(150,150,275,275);
	
	strokeWeight(6);
	stroke(255,100,150);
	// let end = map (mouseX,0,width,0,360);
	arc(150,150,275,275,0,360);
	
	
// 	fill(155);
// 	noStroke();
// 	text(hr + ':' + min + ':' + sec, 150,150);
	
}
