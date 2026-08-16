// ===============================
// GENRE SUB-LIST (sidebar) - MYVERSE
// fixed list, always available even with zero movies
// ===============================


let currentGenreFilter = null;


const MOVIE_GENRES = [
    "Action","Adventure","Animation","Comedy","Crime",
    "Documentary","Drama","Family","Fantasy","History",
    "Horror","Music","Mystery","Romance","Science Fiction",
    "TV Movie","Thriller","War","Western"
];



function renderGenreList(){

    const list = document.getElementById("genreList");

    if(!list) return;

    list.innerHTML = "";


    const allBtn = document.createElement("button");

    allBtn.textContent = "All";

    allBtn.className = "genre-item" + (currentGenreFilter === null ? " active" : "");

    allBtn.onclick = function(){

        currentGenreFilter = null;

        renderGenreList();

        renderMovies();

    };

    list.appendChild(allBtn);


    MOVIE_GENRES.forEach(genre => {

        const btn = document.createElement("button");

        btn.textContent = genre;

        btn.className = "genre-item" + (currentGenreFilter === genre ? " active" : "");

        btn.onclick = function(){

            currentGenreFilter = genre;

            renderGenreList();

            renderMovies();

        };

        list.appendChild(btn);

    });

}



function showGenreList(){

    const list = document.getElementById("genreList");

    if(list) list.classList.remove("hidden");

    renderGenreList();

}



function hideGenreList(){

    const list = document.getElementById("genreList");

    if(list) list.classList.add("hidden");

}