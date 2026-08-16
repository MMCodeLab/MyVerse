const container =
document.getElementById("movieContainer");


let showFavorites = false;

let currentFilter = "all";

let selectedDetailItem = null;



// ===============================
// RATING HELPER (also handles negative values)
// ===============================


function formatRating(value){


    if(value < 0){

        return `<span class="icon-row negative-rating">${ICONS.star} ${value}</span>`;

    }


    return `<span class="icon-row">${ICONS.star} ${value}/10</span>`;


}




// ===============================
// DETAILS MODAL
// ===============================


function openDetails(item){


selectedDetailItem = item;



let modal =
document.createElement("div");


modal.className =
"modal details-modal";



let image =
item.image ||
"icons/icon-512.png";



// extra row with genre/director/duration/cast, movies only
let extraInfo = "";


if(item.type==="movie" && (item.genre || item.director || item.duration || item.cast)){


    extraInfo = `

    <div class="details-note">

        ${item.genre ? `<p class="icon-row">${ICONS.tag} ${item.genre}</p>` : ""}

        ${item.director ? `<p class="icon-row">${ICONS.clapper} ${t("director_label")} ${item.director}</p>` : ""}

        ${item.duration ? `<p class="icon-row">${ICONS.clock} ${item.duration}</p>` : ""}

        ${item.cast ? `<p class="icon-row">${ICONS.users} ${item.cast}</p>` : ""}

    </div>

    `;


}


// extra row with page count, books only
if(item.type==="book" && item.pages){


    extraInfo = `

    <div class="details-note">

        <p class="icon-row">${ICONS.book} ${item.pages} ${t("pages_label")}</p>

    </div>

    `;


}




let typeIcon = ICONS.film;

if(item.type==="song") typeIcon = ICONS.music;

if(item.type==="book") typeIcon = ICONS.book;




modal.innerHTML = `

<div class="details-box glass">


<button class="details-x">

×

</button>



<img 
src="${item.image}" 
class="details-image${item.trailer ? " has-trailer" : ""}"
onerror="this.src='icons/icon-512.png'"
>



<h2 class="icon-row">

${typeIcon}

${item.title}

</h2>



${item.artist ?

`

<p class="details-artist icon-row">

${ICONS.mic} ${item.artist}

</p>

`

:""}



${item.author ?

`

<p class="details-artist icon-row">

${ICONS.book} ${item.author}

</p>

`

:""}



<div class="details-rating">

${formatRating(item.rating)}

</div>



${item.where ?

`

<div class="details-pill">

${formatWhereLabel(item.where)}

</div>

`

:""}



${extraInfo}




${item.note ?

`

<div class="details-note">

${item.note}

</div>

`

:

`

<div class="details-note">

${t("no_notes")}

</div>

`

}




<div class="details-buttons">


${item.spotify ?

`

<button class="spotify-btn icon-row">

${ICONS.play} Spotify

</button>

`

:""}



<button class="share-detail icon-row">

${ICONS.share} ${t("share_btn")}

</button>



<button class="favorite-detail icon-row">

${item.favorite ? ICONS.heartFilled : ICONS.heart} ${t("favorite_btn")}

</button>



<button class="delete-detail icon-row">

${ICONS.trash} ${t("delete_btn")}

</button>



</div>


</div>

`;





document.body.appendChild(modal);





// trailer: click on the cover, only if available


if(item.trailer){


    modal
    .querySelector(".details-image")
    .onclick=function(){


        window.open(
        item.trailer,
        "_blank"
        );


    };


}





// Spotify

if(item.spotify){


modal
.querySelector(".spotify-btn")
.onclick=()=>{


window.open(
item.spotify,
"_blank"
);


};


}





// share


modal
.querySelector(".share-detail")
.onclick=function(){


generateShareCard(item);


};






// toggle favorite


modal
.querySelector(".favorite-detail")
.onclick=()=>{


item.favorite =
!item.favorite;


saveMovies();


renderMovies();



modal.remove();


};






// delete


modal
.querySelector(".delete-detail")
.onclick=()=>{


logActivity("deleted", item);

movies.splice(
movies.indexOf(item),
1
);



saveMovies();


renderMovies();


modal.remove();


};





// close X


modal
.querySelector(".details-x")
.onclick=()=>{


modal.remove();


};





// close by clicking outside


modal.onclick=(e)=>{


if(e.target===modal){

modal.remove();

}


};





}







// ===============================
// RENDER
// ===============================


