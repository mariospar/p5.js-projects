let img;

function preload() {
	img = loadImage("BEST_logomark.svg");
}

function setup() {
	createCanvas(400, 400);
	// image(img,0,0,350,350);
}

function draw() {
	noStroke();
	fill(28, 117, 188);
	circle(218, 188, 34);

	fill(255);
	fill(248, 179, 35);
	noStroke();
	beginShape();
	vertex(288, 217);
	bezierVertex(300, 200, 350, 90, 305, 0);
	bezierVertex(305, 70, 220, 115, 223, 110);
	vertex(223, 110);
	vertex(222, 141);
	vertex(260, 204);
	vertex(288, 217);
	endShape();

	fill(114, 191, 68);
	noStroke();
	beginShape();
	vertex(213, 113);
	bezierVertex(213, 113, 86, 112, 2, 208);
	bezierVertex(2, 208, 108, 180, 146, 220);
	vertex(175, 205);
	vertex(213, 145);
	vertex(213, 113);
	endShape();

	fill(28, 117, 188);
	noStroke();
	beginShape();
	vertex(154, 227);
	bezierVertex(154, 235, 230, 340, 352, 350);
	bezierVertex(352, 350, 260, 300, 284, 227);
	vertex(254, 213);
	vertex(180, 213);
	vertex(154, 227);
	endShape();

	// console.log(mouseX, mouseY)
}
