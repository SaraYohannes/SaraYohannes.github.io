// describes functionality of the email modal

const modal = document.getElementsByClassName("email-modal")[0];
const butt_close = document.getElementsByClassName("close-button")[0];
const butt_open = document.getElementsByClassName("open-button")[0];
const butt_copyText = document.getElementsByClassName("copyText-button")[0];

// open modal button
butt_open.onclick = function () {
    modal.style.display = "block";
}

// close modal button
butt_close.onclick = function () {
    modal.style.display = "none";
}

// copy information on button
butt_copyText.onclick = function () {

}
