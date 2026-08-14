// ===============================
// HIDDEN DEVELOPER CONSOLE - MYVERSE
// 5s long-press on the logo to open, type "." or "exit" to close
// ===============================


const DEV_PRESS_MS = 5000;


let devPressTimer = null;


function startDevPress(){

    devPressTimer = setTimeout(openDevConsole, DEV_PRESS_MS);

}


function cancelDevPress(){

    clearTimeout(devPressTimer);

}


const appLogo =
document.getElementById("appLogo");


if(appLogo){

    appLogo.addEventListener("mousedown", startDevPress);

    appLogo.addEventListener("touchstart", startDevPress, {passive:true});


    appLogo.addEventListener("mouseup", cancelDevPress);

    appLogo.addEventListener("mouseleave", cancelDevPress);

    appLogo.addEventListener("touchend", cancelDevPress);

    appLogo.addEventListener("touchcancel", cancelDevPress);

}




let devConsoleOpen = false;

let devFPS = 0;

let devFrameCount = 0;

let devFPSLastTime = performance.now();

let devFPSRunning = false;




// ===============================
// ACTIVITY LOG
// records add/delete events separately from the movies array,
// so history survives even after an item is deleted
// ===============================


function logActivity(action, item){


    let log =
    JSON.parse(localStorage.getItem("activityLog") || "[]");


    log.push({

        action: action,

        type: item.type,

        title: item.title,

        date: Date.now()

    });


    // keep the log from growing forever
    if(log.length > 500){

        log = log.slice(log.length - 500);

    }


    localStorage.setItem("activityLog", JSON.stringify(log));


}




// ===============================
// FPS TRACKING
// ===============================


function trackFPS(){


    if(!devFPSRunning) return;


    devFrameCount++;


    const now = performance.now();


    if(now - devFPSLastTime >= 1000){


        devFPS = devFrameCount;

        devFrameCount = 0;

        devFPSLastTime = now;


        const fpsEl = document.getElementById("devFpsValue");

        if(fpsEl) fpsEl.textContent = devFPS;


    }


    requestAnimationFrame(trackFPS);


}




function getStorageSizeKB(){


    let total = 0;


    for(let key in localStorage){

        if(localStorage.hasOwnProperty(key)){

            total += (localStorage[key].length + key.length);

        }

    }


    return (total / 1024).toFixed(2);


}




function buildStatsText(){


    const movieCount = (typeof movies !== "undefined") ? movies.filter(m=>m.type==="movie").length : 0;

    const songCount = (typeof movies !== "undefined") ? movies.filter(m=>m.type==="song").length : 0;

    const bookCount = (typeof movies !== "undefined") ? movies.filter(m=>m.type==="book").length : 0;

    const folderCount = (typeof folders !== "undefined") ? folders.length : 0;


    const theme = document.body.dataset.theme || "dark";

    const lang = (typeof currentLang !== "undefined") ? currentLang : "en";


    const mem = (performance.memory)
        ? `${(performance.memory.usedJSHeapSize / 1048576).toFixed(1)} MB / ${(performance.memory.jsHeapSizeLimit / 1048576).toFixed(1)} MB`
        : "n/a (Chrome only)";


    return [

        `FPS: ${devFPS}`,
        `Memory: ${mem}`,
        `Storage used: ${getStorageSizeKB()} KB`,
        `Theme: ${theme}`,
        `Language: ${lang}`,
        `Movies: ${movieCount}  Songs: ${songCount}  Books: ${bookCount}  Folders: ${folderCount}`,
        `Screen: ${window.innerWidth}x${window.innerHeight}`,
        `Online: ${navigator.onLine}`,
        `User agent: ${navigator.userAgent}`

    ].join("\n");


}




function devPrint(outputEl, text, cls){


    const line = document.createElement("div");

    line.className = "dev-line" + (cls ? " " + cls : "");

    line.textContent = text;

    outputEl.appendChild(line);

    outputEl.scrollTop = outputEl.scrollHeight;


}




// ===============================
// 50TEST: generates 50 random reviews
// ===============================


