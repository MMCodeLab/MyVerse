let rating = 0;

let songRating = 0;


const starsContainer =
document.getElementById("stars");


const songStarsContainer =
document.getElementById("songStars");



function createStars(container, type){


    if(!container) return;


    container.innerHTML="";


    for(let i=1;i<=10;i++){


        let star =
        document.createElement("span");


        star.innerHTML="★";


        star.dataset.value=i;



        star.onclick=function(){


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



    stars.forEach((star,index)=>{


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