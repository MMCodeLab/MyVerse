// ===============================
// MOVIES
// ===============================


const saveBtn =
document.getElementById("saveBtn");


const titleInput =
document.getElementById("titleInput");


const imageInput =
document.getElementById("imageInput");


const whereInput =
document.getElementById("whereInput");


const noteInput =
document.getElementById("noteInput");





saveBtn.onclick = async function(){


if(titleInput.value.trim()===""){

alert("Please enter a title");

return;

}



let imageURL =
"icons/icon-512.png";



if(imageInput.files[0]){

    imageURL =
    await convertImageToBase64(
    imageInput.files[0]
    );

} else if(typeof tmdbPosterUrl !== "undefined" && tmdbPosterUrl){

    imageURL = tmdbPosterUrl;

}




let item={


id:generateId(),


type:"movie",


title:titleInput.value,


image:imageURL,


rating:rating,


where:whereInput.value,


note:noteInput.value,


favorite:false,


date:Date.now(),


artist:"",


spotify:"",


genre:(typeof tmdbGenre !== "undefined") ? tmdbGenre : "",


director:(typeof tmdbDirector !== "undefined") ? tmdbDirector : "",


duration:(typeof tmdbDuration !== "undefined") ? tmdbDuration : "",


cast:(typeof tmdbCast !== "undefined") ? tmdbCast : "",


trailer:(typeof tmdbTrailerUrl !== "undefined") ? tmdbTrailerUrl : "",


author:"",


pages:""


};




loadMovies();

movies.push(item);


saveMovies();


renderMovies();



resetMovieForm();


document
.getElementById("modal")
.classList.add("hidden");

};






function resetMovieForm(){


titleInput.value="";

whereInput.value="";

noteInput.value="";

imageInput.value="";

rating=0;

updateStars();


if(typeof tmdbPosterUrl !== "undefined"){

    tmdbPosterUrl = "";
    tmdbGenre = "";
    tmdbDirector = "";
    tmdbDuration = "";
    tmdbCast = "";
    tmdbTrailerUrl = "";

}


const preview =
document.getElementById("moviePosterPreview");

if(preview){
    preview.src = "";
    preview.classList.add("hidden");
}


const genreField = document.getElementById("genreDisplay");
const directorField = document.getElementById("directorDisplay");
const durationField = document.getElementById("durationDisplay");
const castField = document.getElementById("castDisplay");

if(genreField) genreField.value = "";
if(directorField) directorField.value = "";
if(durationField) durationField.value = "";
if(castField) castField.value = "";


}







// ===============================
// SONGS
// ===============================



const saveSongBtn =
document.getElementById("saveSongBtn");


const songImageInput =
document.getElementById("songImageInput");


if(saveSongBtn){


saveSongBtn.onclick=async function(){


const title =
document.getElementById("songTitleInput").value;


const artist =
document.getElementById("artistInput").value;


const spotify =
document.getElementById("spotifyInput").value;


const note =
document.getElementById("songNoteInput").value;




if(title.trim()===""){


alert("Please enter the song title");


return;


}



let imageURL =
"icons/icon-512.png";


if(songImageInput && songImageInput.files[0]){

    imageURL =
    await convertImageToBase64(
    songImageInput.files[0]
    );

} else if(typeof spotifyCoverUrl !== "undefined" && spotifyCoverUrl){

    imageURL = spotifyCoverUrl;

}




let song={


id:generateId(),


type:"song",


title:title,


artist:artist,


spotify:spotify,


image:imageURL,


rating:songRating,


note:note,


where:"Spotify",


favorite:false,


date:Date.now(),


genre:"",


director:"",


duration:"",


cast:"",


trailer:"",


author:"",


pages:""



};




loadMovies();

movies.push(song);


saveMovies();


renderMovies();



resetSongForm();


document
.getElementById("songModal")
.classList.add("hidden");


};



}



