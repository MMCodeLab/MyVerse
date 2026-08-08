let rating = 0;

let songRating = 0;


const starsContainer =
document.getElementById("stars");


const songStarsContainer =
document.getElementById("songStars");


// durata pressione prolungata per attivare la scelta del voto negativo (ms)
const LONG_PRESS_MS = 1200;



function createStars(container, type){


    if(!container) return;


    container.innerHTML="";

    container.classList.remove("negative-mode");


    for(let i=1;i<=10;i++){


        let star =
        document.createElement("span");


        star.innerHTML="★";

        star.dataset.value=i;


        let pressTimer = null;

        let longPressFired = false;


        // pressione prolungata solo sulla prima stella
        if(i===1){


            const startPress = function(){

                longPressFired = false;

                pressTimer = setTimeout(function(){

                    longPressFired = true;

                    // entra in modalità "scelta voto negativo":
                    // il prossimo click su una stella qualsiasi
                    // sceglierà il valore negativo (es. 3ª stella = -3)
                    container.classList.add("negative-mode");

                    updateStars(container,type);


                }, LONG_PRESS_MS);

            };


            const cancelPress = function(){

                clearTimeout(pressTimer);

            };


            star.addEventListener("mousedown", startPress);

            star.addEventListener("touchstart", startPress, {passive:true});


            star.addEventListener("mouseup", cancelPress);

            star.addEventListener("mouseleave", cancelPress);

            star.addEventListener("touchend", cancelPress);

            star.addEventListener("touchcancel", cancelPress);


        }



        star.onclick=function(){


            // ignora il click di rilascio che segue
            // immediatamente la pressione prolungata
            if(i===1 && longPressFired){

                longPressFired=false;

                return;

            }


            // modalità scelta voto negativo attiva:
            // il click su una stella qualsiasi sceglie il valore
            if(container.classList.contains("negative-mode")){


                if(type==="movie"){

                    rating = -i;

                }

                else{

                    songRating = -i;

                }


                container.classList.remove("negative-mode");


                updateStars(container,type);


                return;

            }


            // voto normale positivo


            if(type==="movie"){

                rating=i;

            }

            else{

                songRating=i;

            }


            updateStars(container,type);


        };



        container.appendChild(star);


    }


}




function updateStars(container,type){


    if(!container) return;



    let value =
    type==="movie"
    ?
    rating
    :
    songRating;



    const stars =
    container.querySelectorAll("span");



    // modalità scelta voto negativo: mostra le stelle
    // pronte per la selezione, senza indicare un voto già dato
    if(container.classList.contains("negative-mode")){


        stars.forEach(star=>{

            star.classList.remove("active");

            star.classList.add("negative-select");

        });


        return;

    }



    // voto negativo già scelto: riempi di rosso
    // tante stelle quante indica il valore assoluto
    if(value < 0){


        let magnitude = Math.abs(value);


        stars.forEach((star,index)=>{


            star.classList.remove("negative-select");


            if(index < magnitude){

                star.classList.add("negative-active");

            }

            else{

                star.classList.remove("negative-active");

            }


        });


        return;

    }



    // voto normale positivo


    stars.forEach((star,index)=>{


        star.classList.remove("negative-select","negative-active");


        if(index < value){

            star.classList.add("active");

        }

        else{

            star.classList.remove("active");

        }


    });



}




createStars(
starsContainer,
"movie"
);


createStars(
songStarsContainer,
"song");