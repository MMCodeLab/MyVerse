// ===============================
// CONTACT US - MYVERSE
// ===============================


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykgbzya";


// <-- put your real Instagram profile link here
const INSTAGRAM_URL = "https://www.instagram.com/myverse_webapp";


// <-- update this if matt3xx is not the right GitHub username
const GITHUB_URL = "https://github.com/MMCodeLab";



function openContactModal(){


    let modal =
    document.createElement("div");


    modal.className = "modal details-modal";


    modal.innerHTML = `

    <div class="details-box glass info-box">

        <button class="details-x">×</button>

        <h2>${t("contact_title")}</h2>

        <div class="info-content">

            <p>${t("contact_desc")}</p>

        </div>

        <form id="contactForm" class="contact-form">

            <input type="email" id="contactEmail" name="email" placeholder="${t("contact_email_placeholder")}" required>

            <textarea id="contactMessage" name="message" placeholder="${t("contact_message_placeholder")}" required></textarea>

            <button type="submit" id="contactSubmitBtn">${t("contact_send")}</button>

            <p id="contactStatus" class="contact-status hidden"></p>

        </form>

        <div class="social-row">

            <a href="${INSTAGRAM_URL}" target="_blank" rel="noopener noreferrer" class="social-btn glass">

                <span class="social-icon">${ICONS.instagram}</span>

                <span class="social-label">${t("instagram_label")}</span>

            </a>


            <a href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer" class="social-btn glass">

                <span class="social-icon">${ICONS.github}</span>

                <span class="social-label">${t("github_label")}</span>

            </a>

        </div>

    </div>

    `;


    document.body.appendChild(modal);


    modal
    .querySelector(".details-x")
    .onclick = function(){

        modal.remove();

    };


    modal.onclick = function(e){

        if(e.target===modal){

            modal.remove();

        }

    };



    const form = modal.querySelector("#contactForm");

    const statusEl = modal.querySelector("#contactStatus");

    const submitBtn = modal.querySelector("#contactSubmitBtn");



    form.onsubmit = async function(e){


        e.preventDefault();


        const email =
        modal.querySelector("#contactEmail").value.trim();


        const message =
        modal.querySelector("#contactMessage").value.trim();


        statusEl.classList.remove("hidden", "contact-success", "contact-error");


        if(email === "" || message === ""){

            statusEl.textContent = t("contact_error_fields");

            statusEl.classList.add("contact-error");

            return;

        }


        submitBtn.disabled = true;

        submitBtn.textContent = t("contact_sending");

        statusEl.textContent = "";



        try{


            const res = await fetch(FORMSPREE_ENDPOINT, {

                method: "POST",

                headers: {

                    "Accept": "application/json"

                },

                body: new FormData(form)

            });


            if(res.ok){

                statusEl.textContent = t("contact_success");

                statusEl.classList.add("contact-success");

                form.reset();

            }

            else{

                statusEl.textContent = t("contact_error_generic");

                statusEl.classList.add("contact-error");

            }


        }

        catch(err){

            console.error("Contact form error:", err);

            statusEl.textContent = t("contact_error_network");

            statusEl.classList.add("contact-error");

        }

        finally{

            submitBtn.disabled = false;

            submitBtn.textContent = t("contact_send");

        }


    };


}




// ===============================
// SIDEBAR BUTTON WIRING
// ===============================


const contactBtn =
document.getElementById("contactBtn");


if(contactBtn){


    contactBtn.onclick = function(){

        sidebar.classList.remove("open");
        if(typeof hideGenreList === "function") hideGenreList();

        openContactModal();

    };


}




// ===============================
// LANGUAGE CHANGE: update labels of the open contact modal in place,
// so typed email/message values are never lost
// ===============================


if(typeof onLanguageChange === "function"){


    onLanguageChange(function(){


        const form =
        document.querySelector("#contactForm");

        if(!form) return;


        const modalBox =
        form.closest(".details-modal");

        if(!modalBox) return;


        const heading = modalBox.querySelector("h2");
        if(heading) heading.textContent = t("contact_title");

        const desc = modalBox.querySelector(".info-content p");
        if(desc) desc.textContent = t("contact_desc");

        const emailInput = modalBox.querySelector("#contactEmail");
        if(emailInput) emailInput.placeholder = t("contact_email_placeholder");

        const messageInput = modalBox.querySelector("#contactMessage");
        if(messageInput) messageInput.placeholder = t("contact_message_placeholder");

        // don't overwrite the submit button while a request is in flight
        const submitBtn = modalBox.querySelector("#contactSubmitBtn");
        if(submitBtn && !submitBtn.disabled) submitBtn.textContent = t("contact_send");

        const labels = modalBox.querySelectorAll(".social-label");
        if(labels[0]) labels[0].textContent = t("instagram_label");
        if(labels[1]) labels[1].textContent = t("github_label");


    });


}