function resetSongForm(){


document.getElementById("songTitleInput").value="";

document.getElementById("artistInput").value="";

document.getElementById("spotifyInput").value="";

document.getElementById("songNoteInput").value="";


if(songImageInput){

    songImageInput.value="";

}


if(typeof spotifyCoverUrl !== "undefined"){

    spotifyCoverUrl = "";

}


const preview =
document.getElementById("songCoverPreview");

if(preview){
    preview.src = "";
    preview.classList.add("hidden");
}


songRating=0;

updateStars(
songStarsContainer,
"song"
);


}







// ===============================
// BOOKS
// ===============================



const saveBookBtn =
document.getElementById("saveBookBtn");


const bookImageInput =
document.getElementById("bookImageInput");


if(saveBookBtn){


saveBookBtn.onclick=async function(){


const title =
document.getElementById("bookTitleInput").value;


const author =
document.getElementById("bookAuthorInput").value;


const pages =
document.getElementById("bookPagesInput").value;


const note =
document.getElementById("bookNoteInput").value;




if(title.trim()===""){


alert("Please enter the book title");


return;


}



let imageURL =
"icons/icon-512.png";


if(bookImageInput && bookImageInput.files[0]){

    imageURL =
    await convertImageToBase64(
    bookImageInput.files[0]
    );

} else if(typeof bookCoverUrl !== "undefined" && bookCoverUrl){

    imageURL = bookCoverUrl;

}




let book={


id:generateId(),


type:"book",


title:title,


author:author,


pages:pages,


image:imageURL,


rating:bookRating,


note:note,


where:"",


favorite:false,


date:Date.now(),


artist:"",


spotify:"",


genre:"",


director:"",


duration:"",


cast:"",


trailer:""



};




loadMovies();

movies.push(book);


saveMovies();


renderMovies();



resetBookForm();


document
.getElementById("bookModal")
.classList.add("hidden");


};



}



function resetBookForm(){


document.getElementById("bookTitleInput").value="";

document.getElementById("bookAuthorInput").value="";

document.getElementById("bookPagesInput").value="";

document.getElementById("bookNoteInput").value="";


if(bookImageInput){

    bookImageInput.value="";

}


if(typeof bookCoverUrl !== "undefined"){

    bookCoverUrl = "";

}


const preview =
document.getElementById("bookCoverPreview");

if(preview){
    preview.src = "";
    preview.classList.add("hidden");
}


bookRating=0;

updateStars(
bookStarsContainer,
"book"
);


}







// ===============================
// IMAGES
// ===============================


function convertImageToBase64(file){


return new Promise(resolve=>{


const reader =
new FileReader();



reader.onload=()=>{


resolve(reader.result);


};



reader.readAsDataURL(file);



});


}








// ===============================
// SEARCH
// ===============================


const searchInput =
document.getElementById("searchInput");



searchInput.addEventListener(
"input",
function(){



let text =
this.value.toLowerCase();



let result =
movies.filter(item=>{


return(


item.title
.toLowerCase()
.includes(text)



||



(item.artist || "")
.toLowerCase()
.includes(text)



||



(item.author || "")
.toLowerCase()
.includes(text)



||



(item.where || "")
.toLowerCase()
.includes(text)



||



(item.note || "")
.toLowerCase()
.includes(text)



);


});



renderMovies(result);



});









// ===============================
// FILTERS (also reset folder view)
// ===============================



document
.getElementById("favoriteMovies")
.onclick=function(){


if(typeof closeFolderView === "function") closeFolderView();


showFavorites=true;


currentFilter="all";


renderMovies();


};



document
.getElementById("allMovies")
.onclick=function(){


if(typeof closeFolderView === "function") closeFolderView();


showFavorites=false;


currentFilter="all";


renderMovies();


};



document
.getElementById("onlyMovies")
.onclick=function(){


if(typeof closeFolderView === "function") closeFolderView();


showFavorites=false;


currentFilter="movie";


renderMovies();


};



document
.getElementById("onlySongs")
.onclick=function(){


if(typeof closeFolderView === "function") closeFolderView();


showFavorites=false;


currentFilter="song";


renderMovies();


};



const onlyBooksBtn =
document.getElementById("onlyBooks");


if(onlyBooksBtn){


onlyBooksBtn.onclick=function(){


if(typeof closeFolderView === "function") closeFolderView();


showFavorites=false;


currentFilter="book";


renderMovies();


};


}