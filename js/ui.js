const container =
document.getElementById("movieContainer");


let showFavorites = false;

let currentFilter = "all";

let selectedDetailItem = null;



// ===============================
// HELPER VOTO (gestisce anche i negativi)
// ===============================


function formatRating(value){


    if(value < 0){

        return `<span class="icon-row negative-rating">${ICONS.star} ${value}</span>`;

    }


    return `<span class="icon-row">${ICONS.star} ${value}/10</span>`;


}




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



// riga extra con genere/regista/durata/cast, solo se il film ne ha almeno uno
let extraInfo = "";


if(item.type==="movie" && (item.genre || item.director || item.duration || item.cast)){


    extraInfo = `

    <div class="details-note">

        ${item.genre ? `<p class="icon-row">${ICONS.tag} ${item.genre}</p>` : ""}

        ${item.director ? `<p class="icon-row">${ICONS.clapper} Regia: ${item.director}</p>` : ""}

        ${item.duration ? `<p class="icon-row">${ICONS.clock} ${item.duration}</p>` : ""}

        ${item.cast ? `<p class="icon-row">${ICONS.users} ${item.cast}</p>` : ""}

    </div>

    `;


}




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



<h2 class="icon-row">

${item.type==="song" ? ICONS.music : ICONS.film}

${item.title}

</h2>



${item.artist ?

`

<p class="details-artist icon-row">

${ICONS.mic} ${item.artist}

</p>

`

:""}



<div class="details-rating">

${formatRating(item.rating)}

</div>



${item.where ?

`

<div class="details-pill">

${item.where}

</div>

`

:""}



${extraInfo}




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

<button class="spotify-btn icon-row">

${ICONS.play} Spotify

</button>

`

:""}



<button class="favorite-detail icon-row">

${item.favorite ? ICONS.heartFilled : ICONS.heart} Preferito

</button>



<button class="delete-detail icon-row">

${ICONS.trash} Elimina

</button>



</div>


</div>

`;





document.body.appendChild(modal);

if(item.trailer){

    const posterImg = modal.querySelector(".details-image");

    posterImg.classList.add("has-trailer");

    posterImg.onclick = () => {
        window.open(item.trailer, "_blank");
    };

}




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

${item.favorite ? ICONS.heartFilled : ICONS.heart}

</div>



<img src="${image}">



<div class="movie-info">


<h3 class="icon-row">

${ICONS.film} ${item.title}

</h3>



<p>

${formatRating(item.rating)}

</p>



${item.where ?

`<p>${item.where}</p>`

:""}



<button class="delete icon-row">

${ICONS.trash} Elimina

</button>


</div>


`;



}







// CARD CANZONE


else{



card.innerHTML = `



<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? ICONS.heartFilled : ICONS.heart}

</div>



<img src="${image}">



<div class="movie-info">


<h3 class="icon-row">

${ICONS.music} ${item.title}

</h3>



${item.artist ?

`

<p class="icon-row">

${ICONS.mic} ${item.artist}

</p>

`

:""}




<p>

${formatRating(item.rating)}

</p>




${item.spotify ?

`

<button class="spotify-btn icon-row">

${ICONS.play} Spotify

</button>

`

:""}



<button class="delete icon-row">

${ICONS.trash} Elimina

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
        <p class="icon-row">${ICONS.star} ${item.rating}/10</p>
        <p>${item.note || item.description || ""}</p>

        <button>+ Aggiungi</button>
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