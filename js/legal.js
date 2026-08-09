// ===============================
// PRIVACY AND USER GUIDE - MYVERSE
// ===============================


const PRIVACY_TITLE = "Privacy Policy";


const PRIVACY_PARAGRAPHS = [

"MyVerse does not collect, send, or store any data on servers of its own. There is no backend: it's a site that runs entirely in your browser.",

"All the movies, songs and books you add are saved only on your device, in your browser's local storage. No one but you can see them, unless you manually export your backup and share it.",

"No account, login or sign-up is required to use the app, and your usage is not tracked in any way.",

"When you type a movie title, that text is sent directly from your browser to TMDB (The Movie Database) to fetch the poster, genre, director, cast, duration and trailer. MyVerse does not intercept or store this request anywhere else.",

"When you paste a Spotify link, that link is sent directly from your browser to Spotify to fetch the song's title and cover art, on the same principle.",

"When you type a book title, that text is sent directly from your browser to Open Library to fetch the cover, author and page count.",

"You can export your backup or delete all your data at any time from Settings."

];



const MANUAL_TITLE = "User Guide";


const MANUAL_PARAGRAPHS = [

"Adding a movie, song or book: tap the + button in the bottom right, then choose Movie, Music or Book.",

"Movie: type the title. When you leave the field, the app automatically searches TMDB and fills in the poster, genre, director, duration and cast on its own — these fields are not editable by hand. You can still upload a custom cover if you prefer, using the file field below the preview.",

"Song: paste the Spotify link of the track in the field provided. When you leave the field, the app automatically fetches the song title and cover art. The artist still needs to be entered by hand, since Spotify doesn't provide it this way.",

"Book: type the title. The app tries to fetch the cover, author and page count from Open Library. Unlike movies, author and page count remain editable at any time — if you type them in yourself first, the app won't overwrite them.",

"Rating: tap the stars to give a score from 1 to 10.",

"Where you watched/listened and note: free-text fields, filled in by hand.",

"Trailer: if a movie has a trailer available on TMDB, you can watch it by tapping directly on the cover in the details screen — it opens on YouTube in a new tab.",

"Favorites: tap the heart on a card, or in the details screen, to add or remove it from favorites.",

"Search: use the search bar at the top to filter by title, artist, author, where you watched/listened, or note.",

"Filters and layout: from the side menu you can show everything, only movies, only music, only books, or only favorites. From Settings you can change the theme (dark/light), the layout (cards or list), and the sort order.",

"Folders: from the side menu you can create your own collections. Tap New folder, name it, then tap the items you want to include — an item can belong to more than one folder at the same time.",

"Backup: from Settings you can export all your data to a file, to keep it safe or move it to another device, and import it again whenever you want.",

"Deleting an item: tap the Delete button on the card or in the details screen. This action is permanent."

];




// ===============================
// OPEN INFO CARD (privacy/manual)
// ===============================


function openInfoCard(title, paragraphs){


let modal =
document.createElement("div");


modal.className =
"modal details-modal";



let paragraphsHTML =
paragraphs
.map(p => `<p>${p}</p>`)
.join("");




modal.innerHTML = `

<div class="details-box glass info-box">


<button class="details-x">

×

</button>



<h2>

${title}

</h2>



<div class="info-content">

${paragraphsHTML}

</div>


</div>

`;




document.body.appendChild(modal);




modal
.querySelector(".details-x")
.onclick=()=>{


modal.remove();


};




modal.onclick=(e)=>{


if(e.target===modal){

modal.remove();

}


};



}




// ===============================
// BUTTON WIRING
// ===============================


const privacyBtn =
document.getElementById("privacyBtn");


if(privacyBtn){


privacyBtn.onclick=function(){

openInfoCard(
PRIVACY_TITLE,
PRIVACY_PARAGRAPHS
);

};


}




const manualBtn =
document.getElementById("manualBtn");


if(manualBtn){


manualBtn.onclick=function(){

openInfoCard(
MANUAL_TITLE,
MANUAL_PARAGRAPHS
);

};


}