function run50Test(outputEl){


    const movieTitles = ["Nebula Drift","Silent Horizon","Crimson Ledger","Glass Kingdom","Iron Tide","Velvet Static","Paper Moon","Broken Compass","Amber Road","Hollow Echo"];

    const songTitles = ["Neon Rain","Midnight Wire","Static Bloom","Faded Signal","Slow Orbit","Paper Skies","Glass Heart","Echo Chamber","Low Tide","Wildfire"];

    const bookTitles = ["The Last Cartographer","Whispering Archive","Salt and Silence","The Glass Library","Ashes of Tomorrow","The Quiet Machine","Northern Static","The Paper Kingdom","Hollow Mountain","The Long Winter"];

    const artists = ["Nova Lane","The Wild Static","Echo Room","Halden","Marigold"];

    const authors = ["A. Renwick","J. Mercer","T. Oduya","S. Falkner","L. Marchetti"];

    const where = ["Netflix","Cinema","Prime Video","Disney+"];


    function pick(arr){

        return arr[Math.floor(Math.random()*arr.length)];

    }


    for(let i=0;i<50;i++){


        const roll = Math.random();

        const type = roll < 0.34 ? "movie" : roll < 0.67 ? "song" : "book";


        let rating = Math.floor(Math.random()*10)+1;

        if(Math.random() < 0.05){

            rating = -(Math.floor(Math.random()*10)+1);

        }


        let item = {

            id: generateId(),

            type: type,

            title: (type==="movie" ? pick(movieTitles) : type==="song" ? pick(songTitles) : pick(bookTitles)) + " " + (i+1),

            image: "icons/icon-512.png",

            rating: rating,

            where: type==="movie" ? pick(where) : (type==="song" ? "Spotify" : ""),

            note: "Auto-generated test review.",

            favorite: Math.random() < 0.2,

            date: Date.now() - Math.floor(Math.random()*1000*60*60*24*30),

            artist: type==="song" ? pick(artists) : "",

            spotify: "",

            genre: type==="movie" ? "Test" : "",

            director: type==="movie" ? "Test Director" : "",

            duration: type==="movie" ? "120 min" : "",

            cast: "",

            trailer: "",

            author: type==="book" ? pick(authors) : "",

            pages: type==="book" ? String(100 + Math.floor(Math.random()*400)) : ""

        };


        movies.push(item);

        logActivity("added", item);


    }


    saveMovies();

    if(typeof renderMovies === "function") renderMovies();


    devPrint(outputEl, "Generated 50 random test reviews (movies/songs/books).");


}




// ===============================
// MATRIX EASTER EGG
// ===============================


function runMatrixEasterEgg(outputEl, overlay){


    overlay.classList.add("dev-matrix");


    devPrint(outputEl, "[ MYVERSE // INTERNAL SYSTEM ]");


    const barLine = document.createElement("div");

    barLine.className = "dev-line";

    outputEl.appendChild(barLine);


    let progress = 0;


    function renderBar(p){

        const filled = Math.round(p/10);

        const bar = "█".repeat(filled) + " ".repeat(10-filled);

        barLine.textContent = `SYSTEM STATUS: ${bar} ${p}%`;

        outputEl.scrollTop = outputEl.scrollHeight;

    }


    renderBar(0);


    const stage1 = setInterval(function(){


        progress += 5;

        renderBar(progress);


        if(progress >= 50){


            clearInterval(stage1);


            setTimeout(function(){


                const stage2 = setInterval(function(){


                    progress += 5;

                    renderBar(progress);


                    if(progress >= 100){


                        clearInterval(stage2);


                        devPrint(outputEl, "USER IDENTIFIED");

                        devPrint(outputEl, "DATABASE: LOCAL");

                        devPrint(outputEl, "NETWORK: OFFLINE");

                        devPrint(outputEl, "> access granted", "dev-input-echo");


                    }


                }, 35);


            }, 150);


        }


    }, 35);


}




// ===============================
// COMMANDS
// ===============================


