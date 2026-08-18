// ===============================
// PERSONAL STATISTICS - MYVERSE
// ===============================


function computeStats(){

    const movieItems = movies.filter(m => m.type === "movie");
    const songItems = movies.filter(m => m.type === "song");
    const bookItems = movies.filter(m => m.type === "book");
    const favCount = movies.filter(m => m.favorite).length;

    const rated = movies.filter(m => m.rating > 0);
    const avgRating = rated.length
        ? (rated.reduce((s, m) => s + m.rating, 0) / rated.length).toFixed(1)
        : "-";

    const cursedCount = movies.filter(m => m.rating < 0).length;

    const genreCounts = {};
    movieItems.forEach(m => {
        if(m.genre){
            m.genre.split(",").map(g => g.trim()).filter(Boolean).forEach(g => {
                genreCounts[g] = (genreCounts[g] || 0) + 1;
            });
        }
    });

    let topGenre = "-";
    let topGenreCount = 0;
    Object.keys(genreCounts).forEach(g => {
        if(genreCounts[g] > topGenreCount){
            topGenre = g;
            topGenreCount = genreCounts[g];
        }
    });

    const now = new Date();
    const thisMonthCount = movies.filter(m => {
        const d = new Date(m.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    }).length;

    let topRated = null;
    movies.forEach(m => {
        if(!topRated || m.rating > topRated.rating) topRated = m;
    });

    let longestBook = null;
    bookItems.forEach(b => {
        const p = parseInt(b.pages) || 0;
        if(!longestBook || p > (parseInt(longestBook.pages) || 0)) longestBook = b;
    });

    return {
        movieItems, songItems, bookItems, favCount,
        avgRating, cursedCount, topGenre, topGenreCount,
        thisMonthCount, topRated, longestBook
    };

}



function statsBar(label, count, color, max){

    const pct = Math.round((count / max) * 100);

    return `
        <div class="stats-bar-row">
            <span class="stats-bar-label">${label}</span>
            <div class="stats-bar-track">
                <div class="stats-bar-fill" style="width:${pct}%; background:${color};"></div>
            </div>
            <span class="stats-bar-count">${count}</span>
        </div>
    `;

}



function buildChartHTML(s){

    const max = Math.max(s.movieItems.length, s.songItems.length, s.bookItems.length, 1);

    return `
        <div class="stats-chart glass">
            ${statsBar("Movies", s.movieItems.length, "#1ed760", max)}
            ${statsBar("Songs", s.songItems.length, "#007aff", max)}
            ${statsBar("Books", s.bookItems.length, "#af52de", max)}
        </div>
    `;

}



function openStatsModal(){

    const s = computeStats();

    const lines = [

        `You've added ${movies.length} reviews in total: ${s.movieItems.length} movies, ${s.songItems.length} songs, ${s.bookItems.length} books.`,

        `Average rating: ${s.avgRating}${s.cursedCount > 0 ? ` (plus ${s.cursedCount} cursed rating${s.cursedCount === 1 ? "" : "s"})` : ""}.`,

        s.topGenre !== "-"
            ? `Your most common genre is ${s.topGenre}, appearing in ${s.topGenreCount} movie${s.topGenreCount === 1 ? "" : "s"}.`
            : "Add a few movies to see your top genre here.",

        `${s.favCount} item${s.favCount === 1 ? "" : "s"} marked as favorite.`,

        `${s.thisMonthCount} review${s.thisMonthCount === 1 ? "" : "s"} added this month.`,

        s.topRated ? `Your highest rated entry is "${s.topRated.title}" at ${s.topRated.rating}/10.` : "",

        s.longestBook ? `Longest book read: "${s.longestBook.title}" at ${s.longestBook.pages} pages.` : ""

    ].filter(Boolean);


    let modal = document.createElement("div");

    modal.className = "modal details-modal";

    const paragraphsHTML = lines.map(p => `<p>${p}</p>`).join("");

    modal.innerHTML = `
        <div class="details-box glass info-box">
            <button class="details-x">×</button>
            <h2>Statistics</h2>
            ${buildChartHTML(s)}
            <div class="info-content">${paragraphsHTML}</div>
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".details-x").onclick = function(){

        modal.remove();

    };

    modal.onclick = function(e){

        if(e.target === modal) modal.remove();

    };

}



const statsBtn =
document.getElementById("statsBtn");


if(statsBtn){

    statsBtn.onclick = function(){

        sidebar.classList.remove("open");
        if(typeof hideGenreList === "function") hideGenreList();

        openStatsModal();

    };

}