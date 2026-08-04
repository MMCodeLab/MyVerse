let movies = [];


function loadMovies(){

    const saved =
    localStorage.getItem("movies");


    if(saved){

        movies =
        JSON.parse(saved);

    }

    else{

        movies = [];

    }



    movies = movies.map(item=>{

        return {

            type: item.type || "movie",

            title: item.title || "",

            image: item.image || "",

            rating: item.rating || 0,

            where: item.where || "",

            note: item.note || "",

            favorite: item.favorite || false,

            date: item.date || Date.now(),

            artist: item.artist || "",

            spotify: item.spotify || ""

        };

    });



}



function saveMovies(){

    localStorage.setItem(
        "movies",
        JSON.stringify(movies)
    );

}



loadMovies();