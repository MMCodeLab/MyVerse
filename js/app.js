// ===============================
// FILM
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

alert("Inserisci un titolo");

return;

}



let imageURL =
"https://via.placeholder.com/300x450";



if(imageInput.files[0]){


imageURL =
await convertImageToBase64(
imageInput.files[0]
);


}




let item={


type:"movie",


title:titleInput.value,


image:imageURL,


rating:rating,


where:whereInput.value,


note:noteInput.value,


favorite:false,


date:Date.now(),


artist:"",


spotify:""


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


}







// ===============================
// CANZONI
// ===============================



const saveSongBtn =
document.getElementById("saveSongBtn");


if(saveSongBtn){


saveSongBtn.onclick=function(){


const title =
document.getElementById("songTitleInput").value;


const artist =
document.getElementById("artistInput").value;


const spotify =
document.getElementById("spotifyInput").value;


const note =
document.getElementById("songNoteInput").value;




if(title.trim()===""){


alert("Inserisci il titolo della canzone");


return;


}





let song={


type:"song",


title:title,


artist:artist,


spotify:spotify,


image:"https://via.placeholder.com/300",


rating:songRating,


note:note,


where:"Spotify",


favorite:false,


date:Date.now()



};




loadMovies();

movies.push(song);


saveMovies();


renderMovies();





document
.getElementById("songModal")
.classList.add("hidden");



document.getElementById("songTitleInput").value="";

document.getElementById("artistInput").value="";

document.getElementById("spotifyInput").value="";

document.getElementById("songNoteInput").value="";


rating=0;

updateStars();

songRating=0;

updateStars(
songStarsContainer,
"song"
);songRating=0;

updateStars(
songStarsContainer,
"song"
);



};



}







// ===============================
// IMMAGINI
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
// RICERCA
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
// FILTRI
// ===============================



document
.getElementById("favoriteMovies")
.onclick=function(){


showFavorites=true;


currentFilter="all";


renderMovies();


};



document
.getElementById("allMovies")
.onclick=function(){


showFavorites=false;


currentFilter="all";


renderMovies();


};



document
.getElementById("onlyMovies")
.onclick=function(){


showFavorites=false;


currentFilter="movie";


renderMovies();


};



document
.getElementById("onlySongs")
.onclick=function(){


showFavorites=false;


currentFilter="song";


renderMovies();


};