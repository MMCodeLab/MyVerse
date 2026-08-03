function sortMovies(list){


let type =
localStorage.getItem("sort")
|| "recent";



let sorted=[...list];



switch(type){


case "az":

sorted.sort((a,b)=>
a.title.localeCompare(b.title)
);

break;



case "za":

sorted.sort((a,b)=>
b.title.localeCompare(a.title)
);

break;



case "voteDesc":

sorted.sort((a,b)=>
b.rating-a.rating
);

break;



case "voteAsc":

sorted.sort((a,b)=>
a.rating-b.rating
);

break;



case "favorite":

sorted.sort((a,b)=>
b.favorite-a.favorite
);

break;



case "old":

sorted.sort((a,b)=>
a.date-b.date
);

break;



case "recent":

default:

sorted.sort((a,b)=>
b.date-a.date
);

}


return sorted;


}