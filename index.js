var randomNumber1 = Math.floor(Math.random()*6) +1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

// change attribute value for player 1

var randomImageSource = "img/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// PLAYER 2 DICE CHANGE
var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

// change attribute value for player 2

var randomImageSource2 = "img/" + randomDiceImage2;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// SELECT WINNER ACCORDING TO DICE ROLL 
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}