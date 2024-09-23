const image = [
    "Images/dice1.png",  
    "Images/dice2.png", 
    "Images/dice3.png", 
    "Images/dice4.png", 
    "Images/dice5.png", 
    "Images/dice6.png"
];

const element = document.getElementById("result"); 
const audio = new Audio("tone (1).mp3"); 

function add() {
    audio.play();

    const random1 = Math.floor(Math.random() * 6); 
    const random2 = Math.floor(Math.random() * 6); 

    if (random1 > random2) {
        element.textContent = "Player 1 wins!";
    } else if (random1 < random2) {
        element.textContent = "Player 2 wins!";
    } else {
        element.textContent = "Oops! It's a draw!";
    }

    document.getElementById("img1").src = image[random1];
    document.getElementById("img2").src = image[random2];
}
