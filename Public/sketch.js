var socket;

function setup() {
  createCanvas(640, 480);
  background(51);
   
   // start a socket connection to the server
  socket = io.connect('http://localhost:3000');

  // Make a named event call 'mouse' and write an
  // callback function
  socket.on('mouse', newDrawing);
}

function draw() {
	// nothing
}

function newDrawing(data) {
	fill(0,0,255);
	noStroke();
	ellipse(data.x, data.y, 36, 36);
}

function mouseDragged() {
	fill(255);
	noStroke();
 	ellipse(mouseX, mouseY, 36, 36);
 	sendmouse(mouseX, mouseY);
}

function sendmouse(xpos, ypos) {
	console.log("sendmouse: " + xpos + " " + ypos);
		var data = {
		x: xpos,
		y: ypos
	};
	socket.emit('mouse', data);
}
