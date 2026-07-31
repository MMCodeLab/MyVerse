const container =
document.getElementById("movieContainer");



function renderMovies(){


container.innerHTML="";


movies.forEach((movie,index)=>{


let card=document.createElement("div");


card.className="movie-card glass";



card.innerHTML=`

<img src="${movie.image}">


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



card.querySelector(".delete")
.onclick=function(){


movies.splice(index,1);


saveMovies();


renderMovies();


};



container.appendChild(card);



});



updateStats();


}





function updateStats(){


const stats=document.getElementById("stats");



if(movies.length===0){

stats.innerHTML=
"Nessun film aggiunto";

return;

}



let average =
movies.reduce(
(a,b)=>a+b.rating,0
)
/
movies.length;



stats.innerHTML=

`${movies.length} film • Media voto ${average.toFixed(1)}/10`;


}