function runDevCommand(raw, outputEl, overlay){


    const trimmed = raw.trim();

    const command = trimmed.toLowerCase();


    if(trimmed === "." || command === "exit"){

        closeDevConsole();

        return;

    }


    devPrint(outputEl, "> " + raw, "dev-input-echo");


    switch(command){


        case "help":

            devPrint(outputEl, "Available commands:");
            devPrint(outputEl, "  help              - show this list");
            devPrint(outputEl, "  stats             - print current live stats");
            devPrint(outputEl, "  fpstest           - report the current FPS reading");
            devPrint(outputEl, "  theme             - show current theme");
            devPrint(outputEl, "  lang              - show current language");
            devPrint(outputEl, "  movies            - count movies in the collection");
            devPrint(outputEl, "  songs             - count songs in the collection");
            devPrint(outputEl, "  books             - count books in the collection");
            devPrint(outputEl, "  storage           - localStorage usage in KB");
            devPrint(outputEl, "  version           - app version");
            devPrint(outputEl, "  50test            - generate 50 random test reviews");
            devPrint(outputEl, "  clear             - erase ALL app data (asks for confirmation)");
            devPrint(outputEl, "  myverse           - show project name, version and info");
            devPrint(outputEl, "  myverse.timeline  - full history, including deleted reviews");
            devPrint(outputEl, "  stars rating      - how many reviews per rating value");
            devPrint(outputEl, "  dev               - project file tree + commit info");
            devPrint(outputEl, "  matrix            - ???");
            devPrint(outputEl, "  ." + "  or exit    - close the developer console");

            break;


        case "stats":

            buildStatsText().split("\n").forEach(l => devPrint(outputEl, l));

            break;


        case "fpstest":

            devPrint(outputEl, `Current FPS: ${devFPS}`);

            break;


        case "theme":

            devPrint(outputEl, `Current theme: ${document.body.dataset.theme || "dark"}`);

            break;


        case "lang":

            devPrint(outputEl, `Current language: ${(typeof currentLang !== "undefined") ? currentLang : "en"}`);

            break;


        case "movies":

            devPrint(outputEl, `Movies: ${(typeof movies !== "undefined") ? movies.filter(m=>m.type==="movie").length : 0}`);

            break;


        case "songs":

            devPrint(outputEl, `Songs: ${(typeof movies !== "undefined") ? movies.filter(m=>m.type==="song").length : 0}`);

            break;


        case "books":

            devPrint(outputEl, `Books: ${(typeof movies !== "undefined") ? movies.filter(m=>m.type==="book").length : 0}`);

            break;


        case "storage":

            devPrint(outputEl, `Storage used: ${getStorageSizeKB()} KB`);

            break;


        case "version":

            devPrint(outputEl, "MyVerse Dev Console v1.0");

            break;


        case "50test":

            run50Test(outputEl);

            break;


        case "clear":

            devPrint(outputEl, "This will permanently erase ALL reviews, folders and history.", "dev-error");

            devPrint(outputEl, 'Type "clear confirm" to proceed.');

            break;


        case "clear confirm":


            movies.length = 0;

            if(typeof folders !== "undefined") folders.length = 0;


            saveMovies();

            if(typeof saveFolders === "function") saveFolders();


            localStorage.removeItem("activityLog");


            if(typeof renderMovies === "function") renderMovies();

            if(typeof renderFolderSidebar === "function") renderFolderSidebar();


            devPrint(outputEl, "All data erased.");

            break;


        case "myverse":

            devPrint(outputEl, "===============================");

            devPrint(outputEl, "          M Y V E R S E");

            devPrint(outputEl, "===============================");

            devPrint(outputEl, "Version: 1.0");

            devPrint(outputEl, "A personal media diary for movies, music and books.");

            devPrint(outputEl, "No backend, no accounts — everything lives on this device.");

            devPrint(outputEl, "Created by Matteo Minniti");

            devPrint(outputEl, "matt3xx.github.io/MyVerse");

            break;


        case "myverse.timeline":


            const log = JSON.parse(localStorage.getItem("activityLog") || "[]");


            if(log.length === 0){

                devPrint(outputEl, "No history yet.");

            }

            else{

                log.slice().reverse().forEach(entry => {

                    const d = new Date(entry.date);

                    devPrint(outputEl, `[${d.toLocaleString()}] ${entry.action.toUpperCase()} ${entry.type}: ${entry.title}`);

                });

            }


            break;


        case "stars rating":


            const dist = {};

            movies.forEach(m => { dist[m.rating] = (dist[m.rating]||0)+1; });


            const keys = Object.keys(dist).map(Number).sort((a,b)=>a-b);


            if(keys.length === 0){

                devPrint(outputEl, "No rated reviews yet.");

            }

            else{

                devPrint(outputEl, "Rating distribution:");

                keys.forEach(r => devPrint(outputEl, `  ${r} star${Math.abs(r)===1?"":"s"}: ${dist[r]}`));

            }


            break;


        case "dev":

            devPrint(outputEl, "Project tree:");
            devPrint(outputEl, "MyVerse/");
            devPrint(outputEl, "├── index.html");
            devPrint(outputEl, "├── manifest.json");
            devPrint(outputEl, "├── service-worker.js");
            devPrint(outputEl, "├── css/");
            devPrint(outputEl, "│   ├── style.css");
            devPrint(outputEl, "│   ├── glass.css");
            devPrint(outputEl, "│   ├── animations.css");
            devPrint(outputEl, "│   ├── themes.css");
            devPrint(outputEl, "│   ├── settings.css");
            devPrint(outputEl, "│   └── responsive.css");
            devPrint(outputEl, "├── js/");
            devPrint(outputEl, "│   ├── storage.js");
            devPrint(outputEl, "│   ├── icons.js");
            devPrint(outputEl, "│   ├── folders.js");
            devPrint(outputEl, "│   ├── suggestions.js");
            devPrint(outputEl, "│   ├── stars.js");
            devPrint(outputEl, "│   ├── sort.js");
            devPrint(outputEl, "│   ├── settings.js");
            devPrint(outputEl, "│   ├── backup.js");
            devPrint(outputEl, "│   ├── ui.js");
            devPrint(outputEl, "│   ├── modal.js");
            devPrint(outputEl, "│   ├── api.js");
            devPrint(outputEl, "│   ├── legal.js");
            devPrint(outputEl, "│   ├── share.js");
            devPrint(outputEl, "│   ├── contact.js");
            devPrint(outputEl, "│   ├── i18n.js");
            devPrint(outputEl, "│   ├── app.js");
            devPrint(outputEl, "│   └── devconsole.js");
            devPrint(outputEl, "├── icons/");
            devPrint(outputEl, "└── images/");
            devPrint(outputEl, "");
            devPrint(outputEl, "Last commit: not available.", "dev-error");
            devPrint(outputEl, "(a static frontend can't read git history — would need a small build step to inject it)");

            break;


        case "matrix":

            runMatrixEasterEgg(outputEl, overlay);

            break;


        case "":

            break;


        default:

            devPrint(outputEl, `Command not found: "${raw}". Type "help" for a list of commands.`, "dev-error");


    }


}




