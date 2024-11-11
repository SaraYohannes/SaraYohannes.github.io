// describes functionality of the email modal
/*ref*/
const modal = document.getElementsByClassName("email_modal")[0];
const butt_close = document.getElementsByClassName("close_button")[0];
const butt_open = document.getElementsByClassName("open_button")[0];
const lang_no = document.getElementById("lang-no");
const lang_en = document.getElementById("lang-en");


lang_en.onclick = function () {
    /* meta */
    document.getElementsById("page-title").innerHTML = "Sara Yohanne's resume";
    /* e-mail modal */
    document.getElementById("emodal-info").innerHTML = "My contact information. Please click to copy text.";
    document.getElementById("c1").innerHTML = "Phone number";
    document.getElementById("c2").innerHTML = "E-mail";
    document.getElementById("c3").innerHTML = "Home address";
    document.getElementById("c4").innerHTML = "All contact information";
    /* contact information column */
    document.getElementById("info-col-nr").innerHTML = "My phone number";
    document.getElementById("info-col-sendMe").innerHTML = "Send me a mail";
    document.getElementById("info-col-openModal").innerHTML = "Copy my contact info";
    /* about me information column */
    document.getElementById("info-col-aboutMe").innerHTML = "about me";
    document.getElementById("info-col-am-text").innerHTML = "information";
    document.getElementById("info-col-relEduc").innerHTML = "relevant education";
    document.getElementById("info-col-re-text").innerHTML = "information";
      /* button links */
    document.getElementById("portf_b_git").innerHTML = "My github account";
    document.getElementById("portf_b_sketch").innerHTML = "My Sketchfab account";
    document.getElementById("portf_b_devi").innerHTML = "My Deviantart account";
    /* project information column */
    document.getElementById("info-col-projectInfo").innerHTML = "Project information";
      /* Github pages project */
    document.getElementById("Project-githubPages").innerHTML = "Homepage";
    document.getElementById("Project-githubPages-description").innerHTML =
        "Used this project to learn about HTML, CSS, and JavaScript. The result was a homepage which also serve as my resume";
      /* Project two */
    /*document.getElementById("info-col-projectInfo").innerHTML = "Copy my phone contact info";*/
      /* Project three */
    /*document.getElementById("info-col-projectInfo").innerHTML = "Copy my phone contact info";*/
    /* footer */
    /*document.getElementById("info-col-openModal").innerHTML = "Copy my phone contact info";*/

}
lang_no.onclick = function () {
    /* meta */
    document.getElementsById("page-title").innerHTML = "Sara Yohanne's CV";
    /* e-mail modal */
    document.getElementById("emodal-info").innerHTML = "Kontaktinformasjon. Klikk for å kopiere.";
    document.getElementById("c1").innerHTML = "Mobil nummer";
    document.getElementById("c2").innerHTML = "E-post";
    document.getElementById("c3").innerHTML = "Hjemmeadresse";
    document.getElementById("c4").innerHTML = "All kontaktinformasjonen min";
    /* contact information column */
    document.getElementById("info-col-nr").innerHTML = "Mitt nummer";
    document.getElementById("info-col-sendMe").innerHTML = "Send meg en e-post";
    document.getElementById("info-col-openModal").innerHTML = "Kopier kontaktinformasjonen min";
    /* about me information column */
    document.getElementById("info-col-aboutMe").innerHTML = "om meg";
    document.getElementById("info-col-am-text").innerHTML = "tekst";
    document.getElementById("info-col-relEduc").innerHTML = "relevant utdanning";
    document.getElementById("info-col-re-text").innerHTML = "tekst";
    /* button links */
    document.getElementById("portf_b_git").innerHTML = "Min github bruker";
    document.getElementById("portf_b_sketch").innerHTML = "Min Sketchfab bruker";
    document.getElementById("portf_b_devi").innerHTML = "Min Deviantart bruker";
    /* project information column */
    document.getElementById("info-col-projectInfo").innerHTML = "Prosjekt informasjon";
    /* Github pages project */
    document.getElementById("Project-githubPages").innerHTML = "Hjemmeside";
    document.getElementById("Project-githubPages-description").innerHTML =
    "Brukte prosjektet til å lære om HTML, CSS og JavaScript. Resultatet ble en hjemmeside som jeg også bruker som CVen min";
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