function renderMovies(list=movies){



container.innerHTML="";





// LAYOUT


let layout =
localStorage.getItem("layout")
|| "list";



if(layout==="list"){

container.classList.add(
"list-layout"
);

}

else{


container.classList.remove(
"list-layout"
);


}





let filtered=[...list];






// FOLDER (if a folder is currently open, show only its items)


if(typeof currentFolderId !== "undefined" && currentFolderId){


    const activeFolder =
    folders.find(f => f.id === currentFolderId);


    if(activeFolder){


        filtered =
        filtered.filter(
        item => activeFolder.itemIds.includes(item.id)
        );


    }


}






// FAVORITES


if(showFavorites){


filtered =
filtered.filter(
item=>item.favorite
);


}





// FILTERS


if(currentFilter==="movie"){


filtered =
filtered.filter(
item=>item.type==="movie"
);


}

if(typeof currentGenreFilter !== "undefined" && currentGenreFilter){
filtered = filtered.filter(item => item.genre && item.genre.split(",").map(g=>g.trim()).includes(currentGenreFilter));
}



if(currentFilter==="song"){


filtered =
filtered.filter(
item=>item.type==="song"
);


}



if(currentFilter==="book"){


filtered =
filtered.filter(
item=>item.type==="book"
);


}







// SORTING


if(typeof sortMovies==="function"){


filtered =
sortMovies(filtered);


}







filtered.forEach(item=>{





let card =
document.createElement("div");



card.className =
"movie-card glass";





let image =
item.image ||
"icons/icon-512.png";






// MOVIE CARD


if(item.type==="movie"){



card.innerHTML = `


<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? ICONS.heartFilled : ICONS.heart}

</div>



<img src="${image}" onerror="this.src='icons/icon-512.png'">



<div class="movie-info">


<h3 class="icon-row">

${ICONS.film} ${item.title}

</h3>



<p>

${formatRating(item.rating)}

</p>



${item.where ?

`<p>${formatWhereLabel(item.where)}</p>`

:""}



<button class="delete icon-row">

${ICONS.trash} ${t("delete_btn")}

</button>


</div>


`;



}







// SONG CARD


else if(item.type==="song"){



card.innerHTML = `



<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? ICONS.heartFilled : ICONS.heart}

</div>



<img src="${image}" onerror="this.src='icons/icon-512.png'">



<div class="movie-info">


<h3 class="icon-row">

${ICONS.music} ${item.title}

</h3>



${item.artist ?

`

<p class="icon-row">

${ICONS.mic} ${item.artist}

</p>

`

:""}




<p>

${formatRating(item.rating)}

</p>




${item.spotify ?

`

<button class="spotify-btn icon-row">

${ICONS.play} Spotify

</button>

`

:""}



<button class="delete icon-row">

${ICONS.trash} ${t("delete_btn")}

</button>


</div>


`;



}







// BOOK CARD


else{



card.innerHTML = `



<div class="favorite ${item.favorite ? "active":""}">

${item.favorite ? ICONS.heartFilled : ICONS.heart}

</div>



<img src="${image}" onerror="this.src='icons/icon-512.png'">



<div class="movie-info">


<h3 class="icon-row">

${ICONS.book} ${item.title}

</h3>



${item.author ?

`

<p class="icon-row">

${ICONS.book} ${item.author}

</p>

`

:""}




<p>

${formatRating(item.rating)}

</p>



${item.pages ?

`<p>${item.pages} pages</p>`

:""}



<button class="delete icon-row">

${ICONS.trash} ${t("delete_btn")}

</button>


</div>


`;



}








// FAVORITE TOGGLE


card
.querySelector(".favorite")
.onclick=function(e){


e.stopPropagation();



item.favorite =
!item.favorite;



saveMovies();


renderMovies();



};







// DELETE


card
.querySelector(".delete")
.onclick=function(e){



e.stopPropagation();


logActivity("deleted", item);

movies.splice(
movies.indexOf(item),
1
);



saveMovies();


renderMovies();



};







// SPOTIFY


let spotifyBtn =
card.querySelector(".spotify-btn");



if(spotifyBtn){



spotifyBtn.onclick=function(e){


e.stopPropagation();



window.open(
item.spotify,
"_blank"
);



};


}







// DETAILS


card.onclick=function(e){



if(

e.target.closest(".delete")

||

e.target.closest(".favorite")

||

e.target.closest(".spotify-btn")

)

return;




openDetails(item);



};







container.appendChild(card);



});





updateStats();


// keep the recommendations carousel in sync (hide items already added)
if(typeof renderRecommendations === "function"){

    renderRecommendations();

}



}



