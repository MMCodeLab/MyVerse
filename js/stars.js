let rating = 0;

let songRating = 0;

let bookRating = 0;


const starsContainer =
document.getElementById("stars");


const songStarsContainer =
document.getElementById("songStars");


const bookStarsContainer =
document.getElementById("bookStars");


// long-press duration to trigger negative rating selection (ms)
const LONG_PRESS_MS = 1200;



function getRatingValue(type){


    if(type==="movie") return rating;

    if(type==="song") return songRating;

    if(type==="book") return bookRating;


    return 0;


}



function setRatingValue(type, value){


    if(type==="movie") rating = value;

    else if(type==="song") songRating = value;

    else if(type==="book") bookRating = value;


}




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


        // long-press only on the first star
        if(i===1){


            const startPress = function(){

                longPressFired = false;

                pressTimer = setTimeout(function(){

                    longPressFired = true;

                    container.classList.add("negative-mode");

                    updateStars(container,type);


                }, LONG_PRESS_MS);

            };


            const cancelPress = function(){

                clearTimeout(pressTimer);

            };


            star.addEventListener("mousedown", startPress);


            // preventDefault stops iOS from treating this as a
            // text-selection long-press instead of our custom gesture
            star.addEventListener("touchstart", function(e){

                e.preventDefault();

                startPress();

            }, {passive:false});


            star.addEventListener("mouseup", cancelPress);

            star.addEventListener("mouseleave", cancelPress);

            star.addEventListener("touchend", cancelPress);

            star.addEventListener("touchcancel", cancelPress);


        }



        star.onclick=function(){


            if(i===1 && longPressFired){

                longPressFired=false;

                return;

            }


            if(container.classList.contains("negative-mode")){


                setRatingValue(type, -i);


                container.classList.remove("negative-mode");


                updateStars(container,type);


                return;

            }


            setRatingValue(type, i);


            updateStars(container,type);


        };



        container.appendChild(star);


    }


}




function updateStars(container,type){


    if(!container) return;



    let value = getRatingValue(type);



    const stars =
    container.querySelectorAll("span");



    if(container.classList.contains("negative-mode")){


        stars.forEach(star=>{

            star.classList.remove("active");

            star.classList.add("negative-select");

        });


        return;

    }



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
"song"
);


createStars(
bookStarsContainer,
"book"
);