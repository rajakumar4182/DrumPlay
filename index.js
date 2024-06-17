// detecting button press

var numberOfDrum = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrum; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() { //here function is anynomous as no name of function given.

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });

}

//detecting keyboard press.

document.addEventListener("keydown", function(event) { // here keydown is the eventlistener in whcih any button we press it will listen
  // and only we select document to access all body wherever we press it will selected and
  // function called. and we pass parameter event which  trigger the keydown .and that event has property called key which tells us which keyboard
  // key was pressed ,and then we pass to paramter to the function makeSound.
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      console.log(buttonInnerHTML);

  }

}


function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  } , 100);

}
