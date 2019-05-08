
var timerT = 61;
var intervalId;
var i = 0;
var computerQ = ["What process involves heating an ore to obtain a metal?", "What did the Montgolfier brothers invent?", "What type of elephant has got the biggest ears?", "Who invented the electric light bulb?", "What’s the smallest type of tree in the world?", "Who invented television?", "What activity other than jumping are kangaroos good at?", "What’s the capital of Ecuador?", "What colors make purple?", "What’s the hardest rock?", "How much does a liter of water weigh?", "What year was President Kennedy killed?", "Where does the American president live?", "What is the first letter on a typewriter?", "What was the nickname of President Duvalier of Haiti, who died in 1971?", "In 1816 which US state was admitted to the Union as the 20th state?", "Who discovered the vaccination against smallpox in 1796?", "Which is the oldest University in the USA?", "What, along with heart disease and cancer, accounts for 64 percent of U.S. deaths?", "Who invented the telephone?", "Which nail grows fastest?", "What temperature does water boil at?", "Who discovered penicillin?", "What Spanish artist said he would eat his wife when she died?", "Who wrote Julius Caesar, Macbeth and Hamlet?", "What did the crocodile swallow in Peter Pan?", "Which German city is famous for the perfume it produces?", "When did the First World War start?", "What did Joseph Priestley discover in 1774?", "Where is the smallest bone in the body?", "Which is the only mammal that can’t jump?", "What color is a panda?", "Who cut Van Gogh’s ear?", "Who painted the Mona Lisa?", "How many dots are there on two dice?", "What horoscope sign has a crab?", "When did the Second World War end?", "What’s the real name of Siddhartha Gautama?", "Where was Christopher Columbus born?", "When did the American Civil War end?", "Who said E=mc2 ?", "Which planet is nearest the sun?", "Where are the Dolomites?", "What’s the capital of Kenya?", "Which is the largest ocean?", "What’s the capital of Honduras?", "What’s the capital of Ethiopia?", "How many squares are there on a chess board?", "How many prongs are there on a fork?", "Who starts first in chess?", "How many events are there in the decathlon?", "What do you use to take a cork out of a bottle?", "What money do they use in Japan?", "What’s the Hungarian word for pepper?", "Name the two main actors in “The Sting”.", "What year did Elvis Presley die?", "Which Italian leader was terribly afraid of the evil eye?", "What country gave Florida to the USA in 1891?", "Who gave his name to the month of July?", "When was Elvis’ first ever concert?", "Who is the main actor in “Cocktail”?"];
var computerA = ["Smelting", "The Balloon", "African Elephant", "Thomas Edison", "Bonsai", "John Logie Baird", "Boxing", "Quito", "Red and Blue", "Diamond", "1kg or 2.2lbs", "1963", "The White House", "Q", "Papa Doc", "Mississippi", "Edward Jenner", "Harvard", "Stroke", "Bell", "Middle", "212F", "Fleming", "Dali", "Shakespeare", "Alarm clock", "Cologne", "1914", "Oxygen", "ear", "Elephant", "Black and White", "He did", "Da Vinci", "42", "Cancer", "1945", "Buddha", "Genoa", "1865", "Einstein", "Mercury", "Italy", "Nairobi", "Pacific", "Tegucigalpa", "Addis Ababa", "64", "4", "White", "10", "A Corkscrew", "Yen", "Paprika", "Paul Newman and Robert Redford", "1977", "Mussolini", "Spain", "Julius Caesar", "1954", "Tom Cruise"];
var computerObj1 = ["Boiling", "The Computer", "Asian Elephant", "Sir Isaac Newton", "Banyan", "John Wilkinson", "Running", "Buenos Aires", "Blue and Green", "Talc", "1.5kg or 3.2lbs", "1965", "The Pentagon", "W", "Dada Luis", "Georgia", "Edward Jenner", "Harvard", "Stroke", "Bell", "Middle", "212F", "Fleming", "Dali", "Shakespeare", "Alarm clock", "Cologne", "1914", "Oxygen", "ear", "Elephant", "Black and White", "He did", "Da Vinci", "42", "Cancer", "1945", "Buddha", "Genoa", "1865", "Einstein", "Mercury", "Italy", "Nairobi", "Pacific", "Tegucigalpa", "Addis Ababa", "64", "4", "White", "10", "A Corkscrew", "Yen", "Paprika", "Paul Newman and Robert Redford", "1977", "Mussolini", "Spain", "Julius Caesar", "1954", "Tom Cruise"];
var computerObj2 = ["Vaporization", "Submarines", "Sub-Saharan Elephant", "Thomas Newcomen", "Peepal", "Charles Babbage", "Kicking", "Sucre", "Red and Yellow", "Corundum", "0.5kg or 1lb", "1967", "The Senate Building", "Y", "The Doc", "Louisiana", "Edward Jenner", "Harvard", "Stroke", "Bell", "Middle", "212F", "Fleming", "Dali", "Shakespeare", "Alarm clock", "Cologne", "1914", "Oxygen", "ear", "Elephant", "Black and White", "He did", "Da Vinci", "42", "Cancer", "1945", "Buddha", "Genoa", "1865", "Einstein", "Mercury", "Italy", "Nairobi", "Pacific", "Tegucigalpa", "Addis Ababa", "64", "4", "White", "10", "A Corkscrew", "Yen", "Paprika", "Paul Newman and Robert Redford", "1977", "Mussolini", "Spain", "Julius Caesar", "1954", "Tom Cruise"];
var computerObj3 = ["Liquidation", "The Museum", " Ecuador Elephant", "William Cullen", "Eucalyptus", "Samuel Morse", "Walking", "Santiago", "Yellow and Blue", "Topaz", "2kg or 4.2lbs", "1961", "The Capital", "R", "Papi", "Texas", "Edward Jenner", "Harvard", "Stroke", "Bell", "Middle", "212F", "Fleming", "Dali", "Shakespeare", "Alarm clock", "Cologne", "1914", "Oxygen", "ear", "Elephant", "Black and White", "He did", "Da Vinci", "42", "Cancer", "1945", "Buddha", "Genoa", "1865", "Einstein", "Mercury", "Italy", "Nairobi", "Pacific", "Tegucigalpa", "Addis Ababa", "64", "4", "White", "10", "A Corkscrew", "Yen", "Paprika", "Paul Newman and Robert Redford", "1977", "Mussolini", "Spain", "Julius Caesar", "1954", "Tom Cruise"];
var txt = " ";
var txtObj = " ";
var n = 0;
var objN = 0;
var speed = 50;
var objA = " ";
var objB = " ";
var objC = " ";
var objD = " ";
txt = computerQ[Math.floor(Math.random() * computerQ.length)];
n = computerQ.indexOf(txt);
txtAns = computerA[n];
console.log("This is txt = " + txt);
console.log("ComputerQ =  " + computerQ.length);
console.log("ComputerA =  " + computerA.length);
console.log("txt = " + txt.length);
console.log("n =  " + n);
console.log("ComputerA  =  " + txtAns);
$("#trivia-head").text("General Trivia Questions!");
$("#start-button").text("START");
var objectiveOpt = [computerObj1[n], computerA[n], computerObj2[n], computerObj3[n]];
txtObj = objectiveOpt[Math.floor(Math.random() * objectiveOpt.length)];
objN = objectiveOpt.indexOf(txtObj);
objA = objectiveOpt[objN];
if (objN === 0) {
  objB = objectiveOpt[objN + 1];
  objC = objectiveOpt[objN + 2];
  objD = objectiveOpt[objN + 3];

}

