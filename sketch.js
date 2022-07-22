var axiom = "F";
var sentence = axiom; // sentence is going to start with a axiom
var len = 100;

var rules = []

// this is for you to learn how axiom works in a simple way
// rules[0] = {
//   a: "A",
//   b: "ABC"
// }

// rules[1] = {
//   a: "B",
//   b: "A"
// }

// this is a command for our turtle to draw on.
// F means forward, + means turn right, - means turn left, [ means save where you are, ] means save where you are ;

rules[0] = {
  a: "F",
  b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate() {
  var nextSentence = "";
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    var found = false;
    for(var j = 0; j < rules.length; j++){
      if ( current == rules[j].a){
          found = true;
          nextSentence += rules[j].b;
          break;
      }
    }
    if (!found){
      nextSentence += current; 
    }
  }
  sentence = nextSentence;
  createP(sentence);
  turtle();
}

function turtle() {
  background(51);
  translate(width/2, height);
  stroke(255);
  for (var i = 0; i < sentence.length; i++) {
    var current = sentence.charAt(i);

    if(current == 'F'){
      line(0,0,0,-len);
      translate(0, -len);
    } else if(current == '+'){
      rotate(PI/6);
    } else if(current == '-'){
      rotate(-PI/6);
    } else if(current == '['){
      push();
    } else if(current == ']'){
      pop();
    }
  }
}

function setup() {
  createCanvas(400,400)
  background(51);
  createP(axiom);
  turtle();
  var button = createButton("generate");
  button.mousePressed(generate)
}

function draw() {

}
