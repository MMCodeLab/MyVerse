// ===============================
// GENRE SUB-LIST (sidebar) - MYVERSE
// fixed list, always available even with zero movies
// ===============================


let currentGenreFilter = null;


const MOVIE_GENRES = [
    "Action","Adventure","Animation","Comedy","Crime",
    "Drama","Fantasy","Horror","Mystery","Romance",
    "Science Fiction","Thriller"
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

        sidebar.classList.remove("open");

        hideGenreList();

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

            sidebar.classList.remove("open");

            hideGenreList();

        };

        list.appendChild(btn);

    });

}



function showGenreList(){

    const list = document.getElementById("genreList");

    if(!list) return;

    list.classList.remove("hidden");

    renderGenreList();

    const btn = document.getElementById("onlyMovies");

    if(btn){

        const rect = btn.getBoundingClientRect();

        list.style.top = (rect.bottom + 8) + "px";

        list.style.left = rect.left + "px";

    }

}



function hideGenreList(){

    const list = document.getElementById("genreList");

    if(list) list.classList.add("hidden");

}