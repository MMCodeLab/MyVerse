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



if(titleInput.value===""){

alert("Inserisci un titolo");

return;

}



let imageURL = "";


if(imageInput.files[0]) {


    imageURL = await convertImageToBase64(imageInput.files[0]);


}

else {


    imageURL =
    "https://via.placeholder.com/300x450";


}




let movie={

title:titleInput.value,

image:imageURL,

rating:rating,

where:whereInput.value,

note:noteInput.value,

favorite:false

};


movies.push(movie);



saveMovies();


renderMovies();




titleInput.value="";

whereInput.value="";

noteInput.value="";

rating=0;

updateStars();



document.getElementById("modal")
.classList.add("hidden");


};




renderMovies();

function convertImageToBase64(file) {


    return new Promise((resolve)=>{


        const reader = new FileReader();


        reader.onload = () => {

            resolve(reader.result);

        };


        reader.readAsDataURL(file);


    });


}

const searchInput =
document.getElementById("searchInput");



searchInput.addEventListener(
"input",
function(){


let text=
this.value.toLowerCase();



let result =
movies.filter(movie=>

movie.title
.toLowerCase()
.includes(text)

);



renderMovies(result);



});





document
.getElementById("favoriteMovies")
.onclick=function(){


showFavorites=true;

renderMovies();


};




document
.getElementById("allMovies")
.onclick=function(){


showFavorites=false;

renderMovies();


};