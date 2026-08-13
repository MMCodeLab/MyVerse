// ===============================
// PRIVACY AND USER GUIDE - MYVERSE
// ===============================


// title/paragraphs are read live from the translations, so they always
// reflect the language selected at the moment the card is opened or refreshed
function getPrivacyTitle(){ return t("privacy_title"); }


function getPrivacyParagraphs(){

    return [
        t("privacy_p1"), t("privacy_p2"), t("privacy_p3"), t("privacy_p4"),
        t("privacy_p5"), t("privacy_p6"), t("privacy_p7")
    ];

}



function getManualTitle(){ return t("manual_title"); }


function getManualParagraphs(){

    return [
        t("manual_p1"), t("manual_p2"), t("manual_p3"), t("manual_p4"),
        t("manual_p5"), t("manual_p6"), t("manual_p7"), t("manual_p8"),
        t("manual_p9"), t("manual_p10"), t("manual_p11"), t("manual_p12"),
        t("manual_p13")
    ];

}




// ===============================
// OPEN INFO CARD (privacy/manual)
// ===============================


let openLegalType = null;


function openInfoCard(type){


let title =
type === "privacy" ? getPrivacyTitle() : getManualTitle();


let paragraphs =
type === "privacy" ? getPrivacyParagraphs() : getManualParagraphs();


openLegalType = type;


let modal =
document.createElement("div");


modal.className =
"modal details-modal legal-modal";



let paragraphsHTML =
paragraphs
.map(p => `<p>${p}</p>`)
.join("");




modal.innerHTML = `

<div class="details-box glass info-box">


<button class="details-x">

×

</button>



<h2>

${title}

</h2>



<div class="info-content">

${paragraphsHTML}

</div>


</div>

`;




document.body.appendChild(modal);




modal
.querySelector(".details-x")
.onclick=()=>{


modal.remove();

openLegalType = null;


};




modal.onclick=(e)=>{


if(e.target===modal){

modal.remove();

openLegalType = null;

}


};



}




// ===============================
// BUTTON WIRING
// ===============================


const privacyBtn =
document.getElementById("privacyBtn");


if(privacyBtn){


privacyBtn.onclick=function(){

openInfoCard("privacy");

};


}




const manualBtn =
document.getElementById("manualBtn");


if(manualBtn){


manualBtn.onclick=function(){

openInfoCard("manual");

};


}




// ===============================
// LANGUAGE CHANGE: re-open the visible privacy/manual card
// with the new language's content (read-only, no input to lose)
// ===============================


if(typeof onLanguageChange === "function"){


    onLanguageChange(function(){


        if(!openLegalType) return;


        const openCard =
        document.querySelector(".legal-modal");

        if(openCard) openCard.remove();


        openInfoCard(openLegalType);


    });


}