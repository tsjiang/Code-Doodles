// Get canvas
var cvs = document.getElementById('demo');

// Get canvas context
var ctx = cvs.getContext('2d');

// Set font, size & number of columns
 var font = 'courier';
var fontSize = 8;
ctx.font = fontSize + 'px ' + font;
var cols = cvs.width / fontSize;

// Characters
var charSet;
charSet = 'Sallie Jiang 054208145 559384'; // Hex
charSet = charSet.split(''); // Convert string to array

// One drop per column, row set randomly
var drops = [];
for (var col = 0; col < cols; col++)
  drops[col] = Math.floor(Math.random() * cvs.height);


function matrix(letter) {
  
  if (letter >= charSet.length || letter == 0){
	
	if (Math.random() > .2)
		letter = 0; 
	else if (Math.random() > .5)
		letter = 13; 
	else 
		letter = 22;
  }
  
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, cvs.width, cvs.height);
  
  // For each column / drop
  for (var col = 0; col < drops.length; col++) {
   var char = charSet[letter];
		ctx.fillStyle = "lime";
    // Draw the char
    ctx.fillText(char, col * fontSize, drops[col] * fontSize);
    // Randomly reset drop back to top row
    if (Math.random() > .95)
      drops[col] = 0;

    drops[col]++; // Move drop down a row
  }
  
  setTimeout(function() {matrix(++letter)}, 50);
}

matrix(0); 