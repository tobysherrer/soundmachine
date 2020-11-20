// push the button and the computer recodnises the botton being pushed
// link button with drum 
// play right sound
let key;
let keyToDrum;
let i;
let drum;
let sound;

function playSoundOnKeydown() {
    document.addEventListener("keydown", function (event) {
        key = event.code;
        console.log(key);
        keyToDrum = document.querySelectorAll(".drums");
        keyToDrum.forEach(i => {
            if ("Key" + i.textContent == key || i.textContent == key) {
                drum = i.getAttribute("id");
                chooseDrum(drum);
            }
        }
        );
    });
}

function chooseDrum(drum){
    sound = new Audio("sounds/" + drum + ".wav");
    sound.play();

}



playSoundOnKeydown();