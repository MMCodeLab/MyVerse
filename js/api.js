// ===============================
// API ESTERNE - MYVERSE
// (Spotify oEmbed + TMDB)
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

const TMDB_KEY = "0007864f4243ad65379a35b0538acf35";


async function fetchMovieData(movieTitle){

    const searchUrl =
    `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_KEY}&query=${encodeURIComponent(movieTitle)}&language=it-IT`;

    try{

        const res = await fetch(searchUrl);
        const data = await res.json();

        if(!data.results || data.results.length===0) return null;

        const movie = data.results[0];

        return {
            title: movie.title,
            poster: movie.poster_path
                ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                : ""
        };

    }catch(err){

        console.error("Errore TMDB:", err);
        return null;

    }

}


let tmdbPosterUrl = "";


const titleInputMovie =
document.getElementById("titleInput");


if(titleInputMovie){

    titleInputMovie.addEventListener("blur", async function(){

        const title = titleInputMovie.value.trim();

        if(!title) return;

        const data = await fetchMovieData(title);

        if(data && data.poster){

            tmdbPosterUrl = data.poster;

            const preview =
            document.getElementById("moviePosterPreview");

            if(preview){
                preview.src = data.poster;
                preview.classList.remove("hidden");
            }

        }

    });

}