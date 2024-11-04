// describes functionality of the email modal

// close modal button
const modal = document.getElementsByClassName("email-modal")[0];
const butt_close = document.getElementsByClassName("close-button")[0];
const butt_open = document.getElementsByClassName("open-button")[0]

butt_open.onclick = function () {
    modal.style.display = "block";
}
butt_close.onclick = function () {
    modal.style.display = "none";
}

// open modal button
// send mail button?
