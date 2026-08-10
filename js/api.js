// ===============================
// API ESTERNE - MYVERSE
// (Spotify oEmbed + TMDB + Open Library)
// ===============================


// -------------------------------
// SPOTIFY OEMBED
// -------------------------------

async function fetchSpotifyData(spotifyUrl){

    const oembedUrl =
    `https://open.spotify.com/oembed?url=${encodeURIComponent(spotifyUrl)}`;

    try{

        const res = await fetch(oembedUrl);

        if(!res.ok) throw new Error("Link Spotify non valido");

        const data = await res.json();

        return {
            title: data.title || "",
            cover: data.thumbnail_url || ""
        };

    }catch(err){

        console.error("Errore Spotify:", err);
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

// Inserisci qui la tua API key gratuita di themoviedb.org
const TMDB_KEY = "0007864f4243ad65379a35b0538acf35";


async function fetchMovieData(movieTitle){

    const searchUrl =
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(movieTitle)}&language=it-IT`;

    try{

        const searchRes = await fetch(searchUrl);
        const searchData = await searchRes.json();

        if(!searchData.results || searchData.results.length===0) return null;

        // primo risultato = più rilevante
        const movieId = searchData.results[0].id;

        // seconda chiamata: dettagli completi + credits (regista/cast) + video (trailer)
        const detailsUrl =
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_KEY}&language=it-IT&append_to_response=credits,videos`;

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

        console.error("Errore TMDB:", err);
        return null;

    }

}


// variabili globali: tengono i dati recuperati da TMDB,
// così app.js può usarli al momento del salvataggio
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
// OPEN LIBRARY (libri)
// gratuita, senza chiave API
// -------------------------------


async function fetchBookData(bookTitle){


    const searchUrl =
    `https://openlibrary.org/search.json?title=${encodeURIComponent(bookTitle)}&limit=1`;


    try{

        const res = await fetch(searchUrl);

        const data = await res.json();


        if(!data.docs || data.docs.length===0) return null;


        const book = data.docs[0];


        const author =
        book.author_name ? book.author_name.join(", ") : "";


        const pages =
        book.number_of_pages_median || "";


        const cover =
        book.cover_i
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
            : "";


        return {

            title: book.title || bookTitle,

            author: author,

            pages: pages,

            cover: cover

        };


    }catch(err){

        console.error("Errore Open Library:", err);

        return null;

    }


}



let openLibraryCoverUrl = "";


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


            // l'autore e le pagine restano modificabili a mano:
            // li compiliamo solo se il campo è ancora vuoto,
            // così non sovrascriviamo quello che l'utente ha già scritto
            if(authorField && !authorField.value.trim() && data.author){

                authorField.value = data.author;

            }


            if(pagesField && !pagesField.value.trim() && data.pages){

                pagesField.value = data.pages;

            }


            if(data.cover){


                openLibraryCoverUrl = data.cover;


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