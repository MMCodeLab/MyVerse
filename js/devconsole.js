// ===============================
// HIDDEN DEVELOPER CONSOLE - MYVERSE
// 5s long-press on the logo to open, type "." to exit
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




function runDevCommand(raw, outputEl){


    const command = raw.trim().toLowerCase();


    if(raw.trim() === "."){

        closeDevConsole();

        return;

    }


    devPrint(outputEl, "> " + raw, "dev-input-echo");


    switch(command){


        case "help":

            devPrint(outputEl, "Available commands:");
            devPrint(outputEl, "  help      - show this list");
            devPrint(outputEl, "  stats     - print current live stats");
            devPrint(outputEl, "  fpstest   - report the current FPS reading");
            devPrint(outputEl, "  theme     - show current theme");
            devPrint(outputEl, "  lang      - show current language");
            devPrint(outputEl, "  movies    - count movies in the collection");
            devPrint(outputEl, "  songs     - count songs in the collection");
            devPrint(outputEl, "  books     - count books in the collection");
            devPrint(outputEl, "  storage   - localStorage usage in KB");
            devPrint(outputEl, "  version   - app version");
            devPrint(outputEl, "  clear     - clear the console output");
            devPrint(outputEl, "  .         - exit the developer console");

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


        case "clear":

            outputEl.innerHTML = "";

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

    devPrint(output, 'Type "help" for a list of commands, "." to exit.');



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

            runDevCommand(value, output);


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