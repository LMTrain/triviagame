
var timerT = 0;
var i = 0;
var computerChoices = ["Who invented the telephone?(Bell)", "Which nail grows fastest? (Middle)", "What temperature does water boil at? (100C)", "Who discovered penicillin? (Fleming)", "What Spanish artist said he would eat his wife when she died? (Dali)", "Who wrote Julius Caesar, Macbeth and Hamlet? (Shakespeare)", "What did the crocodile swallow in Peter Pan? (Alarm clock)", "Which German city is famous for the perfume it produces? (Cologne)", "When did the First World War start? (1914)", "What did Joseph Priestley discover in 1774? (Oxygen)", "Where is the smallest bone in the body? (ear)", "Which is the only mammal that can’t jump? (Elephant)", "What color is a panda? (Black and White)", "Who cut Van Gogh’s ear? (He did)", "Who painted the Mona Lisa? (Da Vinci)", "How many dots are there on two dice? (42)", "What horoscope sign has a crab? (Cancer)", "When did the Second World War end? (1945)", "What’s the real name of Siddhartha Gautama? (Buddha)", "Where was Christopher Columbus born? (Genoa)", "When did the American Civil War end? (1865)", "Who said E=mc2? (Einstein)", "Which planet is nearest the sun? (Mercury)", "Where are the Dolomites? (Italy)", "What’s the capital of Kenya? (Nairobi?", "Which is the largest ocean? (Pacific)", "What’s the capital of Honduras? (Tegucigalpa)", "What’s the capital of Ethiopia? (Addis Ababa)", "How many squares are there on a chess board? (64)", "How many prongs are there on a fork? (4)", "Who starts first in chess? (White)", "How many events are there in the decathlon? (10)", "What do you use to take a cork out of a bottle? (a corkscrew)", "What money do they use in Japan? (Yen)", "What’s the Hungarian word for pepper? (Paprika)", "Name the two main actors in “The Sting”. (Paul Newman and Robert Redford)", "What year did Elvis Presley die? (1977)", "Which Italian leader was terribly afraid of the evil eye? (Mussolini)", "What country gave Florida to the USA in 1891? (Spain)", "Who gave his name to the month of July? (Julius Caesar)", "When was Elvis’ first ever concert? (1954)", "Who is the main actor in “Cocktail”? (Tom Cruise)"];
var txt = " ";
var speed = 50;
txt = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log("This is txt = " + txt);
$("#trivia-head").text("General Trivia Questions");

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("question").innerHTML += txt.charAt(i);
        i++;
        timerT++;
        if (timerT > txt.length) {
            gameOver()
        }
        setTimeout(typeWriter, speed);
        $("#start-button").hide();

    }
  
  
}

function myFunction() {
    if (timerT >= 20) {
        gameOver()
      }
  
    }
  
  
  

function gameOver() {
    // document.getElementById("user-text-input").innerHTML = "GAME OVER!!!!!";
    // document.getElementById("user-text").innerHTML = "GAME OVER!!!!!";
    // document.getElementById("artist-is").style.visibility = 'hidden';
    // document.getElementById("computer-guess-block").style.visibility = 'hidden';
    document.getElementById("start-button").innerHTML = "CLICK TO RESTART";
    $('#start-button').click(
      function () {
        location.reload(true);
      }
    )
  };

document.getElementById("start-button").innerHTML = "START";