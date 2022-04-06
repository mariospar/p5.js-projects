const solver = new SudokuSolver();
let display = [];

const puzzles = [
	"-3-5--8-45-42---1---8--9---79-8-61-3-----54---5------78-----7-2---7-46--61-3--5--",
	"8----------36------7--9-2---5---7-------457-----1---3---1----68--85---1--9----4--",
	"1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--",
	"..17..5.9573.241.68..5.1..27..295.18..94..3.56528....7465.8..71...159..49.8..7.53",
	".47..1.9.9.67..83.38.9....1...1..6......3..24.....8....6...5...........9....7.14.",
	"010020300004003050060000007005800060000900001080012000300005010000700506002000000",
	"........9.79.64.2.3..89.76....24....2....3.46......9..........3..3985..48...2....",
];
let p = 0;

function setup() {
	createCanvas(450, 450);
	solveButton = createButton("Solve");
	solveButton.position(180, 475);
	solveButton.size(100);
	solveButton.mousePressed(solve);
	newPuzzleButton = createButton("New puzzle");
	newPuzzleButton.position(180, 500);
	newPuzzleButton.size(100);
	newPuzzleButton.mousePressed(nextPuzzle);
	getBoard(p);
}

function getBoard(num) {
	background(51);
	stroke(255);
	strokeWeight(4);
	line(0, 150, 450, 150);
	line(0, 300, 450, 300);
	line(150, 0, 150, 450);
	line(300, 0, 300, 450);
	let a = 0;
	let b = 0;
	const puz = puzzles[num].split("");
	for (let i = 0; i < 81; i++) {
		if (i % 9 === 0 && i !== 0) {
			b += 50;
			a = 0;
		}
		display[i] = new Cell(a, b, i, puz[i], [255]);
		a += 50;
	}
}

function draw() {
	for (let i = 0; i < 81; i++) {
		display[i].show();
	}
}

function solve() {
	const solution = solver.solve(puzzles[p]);
	sol = solution.split("");
	for (let i = 0; i < 81; i++) {
		if (display[i].val !== sol[i]) {
			display[i].color = [0, 255, 127];
		}
		display[i].val = sol[i];
	}
}

function nextPuzzle() {
	p += 1;
	p %= puzzles.length;
	clearBoard();
	getBoard(p);
}

function clearBoard() {
	display.forEach((cell) => {
		cell.val = "";
	});
}
