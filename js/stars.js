let rating = 0;


const starsContainer = document.getElementById("stars");


function createStars(){


    starsContainer.innerHTML="";


    for(let i=1;i<=10;i++){


        let star=document.createElement("span");

        star.innerHTML="★";

        star.dataset.value=i;


        star.onclick=function(){

            rating=i;

            updateStars();

        };


        starsContainer.appendChild(star);

    }


}



function updateStars(){


    const stars=document.querySelectorAll("#stars span");


    stars.forEach((star,index)=>{


        if(index < rating){

            star.classList.add("active");

        }

        else{

            star.classList.remove("active");

        }


    });


}



createStars();