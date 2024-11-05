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
    const info = document.createElement("input");
    info.value = document.querySelector("p.copyText-button").innerHTML;
    document.body.appendChild(info);

    navigator.clipboard.writeText(info).then(() => {
        const confi = document.getElementById(confi);
        confi.style.display = "block";

        setTimeout(() => {
            confi.style.display = "none";
        }, 2000);
    }).catch(err => {
        console.error("Didn't copy text: ", err);
    });
}
