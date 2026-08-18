// ===============================
// MODALS MYVERSE V3
// ===============================


const addBtn =
document.getElementById("addMovieBtn");


const typeModal =
document.getElementById("typeModal");


const movieModal =
document.getElementById("modal");


const songModal =
document.getElementById("songModal");


const bookModal =
document.getElementById("bookModal");



let currentType = "movie";



// ===============================
// OPEN ADD MENU
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
// CHOOSE MOVIE
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
// CHOOSE SONG
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
// CHOOSE BOOK
// ===============================


const bookChoiceBtn =
document.getElementById("bookChoice");


if(bookChoiceBtn){


    bookChoiceBtn.onclick=function(){

        currentType="book";

        typeModal.classList.add("hidden");

        bookModal.classList.remove("hidden");

        addBtn.classList.remove("active");

    };


}





// ===============================
// CHOOSE FOLDER
// ===============================


const folderChoiceBtn =
document.getElementById("folderChoice");


if(folderChoiceBtn){


    folderChoiceBtn.onclick=function(){

        typeModal.classList.add("hidden");

        addBtn.classList.remove("active");


        if(typeof openFolderCreation === "function"){

            openFolderCreation();

        }

    };


}





// ===============================
// CLOSE BUTTONS (also reset the form, so leftover
// data from a recommendation prefill doesn't stick around)
// ===============================



document
.getElementById("closeBtn")
.onclick=function(){

    movieModal.classList.add("hidden");

    if(typeof resetMovieForm === "function") resetMovieForm();

};



document
.getElementById("closeSongBtn")
.onclick=function(){

    songModal.classList.add("hidden");

    if(typeof resetSongForm === "function") resetSongForm();

};



const closeBookBtn =
document.getElementById("closeBookBtn");


if(closeBookBtn){


    closeBookBtn.onclick=function(){

        bookModal.classList.add("hidden");

        if(typeof resetBookForm === "function") resetBookForm();

    };


}



function closeAllModals(){


    typeModal.classList.add("hidden");

    movieModal.classList.add("hidden");

    songModal.classList.add("hidden");

    if(bookModal){
        bookModal.classList.add("hidden");
    }

    if(typeof settingsModal !== "undefined"){
        settingsModal.classList.add("hidden");
    }


    const folderItemsModal =
    document.getElementById("folderItemsModal");

    if(folderItemsModal){
        folderItemsModal.classList.add("hidden");
    }


    addBtn.classList.remove("active");


}





// close by clicking outside


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
const genreListEl = document.getElementById("genreList");
if(
sidebar.classList.contains("open")
&&
!sidebar.contains(e.target)
&&
!menuBtn.contains(e.target)
&&
!(genreListEl && genreListEl.contains(e.target))
){
sidebar.classList.remove("open");
if(typeof hideGenreList === "function"){
hideGenreList();
}
}
});