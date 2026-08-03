let movies =
JSON.parse(localStorage.getItem("movies"))
|| [];



function saveMovies(){

    localStorage.setItem(
        "movies",
        JSON.stringify(movies)
    );

}



// aggiorna vecchi film

movies = movies.map(movie=>{


    return {

        ...movie,

        date:
        movie.date || Date.now(),

        favorite:
        movie.favorite || false

    };


});


saveMovies();