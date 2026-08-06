const container =
document.getElementById("movieContainer");


let showFavorites = false;

let currentFilter = "all";

let selectedDetailItem = null;




// ===============================
// DETTAGLI MODAL
// ===============================


function openDetails(item){


selectedDetailItem = item;



let modal =
document.createElement("div");


modal.className =
"modal details-modal";



let image =
item.image ||
"https://via.placeholder.com/300";



modal.innerHTML = `

<div class="details-box glass">


<button class="details-x">

×

</button>



<img 
src="${item.image}" 
class="details-image"
onerror="this.src='icons/icon-512.png'"
>



<h2>

${item.type==="song" ? "🎵" : "🎬"}

${item.title}

</h2>



${item.artist ?

`

<p class="details-artist">

🎤 ${item.artist}

</p>

`

:""}



<div class="details-rating">

⭐ ${item.rating}/10

</div>



${item.where ?

`

<div class="details-pill">

${item.where}

</div>

`

:""}





${item.note ?

`

<div class="details-note">

${item.note}

</div>

`

:

`

<div class="details-note">

Nessuna nota

</div>

`

}




<div class="details-buttons">


${item.spotify ?

`

<button class="spotify-btn">

▶ Spotify

</button>

`

:""}



<button class="favorite-detail">

${item.favorite ? "❤️ Preferito":"♡ Preferito"}

</button>



<button class="delete-detail">

🗑 Elimina

</button>



</div>


</div>

`;





document.body.appendChild(modal);





// Spotify

if(item.spotify){


modal
.querySelector(".spotify-btn")
.onclick=()=>{


window.open(
item.spotify,
"_blank"
);


};


}






// preferito dettaglio


modal
.querySelector(".favorite-detail")
.onclick=()=>{


item.favorite =
!item.favorite;


saveMovies();


renderMovies();



modal.remove();


};






// elimina dettaglio


modal
.querySelector(".delete-detail")
.onclick=()=>{


movies.splice(
movies.indexOf(item),
1
);



saveMovies();


renderMovies();


modal.remove();


};





// chiudi X


modal
.querySelector(".details-x")
.onclick=()=>{


modal.remove();


};





// chiudi cliccando fuori


modal.onclick=(e)=>{


if(e.target===modal){

modal.remove();

}


};





}







// ===============================
// RENDER
// ===============================


function renderMovies(list=movies){



container.innerHTML="";





// LAYOUT


let layout =
localStorage.getItem("layout")
|| "grid";



if(layout==="list"){

container.classList.add(
"list-layout"
);

}

else{


container.classList.remove(
"list-layout"
);


}





let filtered=[...list];






// FAVORITI


if(showFavorites){


filtered =
filtered.filter(
item=>item.favorite
);


}





// FILTRI


if(currentFilter==="movie"){


filtered =
filtered.filter(
item=>item.type==="movie"
);


}





if(currentFilter==="song"){


filtered =
filtered.filter(
item=>item.type==="song"
);


}







// ORDINAMENTO


if(typeof sortMovies==="function"){


filtered =
sortMovies(filtered);


}







filtered.forEach(item=>{





let card =
document.createElement("div");



card.className =
"movie-card glass";





let image =
item.image ||
"https://via.placeholder.com/300";






// CARD FILM


if(item.type==="movie"){



card.innerHTML = `


<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? "❤️":"♡"}

</div>



<img src="${image}">



<div class="movie-info">


<h3>

🎬 ${item.title}

</h3>



<p>

⭐ ${item.rating}/10

</p>



${item.where ?

`<p>${item.where}</p>`

:""}



<button class="delete">

Elimina

</button>


</div>


`;



}







// CARD CANZONE


else{



card.innerHTML = `



<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? "❤️":"♡"}

</div>



<img src="${image}">



<div class="movie-info">


<h3>

🎵 ${item.title}

</h3>



${item.artist ?

`

<p>

🎤 ${item.artist}

</p>

`

:""}




<p>

⭐ ${item.rating}/10

</p>




${item.spotify ?

`

<button class="spotify-btn">

▶ Spotify

</button>

`

:""}



<button class="delete">

Elimina

</button>


</div>


`;



}








// PREFERITO


card
.querySelector(".favorite")
.onclick=function(e){


e.stopPropagation();



item.favorite =
!item.favorite;



saveMovies();


renderMovies();



};







// ELIMINA


card
.querySelector(".delete")
.onclick=function(e){



e.stopPropagation();



movies.splice(
movies.indexOf(item),
1
);



saveMovies();


renderMovies();



};







// SPOTIFY


let spotifyBtn =
card.querySelector(".spotify-btn");



if(spotifyBtn){



spotifyBtn.onclick=function(e){


e.stopPropagation();



window.open(
item.spotify,
"_blank"
);



};


}







// DETTAGLI


card.onclick=function(e){



if(

e.target.closest(".delete")

||

e.target.closest(".favorite")

||

e.target.closest(".spotify-btn")

)

return;




openDetails(item);



};







container.appendChild(card);



});





updateStats();



}



