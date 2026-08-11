// ===============================
// API CONFIGURATION - MYVERSE
// Centralized keys: edit only here
// ===============================


const API_KEYS = {

    tmdb: "LA_TUA_API_KEY",

    googleBooks: "AIzaSyBx7Y3lkL3RnWFXpSyDJ7-lNJxrAlcBGoM"

};




// ===============================
// EXTERNAL APIS - MYVERSE
// (Spotify oEmbed + TMDB + Google Books)
// ===============================


// -------------------------------
// SPOTIFY OEMBED
// -------------------------------

async function fetchSpotifyData(spotifyUrl){

    const oembedUrl =
    `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;

    try{

        const res = await fetch(oembedUrl);

        if(!res.ok) throw new Error("Invalid Spotify link");

        const data = await res.json();

        return {
            title: data.title || "",
            cover: data.thumbnail_url || ""
        };

    }catch(err){

        console.error("Spotify error:", err);
        return null;

    }

}


let spotifyCoverUrl = "";


const spotifyInput =
document.getElementById("spotifyInput");


if(spotifyInput){

    spotifyInput.addEventListener("blur", async function(){

        const url = spotifyInput.value.trim();

        if(!url.includes("open.spotify.com")) return;

        const data = await fetchSpotifyData(url);

        if(data){

            const titleField =
            document.getElementById("songTitleInput");

            if(titleField && data.title){
                titleField.value = data.title;
            }

            spotifyCoverUrl = data.cover;

            const preview =
            document.getElementById("songCoverPreview");

            if(preview && data.cover){
                preview.src = data.cover;
                preview.classList.remove("hidden");
            }

        }

    });

}



// -------------------------------
// TMDB
// -------------------------------


async function fetchMovieData(movieTitle){

    const searchUrl =
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEYS.tmdb}&query=${encodeURIComponent(movieTitle)}&language=it-IT`;

    try{

        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if(!searchData.results || searchData.results.length===0) return null;

        // top result = most relevant
        const movieId = searchData.results[0].id;

        // second call: full details + credits (director/cast) + video (trailer)
        const detailsUrl =
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEYS.tmdb}&language=it-IT&append_to_response=credits,videos`;

        const detailsRes = await fetch(detailsUrl);
        const details = await detailsRes.json();

        const director =
        (details.credits && details.credits.crew)
            ? details.credits.crew
                .filter(p => p.job === "Director")
                .map(p => p.name)
                .join(", ")
            : "";

        const cast =
        (details.credits && details.credits.cast)
            ? details.credits.cast
                .slice(0, 5)
                .map(p => p.name)
                .join(", ")
            : "";

        const genre =
        details.genres
            ? details.genres.map(g => g.name).join(", ")
            : "";

        const duration =
        details.runtime
            ? `${details.runtime} min`
            : "";

        const trailerData =
        (details.videos && details.videos.results)
            ? details.videos.results.find(v => v.type === "Trailer" && v.site === "YouTube")
            : null;

        const trailer =
        trailerData ? `https://www.youtube.com/watch?v=${trailerData.key}` : "";

        return {
            title: details.title || movieTitle,
            poster: details.poster_path
                ? `https://image.tmdb.org/t/p/w500${details.poster_path}`
                : "",
            genre: genre,
            director: director,
            duration: duration,
            cast: cast,
            trailer: trailer
        };

    }catch(err){

        console.error("TMDB error:", err);
        return null;

    }

}


// global variables: hold the data fetched from TMDB,
// so app.js can use them when saving
let tmdbPosterUrl = "";
let tmdbGenre = "";
let tmdbDirector = "";
let tmdbDuration = "";
let tmdbCast = "";
let tmdbTrailerUrl = "";


const titleInputMovie =
document.getElementById("titleInput");


if(titleInputMovie){

    titleInputMovie.addEventListener("blur", async function(){

        const title = titleInputMovie.value.trim();

        if(!title) return;

        const data = await fetchMovieData(title);

        if(data){

            if(data.poster){

                tmdbPosterUrl = data.poster;

                const preview =
                document.getElementById("moviePosterPreview");

                if(preview){
                    preview.src = data.poster;
                    preview.classList.remove("hidden");
                }

            }

            tmdbGenre = data.genre;
            tmdbDirector = data.director;
            tmdbDuration = data.duration;
            tmdbCast = data.cast;
            tmdbTrailerUrl = data.trailer;

            const genreField =
            document.getElementById("genreDisplay");

            const directorField =
            document.getElementById("directorDisplay");

            const durationField =
            document.getElementById("durationDisplay");

            const castField =
            document.getElementById("castDisplay");

            if(genreField) genreField.value = data.genre;
            if(directorField) directorField.value = data.director;
            if(durationField) durationField.value = data.duration;
            if(castField) castField.value = data.cast;

        }

    });

}




// -------------------------------
// GOOGLE BOOKS (books)
// -------------------------------


async function fetchBookData(bookTitle){


    const searchUrl =
    `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent("intitle:" + bookTitle)}&key=${API_KEYS.googleBooks}`;


    try{

        const res = await fetch(searchUrl);

        const data = await res.json();


        if(!data.items || data.items.length===0) return null;


        const volume =
        data.items[0].volumeInfo || {};


        const author =
        volume.authors ? volume.authors.join(", ") : "";


        const pages =
        volume.pageCount || "";


        let cover = "";


        if(volume.imageLinks){


            cover =
            volume.imageLinks.thumbnail
            || volume.imageLinks.smallThumbnail
            || "";


            // Google Books sometimes returns http:// links; force https
            // so the browser doesn't block them as mixed content
            if(cover.indexOf("http://") === 0){

                cover = "https://" + cover.slice(7);

            }


        }


        return {

            title: volume.title || bookTitle,

            author: author,

            pages: pages,

            cover: cover

        };


    }catch(err){

        console.error("Google Books error:", err);

        return null;

    }


}



let bookCoverUrl = "";


const bookTitleInput =
document.getElementById("bookTitleInput");


if(bookTitleInput){


    bookTitleInput.addEventListener("blur", async function(){


        const title = bookTitleInput.value.trim();


        if(!title) return;


        const data = await fetchBookData(title);


        if(data){


            const authorField =
            document.getElementById("bookAuthorInput");

            const pagesField =
            document.getElementById("bookPagesInput");


            // author and page count stay manually editable:
            // we only fill them in if the field is still empty,
            // so we never overwrite what the user already typed
            if(authorField && !authorField.value.trim() && data.author){

                authorField.value = data.author;

            }


            if(pagesField && !pagesField.value.trim() && data.pages){

                pagesField.value = data.pages;

            }


            if(data.cover){


                bookCoverUrl = data.cover;


                const preview =
                document.getElementById("bookCoverPreview");


                if(preview){

                    preview.src = data.cover;

                    preview.classList.remove("hidden");

                }


            }


        }


    });


}