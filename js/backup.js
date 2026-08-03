const exportBtn =
document.getElementById("exportBtn");


const importInput =
document.getElementById("importInput");



exportBtn.onclick=function(){



const backup={


movies:movies,


settings:{


theme:
localStorage.getItem("theme"),


layout:
localStorage.getItem("layout"),


sort:
localStorage.getItem("sort")


}


};




const blob =
new Blob(
[
JSON.stringify(
backup,
null,
2
)
],
{
type:"application/json"
}
);



const link =
document.createElement("a");


link.href=
URL.createObjectURL(blob);



link.download=
"watchlist-backup.json";



link.click();


};







importInput.onchange=function(e){



const file=e.target.files[0];


if(!file)return;



const reader=
new FileReader();



reader.onload=function(){



const data=
JSON.parse(reader.result);




movies=data.movies || [];



saveMovies();




if(data.settings){


localStorage.setItem(
"theme",
data.settings.theme
);


localStorage.setItem(
"layout",
data.settings.layout
);


localStorage.setItem(
"sort",
data.settings.sort
);


}



location.reload();



};



reader.readAsText(file);



};