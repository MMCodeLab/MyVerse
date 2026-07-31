const modal =
document.getElementById("modal");


const addBtn =
document.getElementById("addMovieBtn");


const closeBtn =
document.getElementById("closeBtn");



addBtn.onclick=function(){

    modal.classList.remove("hidden");

};



closeBtn.onclick=function(){

    modal.classList.add("hidden");

};

const menuBtn =
document.getElementById("menuBtn");


const sidebar =
document.getElementById("sidebar");



menuBtn.onclick=function(){


sidebar.classList.toggle("open");


};

// chiude il menu quando clicchi su Tutti o Preferiti

document
.getElementById("allMovies")
.onclick=function(){

    sidebar.classList.remove("open");

};


document
.getElementById("favoriteMovies")
.onclick=function(){

    sidebar.classList.remove("open");

};

document.addEventListener("click", function(e){


    if(
        sidebar.classList.contains("open") &&
        !sidebar.contains(e.target) &&
        !menuBtn.contains(e.target)
    ){

        sidebar.classList.remove("open");

    }


});