const recommendations = [
    {
        title: "Interstellar",
        rating: 10,
        where: "cinema",
        type: "movie",
        image: "images/interstellar.jpg",
        note: "An emotional journey through space, time and feeling.",
        genre: "Sci-Fi, Adventure, Drama",
        director: "Christopher Nolan",
        duration: "169 min",
        cast: "Matthew McConaughey, Anne Hathaway, Jessica Chastain",
        trailer: "https://www.youtube.com/results?search_query=Interstellar+official+trailer",
        artist: "", spotify: "", author: "", pages: ""
    },
    {
        title: "Inception",
        rating: 9,
        where: "Netflix",
        type: "movie",
        image: "images/inception.jpg",
        note: "A mind-bending thriller full of incredible ideas.",
        genre: "Sci-Fi, Action, Thriller",
        director: "Christopher Nolan",
        duration: "148 min",
        cast: "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page",
        trailer: "https://www.youtube.com/results?search_query=Inception+official+trailer",
        artist: "", spotify: "", author: "", pages: ""
    },
    {
        title: "The Prestige",
        rating: 9,
        where: "Prime Video",
        type: "movie",
        image: "images/prestige.jpg",
        note: "A rivalry between two illusionists.",
        genre: "Drama, Mystery, Thriller",
        director: "Christopher Nolan",
        duration: "130 min",
        cast: "Christian Bale, Hugh Jackman, Scarlett Johansson",
        trailer: "https://www.youtube.com/results?search_query=The+Prestige+official+trailer",
        artist: "", spotify: "", author: "", pages: ""
    },
    {
        title: "Oppenheimer",
        rating: 9,
        where: "cinema",
        type: "movie",
        image: "images/oppenheimer.jpg",
        note: "The story behind the birth of the atomic bomb.",
        genre: "Biography, Drama, History",
        director: "Christopher Nolan",
        duration: "180 min",
        cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
        trailer: "https://www.youtube.com/results?search_query=Oppenheimer+official+trailer",
        artist: "", spotify: "", author: "", pages: ""
    },
    {
        title: "Dune",
        rating: 8,
        where: "Netflix",
        type: "movie",
        image: "images/dune.jpg",
        note: "Epic sci-fi set on the desert planet Arrakis.",
        genre: "Sci-Fi, Adventure",
        director: "Denis Villeneuve",
        duration: "155 min",
        cast: "Timothée Chalamet, Rebecca Ferguson, Oscar Isaac",
        trailer: "https://www.youtube.com/results?search_query=Dune+official+trailer",
        artist: "", spotify: "", author: "", pages: ""
    },
    {
        title: "Bohemian Rhapsody",
        rating: 9,
        type: "song",
        image: "",
        note: "Queen's genre-bending rock epic.",
        artist: "Queen",
        spotify: "https://open.spotify.com/intl-it/track/2ODUgS9kk95bqVaf9EzyOU?si=c245ab0b9a91499d",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", author: "", pages: ""
    },
    {
        title: "Blinding Lights",
        rating: 9,
        type: "song",
        image: "",
        note: "A synth-pop hit with an 80s soul.",
        artist: "The Weeknd",
        spotify: "https://open.spotify.com/intl-it/track/0VjIjW4GlUZAMYd2vXMi3b?si=53eff75af6a54883",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", author: "", pages: ""
    },
    {
        title: "Hotel California",
        rating: 9,
        type: "song",
        image: "",
        note: "A rock classic with an unforgettable guitar solo.",
        artist: "Eagles",
        spotify: "https://open.spotify.com/intl-it/track/40riOy7x9W7GXjyGp4pjAv?si=8d24b15850f44d5d",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", author: "", pages: ""
    },
    {
        title: "Shape of You",
        rating: 8,
        type: "song",
        image: "",
        note: "A catchy pop hit built around a marimba riff.",
        artist: "Ed Sheeran",
        spotify: "https://open.spotify.com/intl-it/track/7qiZfU4dY1lWllzX7mPBI3?si=7453e466a30841a8",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", author: "", pages: ""
    },
    {
        title: "Someone Like You",
        rating: 9,
        type: "song",
        image: "",
        note: "A heartfelt piano ballad about lost love.",
        artist: "Adele",
        spotify: "https://open.spotify.com/intl-it/track/3bNv3VuUOKgrf5hu3YcuRo?si=1189e940e50b4c59",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", author: "", pages: ""
    },
    {
        title: "1984",
        rating: 10,
        type: "book",
        image: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
        note: "A dystopian classic about surveillance and control.",
        author: "George Orwell",
        pages: "328",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", artist: "", spotify: ""
    },
    {
        title: "The Hobbit",
        rating: 9,
        type: "book",
        image: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
        note: "A fantasy adventure that started it all.",
        author: "J.R.R. Tolkien",
        pages: "310",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", artist: "", spotify: ""
    },
    {
        title: "Sapiens",
        rating: 9,
        type: "book",
        image: "https://covers.openlibrary.org/b/isbn/9780062316097-L.jpg",
        note: "A sweeping look at the history of humankind.",
        author: "Yuval Noah Harari",
        pages: "443",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", artist: "", spotify: ""
    },
    {
        title: "The Great Gatsby",
        rating: 8,
        type: "book",
        image: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
        note: "A glittering, tragic portrait of the American Dream.",
        author: "F. Scott Fitzgerald",
        pages: "180",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", artist: "", spotify: ""
    },
    {
        title: "To Kill a Mockingbird",
        rating: 9,
        type: "book",
        image: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
        note: "A powerful story about justice and growing up.",
        author: "Harper Lee",
        pages: "336",
        where: "", genre: "", director: "", duration: "", cast: "", trailer: "", artist: "", spotify: ""
    }
];