function openDevConsole(){


    if(devConsoleOpen) return;

    devConsoleOpen = true;


    let overlay =
    document.createElement("div");

    overlay.id = "devConsoleOverlay";

    overlay.className = "dev-console";


    overlay.innerHTML = `

        <div class="dev-stats" id="devStatsPanel"></div>

        <div class="dev-output" id="devOutput"></div>

        <div class="dev-input-row">

            <span class="dev-prompt">&gt;</span>

            <input type="text" id="devInput" autocomplete="off" spellcheck="false" placeholder="type a command, or '.' to exit">

        </div>

    `;


    document.body.appendChild(overlay);



    const statsPanel =
    document.getElementById("devStatsPanel");

    statsPanel.textContent = buildStatsText();


    const output =
    document.getElementById("devOutput");

    devPrint(output, "MyVerse Developer Console");

    devPrint(output, 'Type "help" for a list of commands, "." or "exit" to close.');



    devFPSRunning = true;

    devFrameCount = 0;

    devFPSLastTime = performance.now();

    requestAnimationFrame(trackFPS);



    const statsInterval = setInterval(function(){


        if(!devConsoleOpen){

            clearInterval(statsInterval);

            return;

        }


        statsPanel.textContent = buildStatsText();


    }, 1000);



    const input =
    document.getElementById("devInput");

    input.focus();


    input.addEventListener("keydown", function(e){


        if(e.key === "Enter"){


            const value = input.value;

            input.value = "";

            runDevCommand(value, output, overlay);


        }


    });


}




function closeDevConsole(){


    devConsoleOpen = false;

    devFPSRunning = false;


    const overlay =
    document.getElementById("devConsoleOverlay");

    if(overlay) overlay.remove();


}