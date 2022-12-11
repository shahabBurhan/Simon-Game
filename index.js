var selectedColorsRNG = [];
var inputArray = [];
start();

function start() {
  var randomNumber = RNG();
  var colors = ["green", "red", "yellow", "blue"];
  var randomChosenColor = colors[randomNumber];
  selectedColorsRNG.push(randomChosenColor);
  $("." + randomChosenColor).attr("id", "uniqueID");
  $("#uniqueID")
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);
  $("." + randomChosenColor).removeAttr("id");
}

function RNG() {
  var randomNumber = Math.floor(Math.random() * 4);
  return randomNumber;
}

$("button").click(function () {
  var newShit = this.className;
  $("." + newShit)
    .fadeOut(100)
    .fadeIn(100);
  inputArray.push(newShit);
  for (var i = 0; i <= selectedColorsRNG.length; i++) {
    if (inputArray[i].toString() == selectedColorsRNG[i].toString()) {
      switch (newShit) {
        case "blue":
          var audio1 = new Audio("sounds/blue.mp3");
          audio1.play();
          break;
        case "green":
          var audio2 = new Audio("sounds/green.mp3");
          audio2.play();
          break;
        case "red":
          var audio3 = new Audio("sounds/red.mp3");
          audio3.play();
          break;

        case "yellow":
          var audio4 = new Audio("sounds/yellow.mp3");
          audio4.play();
          break;
      }
      if (selectedColorsRNG.includes(inputArray[inputArray.length - 1])) {
        if (inputArray.toString() == selectedColorsRNG.toString()) {
          inputArray = [];
          $("h1").html("Keep it Up!");
          setTimeout(function () {
            start();
          }, 1000);
        }
      }
    } else {
      var lose = new Audio("sounds/wrong.mp3");
      lose.play();
      $("h1").html("Game Over, Press Space Key to Restart");
      $("body").addClass("fail");
      setTimeout(function () {
        $("body").removeClass("fail");
      }, 200);
      $(document).keypress(function (event) {
        var key = event.keyCode ? event.keyCode : event.which;
        if (key == 32) {
          window.location.reload(false);
        }
      });
    }
  }
});
