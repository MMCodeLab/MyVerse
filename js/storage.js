let movies =
JSON.parse(localStorage.getItem("movies"))
|| [];



function saveMovies(){

localStorage.setItem(
"movies",
JSON.stringify(movies)
);

}