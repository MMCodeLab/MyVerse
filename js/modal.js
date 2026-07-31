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