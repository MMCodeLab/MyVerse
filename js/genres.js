// ===============================
// GENRE SUB-LIST (sidebar) - MYVERSE
// ===============================


let currentGenreFilter = null;


function collectGenres(){

    const set = new Set();

    movies.filter(m => m.type === "movie" && m.genre).forEach(m => {

        m.genre.split(",").map(g => g.trim()).filter(Boolean).forEach(g => set.add(g));

    });

    return Array.from(set).sort();

}



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


    collectGenres().forEach(genre => {

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