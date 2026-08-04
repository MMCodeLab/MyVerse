// ===============================
// MODALI
// ===============================


const addBtn =
document.getElementById("addMovieBtn");


const typeModal =
document.getElementById("typeModal");


const movieModal =
document.getElementById("modal");


const songModal =
document.getElementById("songModal");



// tipo corrente
currentType = "movie";




// ===============================
// APRI SCELTA TIPO
// ===============================


addBtn.onclick=function(){


    typeModal.classList.remove("hidden");


};




// ===============================
// SCELTA FILM
// ===============================


document
.getElementById("movieChoice")
.onclick=function(){


    currentType="movie";


    typeModal.classList.add("hidden");


    movieModal.classList.remove("hidden");


};




// ===============================
// SCELTA CANZONE
// ===============================


document
.getElementById("songChoice")
.onclick=function(){


    currentType="song";


    typeModal.classList.add("hidden");


    songModal.classList.remove("hidden");


};




// ===============================
// CHIUSURA FILM
// ===============================


document
.getElementById("closeBtn")
.onclick=function(){


    movieModal.classList.add("hidden");


};




// ===============================
// CHIUSURA CANZONE
// ===============================


document
.getElementById("closeSongBtn")
.onclick=function(){


    songModal.classList.add("hidden");


};





// ===============================
// MENU LATERALE
// ===============================


const menuBtn =
document.getElementById("menuBtn");


const sidebar =
document.getElementById("sidebar");



menuBtn.onclick=function(){


    sidebar.classList.toggle("open");


};





document.addEventListener("click",function(e){


    if(

        sidebar.classList.contains("open")

        &&

        !sidebar.contains(e.target)

        &&

        !menuBtn.contains(e.target)

    ){


        sidebar.classList.remove("open");


    }


});




// ===============================
// FILTRI MENU
// ===============================



document
.getElementById("allMovies")
.onclick=function(){


    currentFilter="all";

    showFavorites=false;

    renderMovies();


    sidebar.classList.remove("open");


};




document
.getElementById("onlyMovies")
.onclick=function(){


    currentFilter="movie";

    showFavorites=false;

    renderMovies();


    sidebar.classList.remove("open");


};




document
.getElementById("onlySongs")
.onclick=function(){


    currentFilter="song";

    showFavorites=false;

    renderMovies();


    sidebar.classList.remove("open");


};





document
.getElementById("favoriteMovies")
.onclick=function(){


    showFavorites=true;


    currentFilter="all";


    renderMovies();


    sidebar.classList.remove("open");


};