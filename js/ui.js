const container = document.getElementById("movieContainer");

let showFavorites = false;



function renderMovies(list = movies) {


    container.innerHTML = "";


    let filtered = [...list];



    // FILTRO PREFERITI

    if(showFavorites){

        filtered =
        filtered.filter(movie => movie.favorite);

    }



    // ORDINAMENTO

    if(typeof sortMovies === "function"){

        filtered = sortMovies(filtered);

    }




    // LAYOUT SCELTO

    let layout =
    localStorage.getItem("layout")
    || "grid";




    if(layout === "list"){

        container.classList.add("list-layout");

    }

    else{

        container.classList.remove("list-layout");

    }






    filtered.forEach((movie)=>{


        let card =
        document.createElement("div");



        card.className =
        "movie-card glass";




        card.innerHTML = `


        <div class="favorite ${movie.favorite ? "active" : ""}">

        ${movie.favorite ? "❤️" : "♡"}

        </div>



        <img src="${movie.image}">



        <div class="movie-info">


        <h3>
        ${movie.title}
        </h3>


        <p>
        ⭐ ${movie.rating}/10
        </p>


        <p>
        ${movie.where || ""}
        </p>


        <p>
        ${movie.note || ""}
        </p>



        <button class="delete">

        Elimina

        </button>


        </div>


        `;




        // PREFERITO

        card.querySelector(".favorite")
        .onclick=function(e){


            e.stopPropagation();


            movie.favorite =
            !movie.favorite;


            saveMovies();


            renderMovies();


        };





        // ELIMINA

        card.querySelector(".delete")
        .onclick=function(e){


            e.stopPropagation();


            movies.splice(
            movies.indexOf(movie),
            1
            );


            saveMovies();


            renderMovies();


        };





        // DETTAGLI

        card.onclick=function(e){


            if(
            e.target.closest(".delete") ||
            e.target.closest(".favorite")
            )

            return;



            alert(

`${movie.title}


⭐ Voto: ${movie.rating}/10


📺 Visto su: ${movie.where || "Non specificato"}


📝 ${movie.note || "Nessuna nota"}`

            );


        };




        container.appendChild(card);


    });



    updateStats();


}






function updateStats(){


const stats =
document.getElementById("stats");



if(movies.length === 0){


stats.innerHTML =
"Nessun film aggiunto";


return;


}




let average =

movies.reduce(
(a,b)=>a+b.rating,
0
)

/

movies.length;




stats.innerHTML =

`${movies.length} film • Media ⭐ ${average.toFixed(1)}/10`;



}