// ===============================
// STATS
// ===============================


function updateStats(){



const stats =
document.getElementById("stats");



let films =
movies.filter(
x=>x.type==="movie"
).length;




let songs =
movies.filter(
x=>x.type==="song"
).length;



let books =
movies.filter(
x=>x.type==="book"
).length;






if(movies.length===0){


stats.innerHTML =
t("no_reviews");


return;


}






stats.innerHTML =


`${films} ${t("stat_movies")} • ${songs} ${t("stat_songs")} • ${books} ${t("stat_books")}`;



}








// ===============================
// START
// ===============================


// AUTO START

document.addEventListener(
"DOMContentLoaded",
()=>{

loadMovies();

renderRecommendations();

renderMovies();

});




function buildRecommendCard(item){


    let card =
    document.createElement("div");


    card.className = "recommend-card glass";

    card.style.flex = "0 0 auto"; // prevents cards from shrinking


    let typeIcon = ICONS.film;

    if(item.type==="song") typeIcon = ICONS.music;

    if(item.type==="book") typeIcon = ICONS.book;


    let subtitle = "";

    if(item.artist) subtitle = item.artist;

    if(item.author) subtitle = item.author;


card.innerHTML = `
    <img src="${item.image || "icons/icon-512.png"}" onerror="this.src='icons/icon-512.png'">

    <div class="recommend-content">
        <h3 class="icon-row">${typeIcon} ${item.title}</h3>
        ${subtitle ? `<p class="icon-row">${subtitle}</p>` : ""}

        <button>+ Add</button>
    </div>
`;


    // root fix: songs have no static cover in the data, so we fetch
    // the real one from Spotify as soon as the card is built, not
    // just when the user clicks Add
    if(item.type==="song" && item.spotify){


        const img = card.querySelector("img");


        fetchSpotifyData(item.spotify).then(function(data){

            if(data && data.cover){

                img.src = data.cover;

            }

        });


    }



    // clicking the poster opens the trailer (movies only, when available)
    if(item.trailer){


        const img = card.querySelector("img");

        img.classList.add("has-trailer");


        img.onclick = function(e){

            e.stopPropagation();

            window.open(item.trailer, "_blank");

        };


    }



    // "+ Add" opens the matching form, prefilled, so the user
    // can review everything and optionally upload their own photo
    // before actually saving anything
    card.querySelector("button").onclick = async function(e){


        e.stopPropagation();


        if(item.type==="movie"){


            document.getElementById("titleInput").value = item.title;

            document.getElementById("whereInput").value = item.where || "";

            document.getElementById("noteInput").value = item.note || "";


            tmdbPosterUrl = item.image || "";

            tmdbGenre = item.genre || "";

            tmdbDirector = item.director || "";

            tmdbDuration = item.duration || "";

            tmdbCast = item.cast || "";

            tmdbTrailerUrl = item.trailer || "";


            document.getElementById("genreDisplay").value = tmdbGenre;

            document.getElementById("directorDisplay").value = tmdbDirector;

            document.getElementById("durationDisplay").value = tmdbDuration;

            document.getElementById("castDisplay").value = tmdbCast;


            const preview = document.getElementById("moviePosterPreview");

            if(preview && item.image){

                preview.src = item.image;

                preview.classList.remove("hidden");

            }


            document.getElementById("modal").classList.remove("hidden");


        }

        else if(item.type==="song"){


            document.getElementById("songTitleInput").value = item.title;

            document.getElementById("artistInput").value = item.artist || "";

            document.getElementById("spotifyInput").value = item.spotify || "";

            document.getElementById("songNoteInput").value = item.note || "";


            spotifyCoverUrl = "";


            const preview = document.getElementById("songCoverPreview");

            preview.classList.add("hidden");


            // wait for the real Spotify cover before opening the form,
            // so whatever gets saved always has the correct artwork
            if(item.spotify){


                const data = await fetchSpotifyData(item.spotify);


                if(data && data.cover){

                    spotifyCoverUrl = data.cover;

                    preview.src = data.cover;

                    preview.classList.remove("hidden");

                }


            }


            document.getElementById("songModal").classList.remove("hidden");


        }

        else{


            document.getElementById("bookTitleInput").value = item.title;

            document.getElementById("bookAuthorInput").value = item.author || "";

            document.getElementById("bookPagesInput").value = item.pages || "";

            document.getElementById("bookNoteInput").value = item.note || "";


            bookCoverUrl = item.image || "";


            const preview = document.getElementById("bookCoverPreview");

            if(preview && item.image){

                preview.src = item.image;

                preview.classList.remove("hidden");

            }


            document.getElementById("bookModal").classList.remove("hidden");


        }


    };


    return card;


}




