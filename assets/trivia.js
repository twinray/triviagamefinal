// document.getElementById('incorrect')innerHTML = ("You have " + incorrect " incorrect.")

 // document.getElementById('unanswered')innerHTML = ("You have " + unanswered " unanswered.")
$(document).ready(function () {
  //QandA = triviaQuestions();
  $("#done").hide();
});
 var message;
 var correct = 0;
 var incorrect = 0; 
 var unanswered = 0;
 var counter = 15;

function timerWrapper() {
  counter = 30;
  $("#timer").html("<h2> Time remaining: " + counter + "</h2>");
  theClock = setInterval(thirtySeconds, 1000);
}

  function thirtySeconds() {
    counter --;
    $("#timer").html("<h2> Time remaining: " + counter + "</h2>");
    if (counter === 0) {
      clearInterval(theClock);
      endGame();
    }
    
    $(".timer").html(counter);
  }


  function start() {
    document.getElementById('invisible').style.visibility = 'visible';
    document.getElementById('startButton').style.visibility = 'hidden';
    document.getElementById('submitTest').style.visibility = 'visible';
    timerWrapper();


  }

  function check() {
    
    $("#invisible").hide();
    console.log('check called is it working?');
    clearInterval(theClock);



    var question1 = document.trivia.question1.value;
    var question2 = document.trivia.question2.value;
    var question3 = document.trivia.question3.value;
    var question4 = document.trivia.question4.value;
   
    var timeRemaining

    if (question1 == 'Helga Hufflepuff') {
      correct++;    
    } else if (question1 == "") {
      unanswered++
    } else {
      incorrect++
    }
    if (question2 == 'Cedric Diggory') {
      correct++;     
    } else if (question2 == "") {
      unanswered++
    } else {
      incorrect++
    }
    if (question3 == 'Pomono Sprout') {
      correct++;    
    } else if (question3 == "") {
      unanswered++      
    } else {
      incorrect++      
    }
    if (question4 == 'Badger') {
      correct++;     
    } else if (question4 == "") {
      unanswered++      
    } else {
      incorrect++     
    }
    showAnswer();
  }
  function endGame(){
    check();
  }

function showAnswer(){
  $("#submitTest").hide();
  $("#done").show();
  $("#message").html("<h2>Good Job Hufflepuff!! You aint no ravenclaw</h2>");
  $("#finalCorrect").html("<h2>You have: " + correct + " correct.</h2>");
  $("#incorrect").html("<h2>You have: " + incorrect + " incorrect.</h2>");
  $("#unanswered").html("<h2>You have: " + unanswered + " unanswered.</h2>");
}

  

  $("#startButton").on("click", function () {
    start();
    //$("submitTest").hide();

  });
  $("#submitTest").on("click", function () {
    check();
  });
  $("#done").on("click", function () {
    $("#invisible").show();
    timerWrapper();
    $("#submitTest").show();
    $("#message").empty();
    $("#finalCorrect").empty();
    $("#incorrect").empty();
    $("#unanswered").empty();
    $("#done").hide();

  });

