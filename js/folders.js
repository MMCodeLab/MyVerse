// ===============================
// FOLDERS - MYVERSE
// ===============================


let folders = [];

let currentFolderId = null;

let editingFolderId = null;

let selectedFolderItemIds = [];



function loadFolders(){

    const saved = localStorage.getItem("folders");

    folders = saved ? JSON.parse(saved) : [];

}



function saveFolders(){

    localStorage.setItem("folders", JSON.stringify(folders));

}




// ===============================
// DECK ICON (uses the first 3 items' covers)
// ===============================


function buildDeckIcon(folder){

    const items = folder.itemIds
        .map(id => movies.find(m => m.id === id))
        .filter(Boolean)
        .slice(0, 3);

    if(items.length === 0){

        return `<span class="deck-icon empty">${ICONS.folder}</span>`;

    }

    let imgsHTML = "";

    items.forEach((item, index) => {

        imgsHTML += `<img src="${item.image}" style="z-index:${items.length - index}">`;

    });

    return `<span class="deck-icon">${imgsHTML}</span>`;

}




// ===============================
// SIDEBAR - FOLDER LIST
// ===============================


function renderFolderSidebar(){

    const list = document.getElementById("folderList");

    if(!list) return;

    list.innerHTML = "";

    folders.forEach(folder => {

        let btn = document.createElement("button");

        btn.className = "folder-item";

        btn.innerHTML = `${buildDeckIcon(folder)}<span>${folder.name}</span>`;

        btn.onclick = function(){

            openFolderView(folder);

            sidebar.classList.remove("open");
            if(typeof hideGenreList === "function") hideGenreList();

        };

        list.appendChild(btn);

    });

}




// ===============================
// OPEN / CLOSE FOLDER VIEW
// ===============================


function openFolderView(folder){

    currentFolderId = folder.id;

    showFavorites = false;

    currentFilter = "all";

    renderMovies();

    showFolderHeader(folder);

}



function closeFolderView(){

    currentFolderId = null;

    hideFolderHeader();

    renderMovies();

}



function showFolderHeader(folder){

    let header = document.getElementById("folderViewHeader");

    if(!header){

        header = document.createElement("div");

        header.id = "folderViewHeader";

        header.className = "folder-view-header glass";

        container.parentNode.insertBefore(header, container);

    }

    header.innerHTML = `
        <h2>${folder.name}</h2>
        <div class="folder-view-actions">
            <button id="exportFolderBtn" class="icon-row">${ICONS.download} Export</button>
            <button id="editFolderBtn">Edit</button>
            <button id="deleteFolderBtn">Delete folder</button>
            <button id="closeFolderBtn">Close folder</button>
        </div>
    `;

    header.classList.remove("hidden");


    document.getElementById("exportFolderBtn").onclick = function(){

        exportFolderBackup(folder);

    };


    document.getElementById("editFolderBtn").onclick = function(){

        openFolderEditor(folder);

    };


    document.getElementById("deleteFolderBtn").onclick = function(){

        if(confirm(`Delete the folder "${folder.name}"? The items inside it will not be deleted.`)){

            folders = folders.filter(f => f.id !== folder.id);

            saveFolders();

            renderFolderSidebar();

            closeFolderView();

        }

    };


    document.getElementById("closeFolderBtn").onclick = function(){

        closeFolderView();

    };

}



function hideFolderHeader(){

    const header = document.getElementById("folderViewHeader");

    if(header) header.classList.add("hidden");

}




// ===============================
// EXPORT A SINGLE FOLDER
// self-contained, independent from the full backup in backup.js
// ===============================


function exportFolderBackup(folder){

    const items = folder.itemIds
        .map(id => movies.find(m => m.id === id))
        .filter(Boolean);

    const data = {

        folderName: folder.name,

        exportedAt: new Date().toISOString(),

        items: items

    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;

    link.download = `myverse-${folder.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}.json`;

    link.click();

    URL.revokeObjectURL(url);

}




// ===============================
// CREATE / EDIT FOLDER
// ===============================


function openFolderCreation(){

    editingFolderId = null;

    selectedFolderItemIds = [];

    document.getElementById("folderModalTitle").innerHTML = "New folder";

    document.getElementById("folderNameInput").value = "";

    renderFolderItemsGrid();

    document.getElementById("folderItemsModal").classList.remove("hidden");

}



function openFolderEditor(folder){

    editingFolderId = folder.id;

    selectedFolderItemIds = [...folder.itemIds];

    document.getElementById("folderModalTitle").innerHTML = "Edit folder";

    document.getElementById("folderNameInput").value = folder.name;

    renderFolderItemsGrid();

    document.getElementById("folderItemsModal").classList.remove("hidden");

}



function renderFolderItemsGrid(){

    const grid = document.getElementById("folderItemsGrid");

    grid.innerHTML = "";

    movies.forEach(item => {

        let cell = document.createElement("div");

        cell.className = "folder-item-select";

        if(selectedFolderItemIds.includes(item.id)) cell.classList.add("selected");

        cell.innerHTML = `<img src="${item.image}"><p>${item.title}</p>`;

        cell.onclick = function(){

            if(selectedFolderItemIds.includes(item.id)){

                selectedFolderItemIds = selectedFolderItemIds.filter(id => id !== item.id);

                cell.classList.remove("selected");

            }
            else{

                selectedFolderItemIds.push(item.id);

                cell.classList.add("selected");

            }

        };

        grid.appendChild(cell);

    });

}




// ===============================
// SAVE FOLDER
// ===============================


const saveFolderBtn = document.getElementById("saveFolderBtn");


if(saveFolderBtn){

    saveFolderBtn.onclick = function(){

        const name = document.getElementById("folderNameInput").value.trim();

        if(name === ""){

            alert("Please enter a folder name");

            return;

        }

        if(editingFolderId){

            let folder = folders.find(f => f.id === editingFolderId);

            folder.name = name;

            folder.itemIds = [...selectedFolderItemIds];

        }
        else{

            folders.push({

                id: generateId(),

                name: name,

                itemIds: [...selectedFolderItemIds],

                date: Date.now()

            });

        }

        saveFolders();

        renderFolderSidebar();

        document.getElementById("folderItemsModal").classList.add("hidden");


        if(currentFolderId === editingFolderId && editingFolderId){

            const updated = folders.find(f => f.id === editingFolderId);

            if(updated) openFolderView(updated);

        }

    };

}



const closeFolderItemsBtn = document.getElementById("closeFolderItemsBtn");


if(closeFolderItemsBtn){

    closeFolderItemsBtn.onclick = function(){

        document.getElementById("folderItemsModal").classList.add("hidden");

    };

}




// ===============================
// STARTUP
// ===============================


document.addEventListener("DOMContentLoaded", function(){

    loadFolders();

    renderFolderSidebar();

});