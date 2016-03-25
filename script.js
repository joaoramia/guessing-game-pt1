//The user inputs are taken as strings (so if they give us a NaN it won't bring errors. The strings are then changed to integeres as it becomes necessary

var rightGuess = Math.floor(Math.random() * 101); //101 because Math.random goes from 0 (inclusive) up to but not including 1 (exclusive).

var guess;
var guessNumber;
var rightGuessNumber;

function check(){
  guess = document.getElementById("userGuess").value.toString();

  if(guess == rightGuess){
    document.getElementById("result").innerHTML = "CORRECT!";
  }
  else {
    document.getElementById("result").innerHTML = "Try again!";
  }
  guessNumber = Number(guess);
  rightGuessNumber = Number(rightGuess);

 return false;
}

//The hint() function assumes strings and integers might be inputed, so everytime the user gives a string, the answer should be "Try a bigger number"
function hint(){
  if (guess > rightGuess){
    document.getElementById("result").innerHTML = "Try a smaller number";
  }
  else if (guess < rightGuess){
    document.getElementById("result").innerHTML = "Try a bigger number";
  }
  else {
    document.getElementById("result").innerHTML = "You already got it right";
  }
}


function hotOrCold(){
  var difference;

  if (guessNumber != NaN && guessNumber > rightGuessNumber){
    difference = guessNumber - rightGuessNumber;
  }
  else if(guessNumber != NaN && guessNumber < rightGuessNumber){
    difference = rightGuessNumber - guessNumber;
  }
  else if(guessNumber != NaN && guessNumber == rightGuessNumber){
    document.getElementById("hotOrCold").innerHTML = "Congratulations";
    return false;
  }
  else {
    document.getElementById("hotOrCold").innerHTML = "";
    return false;
  }

//Below are the different levels of hot and cold (sorry for the number of possibilities
  if (difference < 10){
    document.getElementById("hotOrCold").innerHTML = "Really hot!!";
  }
  else if(difference < 20){
    document.getElementById("hotOrCold").innerHTML = "Pretty hot!";
  }
  else if(difference < 30){
    document.getElementById("hotOrCold").innerHTML = "Hot!";
  }
  else if(difference < 40){
    document.getElementById("hotOrCold").innerHTML = "Kind of hot";
  }
  else if(difference < 50){
    document.getElementById("hotOrCold").innerHTML = "A bit hot";
  }
  else if(difference < 60){
    document.getElementById("hotOrCold").innerHTML = "A bit cold";
  }
  else if(difference < 70){
    document.getElementById("hotOrCold").innerHTML = "Kind of cold";
  }
  else if(difference < 80){
    document.getElementById("hotOrCold").innerHTML = "Pretty cold";
  }
  else if(difference < 90){
    document.getElementById("hotOrCold").innerHTML = "Really cold";
  }
  else if(difference < 100){
    document.getElementById("hotOrCold").innerHTML = "Just give up";
  }
}


