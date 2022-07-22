var axiom = "F";
var sentence = axiom; // sentence is going to start with a axiom

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
}

function setup() {
  noCanvas();
  createP(axiom);
  var button = createButton("generate");
  button.mousePressed(generate)
}

function draw() {

}