else if (objN === 1) {
  objB = objectiveOpt[objN + 2];
  objC = objectiveOpt[objN - 1];
  objD = objectiveOpt[objN + 1];
}

else if (objN === 2) {
  objB = objectiveOpt[objN - 2];
  objC = objectiveOpt[objN + 1];
  objD = objectiveOpt[objN - 1];
}

else {
  objB = objectiveOpt[objN - 1];
  objC = objectiveOpt[objN - 2];
  objD = objectiveOpt[objN - 3];
}

console.log("This is txtObj = " + txtObj);
console.log("objectiveOpt =  " + objectiveOpt.length);
console.log("txtObj = " + txtObj.length);
console.log("objN =  " + objN);
console.log("Objective A  =  " + objA);
console.log("ComputerA  =  " + txtAns);
// $("#objectivea-button").hide();
// $("#objectiveb-button").hide();
// $("#objectivec-button").hide();
// $("#objectived-button").hide();


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("question").innerHTML += txt.charAt(i);
    i++;
    // console.log("txt = " + txt.length);
    // timerT;
    // if (timerT > txt.length) {
    //   gameOver()
    // }
    setTimeout(typeWriter, speed);
    $("#start-button").hide();
    // $("#objectivea-button").hide();
    // $("#objectiveb-button").hide();
    // $("#objectivec-button").hide();
    // $("#objectived-button").hide();
    document.getElementById("objectivea-button").innerHTML = objA;
    document.getElementById("objectiveb-button").innerHTML = objB;
    document.getElementById("objectivec-button").innerHTML = objC;
    document.getElementById("objectived-button").innerHTML = objD;
    $("#objectivea-button").delay(txt.length * 50).fadeIn();
    $("#objectiveb-button").delay(txt.length * 50).fadeIn();
    $("#objectivec-button").delay(txt.length * 50).fadeIn();
    $("#objectived-button").delay(txt.length * 50).fadeIn();
    // $("#objectivea-button").text(txtAns);
    // $(document).ready(function () {
    //   $("start-button").click(function () {
    //   });
    // });
    // document.getElementById("objectivea-button").innerHTML = txtAns;

    //  The decrement function for Time.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {

      //  Decrease number by one.
      timerT--;

      //  Show the number in the #show-number tag.
      $("#start-time").html("Time : " + timerT);


      //  Once number hits zero...
      if (timerT === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        console.log("GAME OVER");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();
  }
}
// $('#trivia-ans').click(
//   function () {
//     if ();
//   }
// )

function objectiveA() {
  if (objA === txtAns) {
    document.getElementById("result").innerHTML = "Good Job!";
  } else {
    document.getElementById("result").innerHTML = "Looser!";
  }

}
function objectiveB() {
  if (objB === txtAns) {
    document.getElementById("result").innerHTML = "Good Job!";
  } else {
    document.getElementById("result").innerHTML = "Looser!";
  }

}

function objectiveC() {
  if (objC === txtAns) {
    document.getElementById("result").innerHTML = "Good Job!";
  } else {
    document.getElementById("result").innerHTML = "Looser!";
  }

}

function objectiveD() {
  if (objD === txtAns) {
    document.getElementById("result").innerHTML = "Good Job!";
  } else {
    document.getElementById("result").innerHTML = "Looser!";
  }

}
// function myFunction() {
//   if (timerT >= 20) {
//     gameOver()
//   }

// }




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

