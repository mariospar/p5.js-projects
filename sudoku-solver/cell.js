class Cell {
	constructor(x, y, index, val, color) {
		this.x = x;
		this.y = y;
		this.index = index;
		this.val = val;
		this.color = color;
	}

	show() {
		noFill();
		stroke(255);
		strokeWeight(1.2);
		rect(this.x, this.y, 50, 50);
		fill(...this.color);
		textSize(32);
		stroke(...this.color);
		if (isNaN(this.val) || this.val === "0") {
			text("", this.x + 17, this.y - 13 + 50);
		} else {
			text(this.val, this.x + 17, this.y - 13 + 50);
		}
	}
}
