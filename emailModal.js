// describes functionality of the email modal

// close modal button
const element = document.getElementsByTagName("p");
const modal = document.getElementsByClassName("email-modal");
const butt_close = document.getElementsByClassName("close-button")[0];

element.innerHTML = "Hellow World!"

butt_close.onclick = function () {
    modal.style.position = "inline";
}

// open modal button
// send mail button?
