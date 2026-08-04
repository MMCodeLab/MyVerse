const container =
document.getElementById("movieContainer");


let showFavorites=false;


let currentFilter="all";





function renderMovies(list=movies){



container.innerHTML="";



let filtered=[...list];




if(showFavorites){


filtered =
filtered.filter(item=>item.favorite);


}




if(currentFilter==="movie"){


filtered =
filtered.filter(item=>item.type==="movie");


}




if(currentFilter==="song"){


filtered =
filtered.filter(item=>item.type==="song");


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





if(item.type==="song"){



card.innerHTML=`

<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? "❤️":"♡"}

</div>


<img src="${image}">



<div class="movie-info">


<h3>
🎵 ${item.title}
</h3>



<p>

${item.artist || ""}

</p>



<p>

⭐ ${item.rating}/10

</p>



<button class="spotify-btn">

▶ Spotify

</button>



<button class="delete">

Elimina

</button>



</div>

`;





card.querySelector(".spotify-btn")
.onclick=function(e){


e.stopPropagation();


if(item.spotify){

window.open(
item.spotify,
"_blank"
);

}


};





}

else{


card.innerHTML=`

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



<p>

${item.where || ""}

</p>



<p>

${item.note || ""}

</p>



<button class="delete">

Elimina

</button>


</div>


`;

}



card.querySelector(".favorite")
.onclick=function(e){


e.stopPropagation();


item.favorite =
!item.favorite;


saveMovies();


renderMovies();


};




card.querySelector(".delete")
.onclick=function(e){


e.stopPropagation();



movies.splice(
movies.indexOf(item),
1
);



saveMovies();


renderMovies();


};


card.onclick=function(e){


if(
e.target.closest(".delete") ||
e.target.closest(".favorite") ||
e.target.closest(".spotify-btn")
)

return;



if(item.type==="song"){


alert(

`${item.title}


🎤 Artista:
${item.artist || "Sconosciuto"}


⭐ Voto:
${item.rating}/10


🎵 Spotify:
${item.spotify || "Nessun link"}


📝 Nota:
${item.note || "Nessuna nota"}`

);


}

else{


alert(

`${item.title}


⭐ Voto:
${item.rating}/10


📺 Dove:
${item.where || "Non specificato"}


📝 Nota:
${item.note || "Nessuna nota"}`

);


}


};

container.appendChild(card);



});



updateStats();


}








function updateStats(){



const stats =
document.getElementById("stats");



let films =
movies.filter(x=>x.type==="movie").length;



let songs =
movies.filter(x=>x.type==="song").length;





if(movies.length===0){


stats.innerHTML=
"Nessuna recensione aggiunta";


return;


}





stats.innerHTML =

`${films} film • ${songs} canzoni`;



}