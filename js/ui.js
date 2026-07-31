const container =
document.getElementById("movieContainer");


let showFavorites=false;



function renderMovies(list=movies){


container.innerHTML="";



let filtered=list;



if(showFavorites){

filtered=
movies.filter(movie=>movie.favorite);

}



filtered.forEach((movie,index)=>{



let card=document.createElement("div");


card.className="movie-card glass";



card.innerHTML=`

<div class="favorite ${movie.favorite ? "active":""}">
${movie.favorite ? "❤️":"♡"}
</div>


<img src="${movie.image}">


<div class="movie-overlay">

<button class="details-btn">
Dettagli
</button>

</div>



<div class="movie-info">


<h3>
${movie.title}
</h3>


<p>
⭐ ${movie.rating}/10
</p>


<p>
${movie.where}
</p>


<p>
${movie.note || ""}
</p>


<button class="delete">
Elimina
</button>


</div>

`;





// preferiti

card.querySelector(".favorite")
.onclick=function(e){


e.stopPropagation();


movie.favorite=
!movie.favorite;


saveMovies();


renderMovies();



};




// elimina


card.querySelector(".delete")
.onclick=function(){


movies.splice(
movies.indexOf(movie),
1
);


saveMovies();

renderMovies();


};

card.querySelector(".details-btn")
.onclick=function(){


alert(
`
${movie.title}

⭐ Voto: ${movie.rating}/10

📺 Visto su: ${movie.where}

📝 ${movie.note || "Nessuna nota"}
`
);


};



container.appendChild(card);



});



updateStats();


}




function updateStats(){


const stats=
document.getElementById("stats");



if(movies.length===0){

stats.innerHTML=
"Nessun film aggiunto";

return;

}



let average=
movies.reduce(
(a,b)=>a+b.rating,0
)
/
movies.length;



stats.innerHTML=
`${movies.length} film • Media ⭐ ${average.toFixed(1)}/10`;

}
