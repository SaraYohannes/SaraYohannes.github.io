// describes functionality of the email modal
/*ref*/
const modal = document.getElementsByClassName("email_modal")[0];
const butt_close = document.getElementsByClassName("close_button")[0];
const butt_open = document.getElementsByClassName("open_button")[0];
//const lang_no = document.getElementById("lang-no");
//const lang_en = document.getElementById("lang-en");


function lang_en() {
    console.log("english function");
    /* meta */
    document.getElementById("page-title").innerHTML = "Sara Yohanne's resume";
    /* e-mail modal */
    document.getElementById("emodal-info").innerHTML = "my contact information. Please click to copy text.";
    document.getElementById("c1").innerHTML = "phone number";
    document.getElementById("c2").innerHTML = "e-mail";
    document.getElementById("c3").innerHTML = "home address";
    document.getElementById("c4").innerHTML = "all contact information";
    /* contact information column */
    document.getElementById("info-col-nr").innerHTML = "my phone number";
    document.getElementById("info-col-sendMe").innerHTML = "send me a mail";
    document.getElementById("info-col-openModal").innerHTML = "copy my contact info";
    /* about me information column */
    document.getElementById("info-col-aboutMe").innerHTML = "about me";
    document.getElementById("info-col-am-text").innerHTML = "information";
    document.getElementById("info-col-relEduc").innerHTML = "relevant education";
    document.getElementById("info-col-re-text").innerHTML = "information";
      /* button links */
    document.getElementById("portf_b_git").innerHTML = "my github account";
    document.getElementById("portf_b_sketch").innerHTML = "my Sketchfab account";
    document.getElementById("portf_b_devi").innerHTML = "my Deviantart account";
    /* project information column */
    document.getElementById("info-col-projectInfo").innerHTML = "project information";
      /* Github pages project */
    document.getElementById("Project-githubPages").innerHTML = "homepage";
    document.getElementById("Project-githubPages-description").innerHTML =
        "used this project to learn about HTML, CSS, and JavaScript. The result was a homepage which also serve as my resume";
      /* Project two */
    /*document.getElementById("info-col-projectInfo").innerHTML = "Copy my phone contact info";*/
      /* Project three */
    /*document.getElementById("info-col-projectInfo").innerHTML = "Copy my phone contact info";*/
    /* footer */
    /*document.getElementById("info-col-openModal").innerHTML = "Copy my phone contact info";*/

}
function lang_no() {
    console.log("norsk funksjon");
    /* meta */
    document.getElementById("page-title").innerHTML = "Sara Yohanne's CV";
    /* e-mail modal */
    document.getElementById("emodal-info").innerHTML = "kontaktinformasjon. Klikk for å kopiere.";
    document.getElementById("c1").innerHTML = "mobil nummer";
    document.getElementById("c2").innerHTML = "e-post";
    document.getElementById("c3").innerHTML = "hjemmeadresse";
    document.getElementById("c4").innerHTML = "all kontaktinformasjonen min";
    /* contact information column */
    document.getElementById("info-col-nr").innerHTML = "mitt nummer";
    document.getElementById("info-col-sendMe").innerHTML = "send meg en e-post";
    document.getElementById("info-col-openModal").innerHTML = "kopier kontaktinformasjonen min";
    /* about me information column */
    document.getElementById("info-col-aboutMe").innerHTML = "om meg";
    document.getElementById("info-col-am-text").innerHTML = "tekst";
    document.getElementById("info-col-relEduc").innerHTML = "relevant utdanning";
    document.getElementById("info-col-re-text").innerHTML = "tekst";
    /* button links */
    document.getElementById("portf_b_git").innerHTML = "min github bruker";
    document.getElementById("portf_b_sketch").innerHTML = "min Sketchfab bruker";
    document.getElementById("portf_b_devi").innerHTML = "min Deviantart bruker";
    /* project information column */
    document.getElementById("info-col-projectInfo").innerHTML = "prosjekt informasjon";
    /* Github pages project */
    document.getElementById("Project-githubPages").innerHTML = "hjemmeside";
    document.getElementById("Project-githubPages-description").innerHTML =
    "brukte prosjektet til å lære om HTML, CSS og JavaScript. Resultatet ble en hjemmeside som jeg også bruker som CVen min";
}

// open modal button
butt_open.onclick = function () {
    modal.style.display = "block";
}

// close modal button
butt_close.onclick = function () {
    modal.style.display = "none";
}

/// copy text depending on id of button (get my contact information)
function copyTextFunction(buttonId) {
    let copyText = " ";
    switch (buttonId) {
        case 'c1':
            copyText = 41294755;
            break;
        case 'c2':
            copyText = 'sara.seacucumber@gmail.com';
            break;
        case 'c3':
            copyText = 'Heidmanns gate 32, HO116 \n2317 HAMAR';
            break;
        case 'c4':
            copyText = 'Sara Yohannes \ntlf: 41294755 \ne-mail: sara.seacucumber@gmail.com \nHeidmanns gate 32, HO116 \n2317 HAMAR';
            break;
        default:
            copyText = "No text was found";
    }
    navigator.clipboard.writeText(copyText);
}