const recommendations = [
    {
        title: "Interstellar",
        rating: 10,
        where: "Cinema",
        type: "movie",
        image: "images/interstellar.jpg",
        note: "Un viaggio emozionante tra spazio, tempo e sentimenti."
    },
    {
        title: "Inception",
        rating: 9,
        where: "Netflix",
        type: "movie",
        image: "images/inception.jpg",
        note: "Un thriller mentale pieno di idee incredibili."
    },
    {
        title: "The Prestige",
        rating: 9,
        where: "Prime Video",
        type: "movie",
        image: "images/prestige.jpg",
        note: "Una sfida tra due illusionisti."
    },
    {
        title: "Oppenheimer",
        rating: 9,
        where: "Cinema",
        type: "movie",
        image: "images/oppenheimer.jpg",
        note: "La storia della nascita della bomba atomica."
    },
    {
        title: "Dune",
        rating: 8,
        where: "Netflix",
        type: "movie",
        image: "images/dune.jpg",
        note: "Fantascienza epica ambientata su Arrakis."
    }
];


// ===============================
// STATISTICHE
// ===============================


function updateStats(){



const stats =
document.getElementById("stats");



let films =
movies.filter(
x=>x.type==="movie"
).length;




let songs =
movies.filter(
x=>x.type==="song"
).length;






if(movies.length===0){


stats.innerHTML =
"Nessuna recensione aggiunta";


return;


}






stats.innerHTML =


`${films} film • ${songs} canzoni`;



}








// ===============================
// START
// ===============================


// AVVIO AUTOMATICO

document.addEventListener(
"DOMContentLoaded",
()=>{

loadMovies();

renderRecommendations();

renderMovies();

});

function renderRecommendations(){

    function autoScrollRecommendations(){

const box =
document.getElementById("recommendedContainer");


if(!box) return;


let speed = 0.5;


function move(){

box.scrollLeft += speed;


if(box.scrollLeft >= box.scrollWidth - box.clientWidth){

box.scrollLeft = 0;

}


requestAnimationFrame(move);

}


move();

}


document.addEventListener(
"DOMContentLoaded",
()=>{

setTimeout(
autoScrollRecommendations,
1000
);

});


const box =
document.getElementById(
"recommendedContainer"
);


if(!box) return;

// Aggiunte proprietà inline per sbloccare lo scorrimento fluido da mobile
box.style.display = "flex";
box.style.overflowX = "auto";
box.style.scrollBehavior = "smooth";
box.style.webkitOverflowScrolling = "touch";
box.style.gap = "20px";


box.innerHTML="";


recommendations.forEach((item,index)=>{


let card=document.createElement("div");


card.className="recommend-card glass";
card.style.flex = "0 0 auto"; // Impedisce alle card di restringersi


card.innerHTML = `
    <img src="${item.image}">

    <div class="recommend-content">
        <h3>${item.title}</h3>
        <p>⭐ ${item.rating}/10</p>
        <p>${item.note || item.description || ""}</p>

        <button>＋ Aggiungi</button>
    </div>
`;



card.querySelector("button").onclick=()=>{


movies.push({
    
        ...item,
        type: "movie",
        favorite: false
    });

    card.querySelector("button").innerHTML = "✓ Aggiunto";

    saveMovies();
    renderMovies();

    card.style.transform = "scale(.75) translateY(40px)";
    card.style.opacity = "0";
    card.style.filter = "blur(10px)";

    setTimeout(() => {
        card.remove();
    }, 500);

};



box.appendChild(card);



});


}