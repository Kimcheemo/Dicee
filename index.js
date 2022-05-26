var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);

//concatenate images/dice1.png with randomNumber1
var newDice1 = "images/dice" + randomNumber1 + ".png";
var newDice2 = "images/dice" + randomNumber2 + ".png";

// target the specific dice1
// target the attribute src
// switch the image
// NOTE: newDice is a variable so NO quotation marks!
document.querySelector(".img1").setAttribute("src", newDice1);
document.querySelector(".img2").setAttribute("src", newDice2);

// Change text
// target specific h1
// use .textContent to change text
// use if/else for different outcomes
// to add the flag use an emoji than an icon
if(randomNumber1 === randomNumber2){
  document.querySelector("h1").textContent = "Draw!";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomNumber1 < randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
