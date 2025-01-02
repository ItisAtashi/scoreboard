let homeCount = document.getElementById("box-home_count");
let guestCount = document.getElementById("box-guest_count");

let homeIncrement = 0;
let guestIncrement = 0;

// Home screen
function homeOnePlus() {
    homeIncrement += 1;
    homeCount.textContent = homeIncrement;
}

function homeTwoPlus() {
    homeIncrement += 2;
    homeCount.textContent = homeIncrement;
}

function homeThreePlus() {
    homeIncrement += 3;
    homeCount.textContent = homeIncrement;
}

// Guest screen
function guestOnePlus() {
    guestIncrement += 1;
    guestCount.textContent = guestIncrement;
}

function guestTwoPlus() {
    guestIncrement += 2;
    guestCount.textContent = guestIncrement;
}

function guestThreePlus() {
    guestIncrement += 3;
    guestCount.textContent = guestIncrement;
}
