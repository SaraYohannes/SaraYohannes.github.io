// describes functionality of the email modal

const modal = document.getElementsByClassName("email_modal")[0];
const butt_close = document.getElementsByClassName("close_button")[0];
const butt_open = document.getElementsByClassName("open_button")[0];
const butt_copyText = document.getElementsByClassName("copyText_button")[0];

// open modal button
butt_open.onclick = function () {
    modal.style.display = "block";
}

// close modal button
butt_close.onclick = function () {
    modal.style.display = "none";
}

// copy information on button
//butt_copyText.onclick = function () {

//}

function copyTextFunction(buttonId) {
    console.log(buttonId);
 
    switch (buttonId) {
        case c1:
            copyText = 41294755;
            break;
        case c2:
            copyText = 'sara.seacucumber@gmail.com';
            break;
        case c3:
            copyText = 'Heidmanns gate 32, HO116' + n/ + '2317 HAMAR';
            break;
        case c4:
            copyText = 'Sara Yohannes' + n / + 'tlf: ' + 41294755 + n / + 'e-mail: sara.seacucumber@gmail.com' + n / + 'Heidmanns gate 32, HO116' + n / + '2317 HAMAR';
            break;
        default:
            copyText = "No text was found";

    }
    navigator.clipboard.writeText(copyText);

    alert("Copied " + copyText);
}
