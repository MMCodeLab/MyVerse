const container =
document.getElementById("movieContainer");



let showFavorites = false;

let currentFilter = "all";





// ===============================
// DETTAGLI MODAL
// ===============================


function openDetails(item){


let modal =
document.createElement("div");


modal.className =
"modal details-modal";



let image =
item.image ||
"https://via.placeholder.com/300";



modal.innerHTML = `

<div class="details-box glass">


<img src="${image}" class="details-image">


<h2>

${item.type==="song" ? "🎵" : "🎬"}

${item.title}

</h2>


${item.artist ? 

`<p>🎤 ${item.artist}</p>` 

:""}



<p>

⭐ ${item.rating}/10

</p>



${item.where ?

`<p>📺 ${item.where}</p>`

:""}



${item.note ?

`

<div class="details-note">

${item.note}

</div>

`

:""}



<div class="details-buttons">


${item.spotify ?

`

<button class="spotify-btn">

▶ Apri Spotify

</button>

`

:""}


<button class="close-details">

Chiudi

</button>


</div>



</div>

`;




document.body.appendChild(modal);



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




modal
.querySelector(".close-details")
.onclick=()=>{

modal.remove();

};




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




// layout


let layout =
localStorage.getItem("layout")
|| "grid";



if(layout==="list"){

container.classList.add("list-layout");

}
else{

container.classList.remove("list-layout");

}







let filtered=[...list];





if(showFavorites){

filtered =
filtered.filter(
item=>item.favorite
);

}





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





card.innerHTML=`

<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? "❤️":"♡"}

</div>


<img src="${image}">


<div class="movie-info">


<h3>

${item.type==="song" ? "🎵":"🎬"}

${item.title}

</h3>


${item.artist ?

`<p>${item.artist}</p>`

:""}


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






// preferito


card
.querySelector(".favorite")
.onclick=function(e){


e.stopPropagation();


item.favorite =
!item.favorite;


saveMovies();

renderMovies();


};







// elimina


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







// dettagli


card.onclick=function(e){


if(
e.target.closest(".delete")
||
e.target.closest(".favorite")
)

return;



openDetails(item);


};





container.appendChild(card);



});




updateStats();



}









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

stats.innerHTML=
"Nessuna recensione aggiunta";

return;

}



stats.innerHTML=

`${films} film • ${songs} canzoni`;

}







// AVVIO AUTOMATICO

document.addEventListener(
"DOMContentLoaded",
()=>{

loadMovies();

renderMovies();

});