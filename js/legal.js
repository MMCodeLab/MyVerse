// ===============================
// PRIVACY E MANUALE - MYVERSE
// ===============================


const PRIVACY_TITLE = "Informativa Privacy";


const PRIVACY_PARAGRAPHS = [

"MyVerse non raccoglie, non invia e non conserva alcun dato su server propri. Non esiste un backend: è un sito che gira interamente nel tuo browser.",

"Tutti i film e le canzoni che aggiungi vengono salvati esclusivamente sul tuo dispositivo, nella memoria locale del browser (localStorage). Nessuno oltre a te può vederli, a meno che tu non esporti manualmente il backup e lo condivida.",

"Non è richiesto nessun account, login o registrazione per usare l'app, e non viene effettuato alcun tracciamento del tuo utilizzo.",

"Quando digiti il titolo di un film, quel testo viene inviato direttamente dal tuo browser a TMDB (The Movie Database) per recuperare poster, genere, regista, cast, durata e trailer. MyVerse non intercetta né conserva questa richiesta altrove.",

"Quando incolli un link Spotify, quel link viene inviato direttamente dal tuo browser a Spotify per recuperare titolo e copertina della canzone, con lo stesso principio.",

"Puoi esportare il tuo backup o cancellare tutti i tuoi dati in qualsiasi momento dalle Impostazioni."

];



const MANUAL_TITLE = "Manuale d'uso";


const MANUAL_PARAGRAPHS = [

"Aggiungere un film o una canzone: tocca il pulsante + in basso a destra, poi scegli tra Film o Musica.",

"Film: scrivi il titolo. Quando esci dal campo, l'app cerca automaticamente il film su TMDB e compila da sola poster, genere, regista, durata e cast — questi campi non sono modificabili a mano. Puoi comunque caricare una copertina personalizzata se preferisci, dal campo file sotto l'anteprima.",

"Canzone: incolla il link Spotify della traccia nel campo apposito. Uscendo dal campo, l'app recupera automaticamente titolo e copertina della canzone. L'artista va comunque inserito a mano, perché Spotify non lo fornisce in questo modo.",

"Voto: tocca le stelle per assegnare un punteggio da 1 a 10.",

"Dove l'hai visto/ascoltato e nota: campi liberi, da compilare a mano.",

"Trailer: se un film ha un trailer disponibile su TMDB, puoi guardarlo toccando direttamente la copertina nella schermata dei dettagli — si aprirà su YouTube in una nuova scheda.",

"Preferiti: tocca il cuore su una card, o nella schermata dei dettagli, per aggiungerla o rimuoverla dai preferiti.",

"Ricerca: usa la barra di ricerca in alto per filtrare per titolo, artista, dove l'hai vista/ascoltata o nota.",

"Filtri e layout: dal menu laterale puoi mostrare tutti gli elementi, solo i film, solo la musica o solo i preferiti. Dalle Impostazioni puoi cambiare tema (scuro/chiaro), layout (card o lista) e criterio di ordinamento.",

"Backup: dalle Impostazioni puoi esportare tutti i tuoi dati in un file, per tenerli al sicuro o trasferirli su un altro dispositivo, e importarli di nuovo quando vuoi.",

"Eliminare un elemento: tocca il pulsante Elimina sulla card o nella schermata dei dettagli. L'operazione è definitiva."

];




// ===============================
// APERTURA CARD INFO (privacy/manuale)
// ===============================


function openInfoCard(title, paragraphs){


let modal =
document.createElement("div");


modal.className =
"modal details-modal";



let paragraphsHTML =
paragraphs
.map(p => `<p>${p}</p>`)
.join("");




modal.innerHTML = `

<div class="details-box glass info-box">


<button class="details-x">

×

</button>



<h2>

${title}

</h2>



<div class="info-content">

${paragraphsHTML}

</div>


</div>

`;




document.body.appendChild(modal);




modal
.querySelector(".details-x")
.onclick=()=>{


modal.remove();


};




modal.onclick=(e)=>{


if(e.target===modal){

modal.remove();

}


};



}




// ===============================
// COLLEGAMENTO PULSANTI
// ===============================


const privacyBtn =
document.getElementById("privacyBtn");


if(privacyBtn){


privacyBtn.onclick=function(){

openInfoCard(
PRIVACY_TITLE,
PRIVACY_PARAGRAPHS
);

};


}




const manualBtn =
document.getElementById("manualBtn");


if(manualBtn){


manualBtn.onclick=function(){

openInfoCard(
MANUAL_TITLE,
MANUAL_PARAGRAPHS
);

};


}