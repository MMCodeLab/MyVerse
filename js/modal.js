// ===============================
// MODALI MYVERSE V3
// ===============================


const addBtn =
document.getElementById("addMovieBtn");


const typeModal =
document.getElementById("typeModal");


const movieModal =
document.getElementById("modal");


const songModal =
document.getElementById("songModal");



let currentType = "movie";



// ===============================
// APERTURA MENU AGGIUNTA
// ===============================


addBtn.onclick=function(){


    const opened =
    !typeModal.classList.contains("hidden");


    if(opened){

        closeAllModals();

        addBtn.classList.remove("active");

    }

    else{

        typeModal.classList.remove("hidden");

        addBtn.classList.add("active");

    }


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

    addBtn.classList.remove("active");

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

    addBtn.classList.remove("active");

};






// ===============================
// CHIUSURE
// ===============================



document
.getElementById("closeBtn")
.onclick=function(){

    movieModal.classList.add("hidden");

};



document
.getElementById("closeSongBtn")
.onclick=function(){

    songModal.classList.add("hidden");

};



function closeAllModals(){


    typeModal.classList.add("hidden");

    movieModal.classList.add("hidden");

    songModal.classList.add("hidden");

    if(typeof settingsModal !== "undefined"){
        settingsModal.classList.add("hidden");
    }


    addBtn.classList.remove("active");


}





// chiusura cliccando fuori


document.querySelectorAll(".modal")
.forEach(modal=>{


modal.addEventListener(
"click",
function(e){


if(e.target===modal){

    closeAllModals();

    addBtn.classList.remove("active");

}


});


});





// ===============================
// SIDEBAR
// ===============================


const menuBtn =
document.getElementById("menuBtn");


const sidebar =
document.getElementById("sidebar");



menuBtn.onclick=function(){


sidebar.classList.toggle("open");


};





document.addEventListener(
"click",
function(e){


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
// FILTRI
// ===============================


document
.getElementById("allMovies")
.onclick=function(){

showFavorites=false;

currentFilter="all";

renderMovies();

sidebar.classList.remove("open");

};





document
.getElementById("onlyMovies")
.onclick=function(){

showFavorites=false;

currentFilter="movie";

renderMovies();

sidebar.classList.remove("open");

};





document
.getElementById("onlySongs")
.onclick=function(){

showFavorites=false;

currentFilter="song";

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