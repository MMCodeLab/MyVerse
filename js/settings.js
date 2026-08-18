const settingsBtn =
document.getElementById("settingsBtn");


const settingsModal =
document.getElementById("settingsModal");


const closeSettings =
document.getElementById("closeSettings");



settingsBtn.onclick=function(){

sidebar.classList.remove("open");
if(typeof hideGenreList === "function") hideGenreList();

settingsModal.classList.remove("hidden");

};



closeSettings.onclick=function(){

settingsModal.classList.add("hidden");

};





const themeSelect =
document.getElementById("themeSelect");


const layoutSelect =
document.getElementById("layoutSelect");


const sortSelect =
document.getElementById("sortSelect");




// LOAD SETTINGS


let savedTheme =
localStorage.getItem("theme")
|| "dark";


let savedLayout =
localStorage.getItem("layout")
|| "list";


let savedSort =
localStorage.getItem("sort")
|| "recent";



document.body.dataset.theme=savedTheme;


themeSelect.value=savedTheme;

layoutSelect.value=savedLayout;

sortSelect.value=savedSort;






themeSelect.onchange=function(){


localStorage.setItem(
"theme",
this.value
);


document.body.dataset.theme=
this.value;


};





layoutSelect.onchange=function(){


localStorage.setItem(
"layout",
this.value
);


renderMovies();


};





sortSelect.onchange=function(){


localStorage.setItem(
"sort",
this.value
);


renderMovies();


};