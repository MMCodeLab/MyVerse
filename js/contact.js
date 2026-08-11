// ===============================
// CONTACT US - MYVERSE
// ===============================


const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykgbzya";


function openContactModal(){


    let modal =
    document.createElement("div");


    modal.className = "modal details-modal";


    modal.innerHTML = `

    <div class="details-box glass info-box">

        <button class="details-x">×</button>

        <h2>Contact Us</h2>

        <div class="info-content">

            <p>Found a bug, have an idea, or just want to say hi? Send a message and I'll get back to you as soon as I can.</p>

        </div>

        <form id="contactForm" class="contact-form">

            <input type="email" id="contactEmail" name="email" placeholder="Your email" required>

            <textarea id="contactMessage" name="message" placeholder="Your message" required></textarea>

            <button type="submit" id="contactSubmitBtn">Send</button>

            <p id="contactStatus" class="contact-status hidden"></p>

        </form>

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

            statusEl.textContent = "Please fill in both fields.";

            statusEl.classList.add("contact-error");

            return;

        }


        submitBtn.disabled = true;

        submitBtn.textContent = "Sending...";

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

                statusEl.textContent = "Message sent, thank you!";

                statusEl.classList.add("contact-success");

                form.reset();

            }

            else{

                statusEl.textContent = "Something went wrong. Please try again.";

                statusEl.classList.add("contact-error");

            }


        }

        catch(err){

            console.error("Contact form error:", err);

            statusEl.textContent = "Network error. Please try again.";

            statusEl.classList.add("contact-error");

        }

        finally{

            submitBtn.disabled = false;

            submitBtn.textContent = "Send";

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

        openContactModal();

    };


}