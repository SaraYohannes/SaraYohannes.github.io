// describes functionality of the email modal

// close modal button
const modal = document.getElementsByClassName("email-modal");
const butt_close = document.getElementsByClassName("close-button")[0];

butt_close.onclick = function () {
    modal.style.display = "none";
}

// open modal button
// send mail button?
