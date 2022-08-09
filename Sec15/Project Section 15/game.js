var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

let started = false;
let level = 0;

$(document).keydown(() => {
  if (!started) {
    nextSequence();
    started = true;
    $("#level-title").text(`LEVEL ${level}`);
  }
});

function nextSequence() {
  // Reset userClickedPattern
  userClickedPattern = [];
  // Update level and title
  level++;
  $("#level-title").text(`LEVEL ${level}`);
  let randomNumber = Math.floor(Math.random() * 4);
  let randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
}
$(".btn").click(function () {
  var userChosenColour;
  userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.indexOf(userChosenColour, -1));
});

function checkAnswer(currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    $("#level-title").text(`Wrong answer! Score: ${level - 1}`);
    console.log("wrong");
  }
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $(`#${currentColour}`).addClass("pressed");
  setTimeout(() => {
    $(`#${currentColour}`).removeClass("pressed");
  }, 100);
}
