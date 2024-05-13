// GENERATING DICE ROLL CHANGE FOR PLAYER 1
// Generate a random Number
var randomNumber1 = Math.random();
// Scale random number 
    randomNumber1 = randomNumber1 * 6;
    randomNumber1 = Math.floor(randomNumber1) + 1;
    
    if (randomNumber1 == 1) {
        document.querySelector("#player1").setAttribute("src","./img/dice1.png");
        
    } else if (randomNumber1 == 2) {
        document.querySelector("#player1").setAttribute("src","./img/dice2.png");
    } else if (randomNumber1 == 3) {
        document.querySelector("#player1").setAttribute("src","./img/dice3.png");
    } else if (randomNumber1 == 4) {
        document.querySelector("#player1").setAttribute("src","./img/dice4.png");
    } else if (randomNumber1 == 5) {
        document.querySelector("#player1").setAttribute("src","./img/dice5.png");
    } else {
        document.querySelector("#player1").setAttribute("src","./img/dice6.png");
    }
// GENERATING DICE ROLL CHANGE FOR PLAYER 2
// Generate a random Number
var randomNumber2 = Math.random();
// Scale random number 
    randomNumber2 = randomNumber2 * 6;
    randomNumber2 = Math.floor(randomNumber2) + 1;
    
    if (randomNumber2 == 1) {
        document.querySelector("#player2").setAttribute("src","./img/dice1.png");
        
    } else if (randomNumber2 == 2) {
        document.querySelector("#player2").setAttribute("src","./img/dice2.png");
    } else if (randomNumber2 == 3) {
        document.querySelector("#player2").setAttribute("src","./img/dice3.png");
    } else if (randomNumber2 == 4) {
        document.querySelector("#player2").setAttribute("src","./img/dice4.png");
    } else if (randomNumber2 == 5) {
        document.querySelector("#player2").setAttribute("src","./img/dice5.png");
    } else {
        document.querySelector("#player2").setAttribute("src","./img/dice6.png");
    }

    // CHANGING MAIN TEXT TO WINNER 
    if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").innerHTML="Player 2 wins!";
    } else if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML="Player 1 wins!";
    }  else{
        document.querySelector("h1").innerHTML="Draw!";
    }