function renderRecommendations(){


    const box =
    document.getElementById("recommendedContainer");


    if(!box) return;


    // stop any previous animation loop before rebuilding the carousel
    if(box._myverseRAF){

        cancelAnimationFrame(box._myverseRAF);

        box._myverseRAF = null;

    }


    const existingKeys =
    movies.map(
    m => `${m.type}::${(m.title || "").trim().toLowerCase()}`
    );


    const visibleRecommendations =
    recommendations.filter(item => {

        const key = `${item.type}::${item.title.trim().toLowerCase()}`;

        return !existingKeys.includes(key);

    });


    box.style.display = "flex";
    box.style.overflowX = "auto";
    box.style.webkitOverflowScrolling = "touch";
    box.style.gap = "14px";
    box.style.cursor = "grab";


    box.innerHTML = "";


    if(visibleRecommendations.length === 0) return;


    // the list is rendered twice back-to-back: this is what makes
    // the loop seamless, with no visible jump when it restarts
    visibleRecommendations.forEach(item => box.appendChild(buildRecommendCard(item)));

    visibleRecommendations.forEach(item => box.appendChild(buildRecommendCard(item)));



    let isPaused = false;

    let isDragging = false;

    let dragStartX = 0;

    let dragStartScroll = 0;

    const speed = 0.6;



    function tick(){


        if(!isPaused && !isDragging){


            box.scrollLeft += speed;


            const halfWidth = box.scrollWidth / 2;


            if(box.scrollLeft >= halfWidth){

                box.scrollLeft -= halfWidth;

            }


        }


        box._myverseRAF = requestAnimationFrame(tick);


    }


    box._myverseRAF = requestAnimationFrame(tick);



    // pause on hover, so you can actually look at the cards (desktop)
    box.onmouseenter = function(){ isPaused = true; };

    box.onmouseleave = function(){ isPaused = false; };



    // mouse wheel scrolls the carousel horizontally
    box.onwheel = function(e){

        e.preventDefault();

        box.scrollLeft += e.deltaY;

    };



    // click-and-drag scrolling with the mouse
    box.onmousedown = function(e){

        isDragging = true;

        box.style.cursor = "grabbing";

        dragStartX = e.pageX;

        dragStartScroll = box.scrollLeft;

    };


    window.addEventListener("mousemove", function(e){

        if(!isDragging) return;

        const delta = e.pageX - dragStartX;

        box.scrollLeft = dragStartScroll - delta;

    });


    window.addEventListener("mouseup", function(){

        if(isDragging){

            isDragging = false;

            box.style.cursor = "grab";

        }

    });


}




// ===============================
// LANGUAGE CHANGE: refresh the item details modal in place
// (renderMovies/renderFolderSidebar are already re-called by i18n.js)
// ===============================


if(typeof onLanguageChange === "function"){


    onLanguageChange(function(){


        const favoriteBtn =
        document.querySelector(".details-modal .favorite-detail");


        const openModal =
        favoriteBtn ? favoriteBtn.closest(".details-modal") : null;


        if(openModal && selectedDetailItem){

            openModal.remove();

            openDetails(selectedDetailItem);

        }


    });


}