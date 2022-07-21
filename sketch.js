var axiom = "A";
var sentence = axiom; // sentence is going to start with a axiom

var rule1 = {
  ifAisFound: "A",
  thenAApareceAsAB: "AB"
}

var rule2 = {
  ifBIsFound: "B",
  thenBApareceAsA: "A"
}

function generate() {
  var nextSentence = "";
  for(var i = 0; i < sentence.length; i++){
    var current = sentence.charAt(i);
    if (current == rule1.ifAisFound) {

      nextSentence += rule1.thenAApareceAsAB // if a in rule1 is found. substitute it with b from rule1
      } else if (current == rule2.ifBIsFound) {
      nextSentence += rule2.thenBApareceAsA; 
    } else {
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
