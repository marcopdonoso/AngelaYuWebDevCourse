// Detecting button click
var buttons = document.querySelectorAll(".drum");

for (let index = 0; index < buttons.length; index++) {
    buttons[index].addEventListener("click", function () {
        var key = this.innerHTML;
        makeSound(key);
        buttonAnimation(key);
    });
    
}

// Detecting keyboard press

document.addEventListener("keydown", function (event) {
    var key = event.key;
    makeSound(key);
    buttonAnimation(key);
});



function makeSound(key) {
    switch (key) {
        case "w":
            var sound = new Audio("./sounds/crash.mp3");
            sound.play();
            break;

        case "a":
            var sound = new Audio("./sounds/kick-bass.mp3");
            sound.play();
            break;

        case "s":
            var sound = new Audio("./sounds/snare.mp3");
            sound.play();
            break;

        case "d":
            var sound = new Audio("./sounds/tom-1.mp3");
            sound.play();
            break;

        case "j":
            var sound = new Audio("./sounds/tom-2.mp3");
            sound.play();
            break;

        case "k":
            var sound = new Audio("./sounds/tom-3.mp3");
            sound.play();
            break;

        case "l":
            var sound = new Audio("./sounds/tom-4.mp3");
            sound.play();
            break;

        default:
            break;
    }
}

function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed")
    }, 100);
}
