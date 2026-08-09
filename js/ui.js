const container =
document.getElementById("movieContainer");


let showFavorites = false;

let currentFilter = "all";

let selectedDetailItem = null;



// ===============================
// RATING HELPER (also handles negative values)
// ===============================


function formatRating(value){


    if(value < 0){

        return `<span class="icon-row negative-rating">${ICONS.star} ${value}</span>`;

    }


    return `<span class="icon-row">${ICONS.star} ${value}/10</span>`;


}




// ===============================
// DETAILS MODAL
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



// extra row with genre/director/duration/cast, movies only
let extraInfo = "";


if(item.type==="movie" && (item.genre || item.director || item.duration || item.cast)){


    extraInfo = `

    <div class="details-note">

        ${item.genre ? `<p class="icon-row">${ICONS.tag} ${item.genre}</p>` : ""}

        ${item.director ? `<p class="icon-row">${ICONS.clapper} Director: ${item.director}</p>` : ""}

        ${item.duration ? `<p class="icon-row">${ICONS.clock} ${item.duration}</p>` : ""}

        ${item.cast ? `<p class="icon-row">${ICONS.users} ${item.cast}</p>` : ""}

    </div>

    `;


}


// extra row with page count, books only
if(item.type==="book" && item.pages){


    extraInfo = `

    <div class="details-note">

        <p class="icon-row">${ICONS.book} ${item.pages} pages</p>

    </div>

    `;


}




let typeIcon = ICONS.film;

if(item.type==="song") typeIcon = ICONS.music;

if(item.type==="book") typeIcon = ICONS.book;




modal.innerHTML = `

<div class="details-box glass">


<button class="details-x">

×

</button>



<img 
src="${item.image}" 
class="details-image${item.trailer ? " has-trailer" : ""}"
onerror="this.src='icons/icon-512.png'"
>



<h2 class="icon-row">

${typeIcon}

${item.title}

</h2>



${item.artist ?

`

<p class="details-artist icon-row">

${ICONS.mic} ${item.artist}

</p>

`

:""}



${item.author ?

`

<p class="details-artist icon-row">

${ICONS.book} ${item.author}

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

No notes

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



<button class="share-detail icon-row">

${ICONS.share} Share

</button>



<button class="favorite-detail icon-row">

${item.favorite ? ICONS.heartFilled : ICONS.heart} Favorite

</button>



<button class="delete-detail icon-row">

${ICONS.trash} Delete

</button>



</div>


</div>

`;





document.body.appendChild(modal);





// trailer: click on the cover, only if available


if(item.trailer){


    modal
    .querySelector(".details-image")
    .onclick=function(){


        window.open(
        item.trailer,
        "_blank"
        );


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





// share


modal
.querySelector(".share-detail")
.onclick=function(){


generateShareCard(item);


};






// toggle favorite


modal
.querySelector(".favorite-detail")
.onclick=()=>{


item.favorite =
!item.favorite;


saveMovies();


renderMovies();



modal.remove();


};






// delete


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





// close X


modal
.querySelector(".details-x")
.onclick=()=>{


modal.remove();


};





// close by clicking outside


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






// FOLDER (if a folder is currently open, show only its items)


if(typeof currentFolderId !== "undefined" && currentFolderId){


    const activeFolder =
    folders.find(f => f.id === currentFolderId);


    if(activeFolder){


        filtered =
        filtered.filter(
        item => activeFolder.itemIds.includes(item.id)
        );


    }


}






// FAVORITES


if(showFavorites){


filtered =
filtered.filter(
item=>item.favorite
);


}





// FILTERS


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



if(currentFilter==="book"){


filtered =
filtered.filter(
item=>item.type==="book"
);


}







// SORTING


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






// MOVIE CARD


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

${ICONS.trash} Delete

</button>


</div>


`;



}







// SONG CARD


else if(item.type==="song"){



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

${ICONS.trash} Delete

</button>


</div>


`;



}







// BOOK CARD


else{



card.innerHTML = `



<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? ICONS.heartFilled : ICONS.heart}

</div>



<img src="${image}">



<div class="movie-info">


<h3 class="icon-row">

${ICONS.book} ${item.title}

</h3>



${item.author ?

`

<p class="icon-row">

${ICONS.book} ${item.author}

</p>

`

:""}




<p>

${formatRating(item.rating)}

</p>



${item.pages ?

`<p>${item.pages} pages</p>`

:""}



<button class="delete icon-row">

${ICONS.trash} Delete

</button>


</div>


`;



}








// FAVORITE TOGGLE


card
.querySelector(".favorite")
.onclick=function(e){


e.stopPropagation();



item.favorite =
!item.favorite;



saveMovies();


renderMovies();



};







// DELETE


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







// DETAILS


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
        note: "An emotional journey through space, time and feeling."
    },
    {
        title: "Inception",
        rating: 9,
        where: "Netflix",
        type: "movie",
        image: "images/inception.jpg",
        note: "A mind-bending thriller full of incredible ideas."
    },
    {
        title: "The Prestige",
        rating: 9,
        where: "Prime Video",
        type: "movie",
        image: "images/prestige.jpg",
        note: "A rivalry between two illusionists."
    },
    {
        title: "Oppenheimer",
        rating: 9,
        where: "Cinema",
        type: "movie",
        image: "images/oppenheimer.jpg",
        note: "The story behind the birth of the atomic bomb."
    },
    {
        title: "Dune",
        rating: 8,
        where: "Netflix",
        type: "movie",
        image: "images/dune.jpg",
        note: "Epic sci-fi set on the desert planet Arrakis."
    }
];


// ===============================
// STATS
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



let books =
movies.filter(
x=>x.type==="book"
).length;






if(movies.length===0){


stats.innerHTML =
"No reviews yet";


return;


}






stats.innerHTML =


`${films} movies • ${songs} songs • ${books} books`;



}








// ===============================
// START
// ===============================


// AUTO START

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

// inline properties to unlock smooth scrolling on mobile
box.style.display = "flex";
box.style.overflowX = "auto";
box.style.scrollBehavior = "smooth";
box.style.webkitOverflowScrolling = "touch";
box.style.gap = "20px";


box.innerHTML="";


recommendations.forEach((item,index)=>{


let card=document.createElement("div");


card.className="recommend-card glass";
card.style.flex = "0 0 auto"; // prevents cards from shrinking


card.innerHTML = `
    <img src="${item.image}">

    <div class="recommend-content">
        <h3>${item.title}</h3>
        <p class="icon-row">${ICONS.star} ${item.rating}/10</p>
        <p>${item.note || item.description || ""}</p>

        <button>+ Add</button>
    </div>
`;



card.querySelector("button").onclick=()=>{


movies.push({
    
        ...item,
        id: generateId(),
        type: "movie",
        favorite: false
    });

    card.querySelector("button").innerHTML = "✓ Added";

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