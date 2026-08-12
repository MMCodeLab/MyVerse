// ===============================
// LANGUAGE / i18n - MYVERSE
// 6 languages: en, it, sq, es, fr, de
// Movie/song/book titles are user data and are never translated.
// ===============================


const TRANSLATIONS = {

en: {
nav_all:"All", nav_movies:"Movies", nav_music:"Music", nav_books:"Books", nav_favorites:"Favorites", nav_settings:"Settings", nav_contact:"Contact Us",
folders_heading:"Folders", new_folder:"New folder",
hero_title1:"Your passions,", hero_title2:"your story.", search_placeholder:"Search your collection...",
rec_title:"This week's picks", rec_subtitle:"Movies you might like",
add_label:"+ Add", added_label:"✓ Added",
add_title:"What do you want to add?",
choice_movie_title:"Movie", choice_movie_desc:"Review a movie",
choice_song_title:"Music", choice_song_desc:"Save a song",
choice_book_title:"Book", choice_book_desc:"Review a book",
choice_folder_title:"Folder", choice_folder_desc:"Create a collection",
movie_add_title:"Add movie", title_placeholder:"Title",
genre_placeholder:"Genre (auto-filled only)", director_placeholder:"Director (auto-filled only)",
duration_placeholder:"Duration (auto-filled only)", cast_placeholder:"Cast (auto-filled only)",
cover_hint:"Cover (manual, optional if found on TMDB)", where_placeholder:"Where did you watch it?",
note_placeholder:"Note", save:"Save", close:"Close",
song_add_title:"Add song", song_title_placeholder:"Song title", artist_placeholder:"Artist",
spotify_placeholder:"Spotify link", song_cover_hint:"Cover (manual, optional if found via Spotify)",
book_add_title:"Add book", book_title_placeholder:"Book title",
book_cover_hint:"Cover (manual, optional if found via Google Books)",
author_placeholder:"Author", pages_placeholder:"Number of pages",
new_folder_title:"New folder", folder_name_placeholder:"Folder name",
settings_title:"Settings", theme_label:"Theme", dark:"Dark", light:"Light",
layout_label:"Layout", cards:"Cards", list:"List",
sort_label:"Sort by", newest:"Newest", oldest:"Oldest", rating_desc:"Rating ↓", rating_asc:"Rating ↑",
az:"A-Z", za:"Z-A", favorites_opt:"Favorites",
export_backup:"Export Backup", privacy_policy:"Privacy Policy", user_guide:"User Guide", language_label:"Language",
delete_btn:"Delete", favorite_btn:"Favorite", share_btn:"Share",
director_label:"Director:", pages_label:"pages", no_notes:"No notes",
stat_movies:"movies", stat_songs:"songs", stat_books:"books", no_reviews:"No reviews yet",
alert_movie_title:"Please enter a title", alert_song_title:"Please enter the song title",
alert_book_title:"Please enter the book title", alert_folder_name:"Please enter a folder name",
edit_label:"Edit", delete_folder_label:"Delete folder", close_folder_label:"Close folder",
delete_folder_confirm:'Delete the folder "{name}"? The items inside it will not be deleted.',
contact_title:"Contact Us",
contact_desc:"Found a bug, have an idea, or just want to say hi? Send a message and I'll get back to you as soon as I can.",
contact_email_placeholder:"Your email", contact_message_placeholder:"Your message",
contact_send:"Send", contact_sending:"Sending...", contact_success:"Message sent, thank you!",
contact_error_fields:"Please fill in both fields.", contact_error_generic:"Something went wrong. Please try again.",
contact_error_network:"Network error. Please try again.", instagram_label:"Instagram"
},

it: {
nav_all:"Tutti", nav_movies:"Film", nav_music:"Musica", nav_books:"Libri", nav_favorites:"Preferiti", nav_settings:"Impostazioni", nav_contact:"Contattaci",
folders_heading:"Cartelle", new_folder:"Nuova cartella",
hero_title1:"Le tue passioni,", hero_title2:"la tua storia.", search_placeholder:"Cerca nella tua collezione...",
rec_title:"I consigli della settimana", rec_subtitle:"Film che potrebbero piacerti",
add_label:"+ Aggiungi", added_label:"✓ Aggiunto",
add_title:"Cosa vuoi aggiungere?",
choice_movie_title:"Film", choice_movie_desc:"Recensisci un film",
choice_song_title:"Musica", choice_song_desc:"Salva una canzone",
choice_book_title:"Libro", choice_book_desc:"Recensisci un libro",
choice_folder_title:"Cartella", choice_folder_desc:"Crea una collezione",
movie_add_title:"Aggiungi film", title_placeholder:"Titolo",
genre_placeholder:"Genere (compilabile solo automaticamente)", director_placeholder:"Regista (compilabile solo automaticamente)",
duration_placeholder:"Durata (compilabile solo automaticamente)", cast_placeholder:"Cast (compilabile solo automaticamente)",
cover_hint:"Copertina (manuale, opzionale se trovata su TMDB)", where_placeholder:"Dove lo hai visto?",
note_placeholder:"Nota", save:"Salva", close:"Chiudi",
song_add_title:"Aggiungi canzone", song_title_placeholder:"Titolo canzone", artist_placeholder:"Artista",
spotify_placeholder:"Link Spotify", song_cover_hint:"Copertina (manuale, opzionale se trovata su Spotify)",
book_add_title:"Aggiungi libro", book_title_placeholder:"Titolo del libro",
book_cover_hint:"Copertina (manuale, opzionale se trovata su Google Books)",
author_placeholder:"Autore", pages_placeholder:"Numero di pagine",
new_folder_title:"Nuova cartella", folder_name_placeholder:"Nome cartella",
settings_title:"Impostazioni", theme_label:"Tema", dark:"Scuro", light:"Chiaro",
layout_label:"Layout", cards:"Card", list:"Lista",
sort_label:"Ordina per", newest:"Più recenti", oldest:"Meno recenti", rating_desc:"Voto ↓", rating_asc:"Voto ↑",
az:"A-Z", za:"Z-A", favorites_opt:"Preferiti",
export_backup:"Esporta Backup", privacy_policy:"Informativa Privacy", user_guide:"Manuale d'uso", language_label:"Lingua",
delete_btn:"Elimina", favorite_btn:"Preferito", share_btn:"Condividi",
director_label:"Regia:", pages_label:"pagine", no_notes:"Nessuna nota",
stat_movies:"film", stat_songs:"canzoni", stat_books:"libri", no_reviews:"Nessuna recensione aggiunta",
alert_movie_title:"Inserisci un titolo", alert_song_title:"Inserisci il titolo della canzone",
alert_book_title:"Inserisci il titolo del libro", alert_folder_name:"Inserisci un nome per la cartella",
edit_label:"Modifica", delete_folder_label:"Elimina cartella", close_folder_label:"Chiudi cartella",
delete_folder_confirm:'Eliminare la cartella "{name}"? Gli elementi al suo interno non verranno cancellati.',
contact_title:"Contattaci",
contact_desc:"Hai trovato un bug, hai un'idea o vuoi solo salutare? Scrivi un messaggio e ti risponderò appena possibile.",
contact_email_placeholder:"La tua email", contact_message_placeholder:"Il tuo messaggio",
contact_send:"Invia", contact_sending:"Invio in corso...", contact_success:"Messaggio inviato, grazie!",
contact_error_fields:"Compila entrambi i campi.", contact_error_generic:"Qualcosa è andato storto. Riprova.",
contact_error_network:"Errore di rete. Riprova.", instagram_label:"Instagram"
},

sq: {
nav_all:"Të gjitha", nav_movies:"Filma", nav_music:"Muzikë", nav_books:"Libra", nav_favorites:"Të preferuarat", nav_settings:"Cilësimet", nav_contact:"Na kontaktoni",
folders_heading:"Dosjet", new_folder:"Dosje e re",
hero_title1:"Pasionet e tua,", hero_title2:"historia jote.", search_placeholder:"Kërko në koleksionin tënd...",
rec_title:"Zgjedhjet e kësaj jave", rec_subtitle:"Filma që mund të të pëlqejnë",
add_label:"+ Shto", added_label:"✓ U shtua",
add_title:"Çfarë dëshiron të shtosh?",
choice_movie_title:"Film", choice_movie_desc:"Vlerëso një film",
choice_song_title:"Muzikë", choice_song_desc:"Ruaj një këngë",
choice_book_title:"Libër", choice_book_desc:"Vlerëso një libër",
choice_folder_title:"Dosje", choice_folder_desc:"Krijo një koleksion",
movie_add_title:"Shto film", title_placeholder:"Titulli",
genre_placeholder:"Zhanri (plotësohet vetëm automatikisht)", director_placeholder:"Regjisori (plotësohet vetëm automatikisht)",
duration_placeholder:"Kohëzgjatja (plotësohet vetëm automatikisht)", cast_placeholder:"Aktorët (plotësohet vetëm automatikisht)",
cover_hint:"Kopertina (manuale, opsionale nëse gjendet në TMDB)", where_placeholder:"Ku e pe?",
note_placeholder:"Shënim", save:"Ruaj", close:"Mbyll",
song_add_title:"Shto këngë", song_title_placeholder:"Titulli i këngës", artist_placeholder:"Artisti",
spotify_placeholder:"Lidhja e Spotify", song_cover_hint:"Kopertina (manuale, opsionale nëse gjendet në Spotify)",
book_add_title:"Shto libër", book_title_placeholder:"Titulli i librit",
book_cover_hint:"Kopertina (manuale, opsionale nëse gjendet në Google Books)",
author_placeholder:"Autori", pages_placeholder:"Numri i faqeve",
new_folder_title:"Dosje e re", folder_name_placeholder:"Emri i dosjes",
settings_title:"Cilësimet", theme_label:"Tema", dark:"E errët", light:"E çelët",
layout_label:"Paraqitja", cards:"Karta", list:"Listë",
sort_label:"Rendit sipas", newest:"Më të rejat", oldest:"Më të vjetrat", rating_desc:"Vlerësimi ↓", rating_asc:"Vlerësimi ↑",
az:"A-Zh", za:"Zh-A", favorites_opt:"Të preferuarat",
export_backup:"Eksporto kopjen rezervë", privacy_policy:"Politika e privatësisë", user_guide:"Udhëzuesi i përdorimit", language_label:"Gjuha",
delete_btn:"Fshi", favorite_btn:"I preferuar", share_btn:"Shpërndaj",
director_label:"Regjia:", pages_label:"faqe", no_notes:"Asnjë shënim",
stat_movies:"filma", stat_songs:"këngë", stat_books:"libra", no_reviews:"Asnjë vlerësim ende",
alert_movie_title:"Ju lutem shkruani një titull", alert_song_title:"Ju lutem shkruani titullin e këngës",
alert_book_title:"Ju lutem shkruani titullin e librit", alert_folder_name:"Ju lutem shkruani emrin e dosjes",
edit_label:"Ndrysho", delete_folder_label:"Fshi dosjen", close_folder_label:"Mbyll dosjen",
delete_folder_confirm:'Të fshihet dosja "{name}"? Elementet brenda saj nuk do të fshihen.',
contact_title:"Na kontaktoni",
contact_desc:"Gjete një gabim, ke një ide, apo thjesht dëshiron të na përshëndetësh? Dërgo një mesazh dhe do të përgjigjemi sa më shpejt.",
contact_email_placeholder:"Email-i yt", contact_message_placeholder:"Mesazhi yt",
contact_send:"Dërgo", contact_sending:"Duke dërguar...", contact_success:"Mesazhi u dërgua, faleminderit!",
contact_error_fields:"Ju lutem plotësoni të dyja fushat.", contact_error_generic:"Diçka shkoi keq. Provo përsëri.",
contact_error_network:"Gabim rrjeti. Provo përsëri.", instagram_label:"Instagram"
},

es: {
nav_all:"Todo", nav_movies:"Películas", nav_music:"Música", nav_books:"Libros", nav_favorites:"Favoritos", nav_settings:"Ajustes", nav_contact:"Contáctanos",
folders_heading:"Carpetas", new_folder:"Nueva carpeta",
hero_title1:"Tus pasiones,", hero_title2:"tu historia.", search_placeholder:"Busca en tu colección...",
rec_title:"Recomendaciones de la semana", rec_subtitle:"Películas que podrían gustarte",
add_label:"+ Añadir", added_label:"✓ Añadido",
add_title:"¿Qué quieres añadir?",
choice_movie_title:"Película", choice_movie_desc:"Reseña una película",
choice_song_title:"Música", choice_song_desc:"Guarda una canción",
choice_book_title:"Libro", choice_book_desc:"Reseña un libro",
choice_folder_title:"Carpeta", choice_folder_desc:"Crea una colección",
movie_add_title:"Añadir película", title_placeholder:"Título",
genre_placeholder:"Género (se rellena solo automáticamente)", director_placeholder:"Director (se rellena solo automáticamente)",
duration_placeholder:"Duración (se rellena solo automáticamente)", cast_placeholder:"Reparto (se rellena solo automáticamente)",
cover_hint:"Portada (manual, opcional si se encuentra en TMDB)", where_placeholder:"¿Dónde la viste?",
note_placeholder:"Nota", save:"Guardar", close:"Cerrar",
song_add_title:"Añadir canción", song_title_placeholder:"Título de la canción", artist_placeholder:"Artista",
spotify_placeholder:"Enlace de Spotify", song_cover_hint:"Portada (manual, opcional si se encuentra en Spotify)",
book_add_title:"Añadir libro", book_title_placeholder:"Título del libro",
book_cover_hint:"Portada (manual, opcional si se encuentra en Google Books)",
author_placeholder:"Autor", pages_placeholder:"Número de páginas",
new_folder_title:"Nueva carpeta", folder_name_placeholder:"Nombre de la carpeta",
settings_title:"Ajustes", theme_label:"Tema", dark:"Oscuro", light:"Claro",
layout_label:"Diseño", cards:"Tarjetas", list:"Lista",
sort_label:"Ordenar por", newest:"Más recientes", oldest:"Más antiguos", rating_desc:"Valoración ↓", rating_asc:"Valoración ↑",
az:"A-Z", za:"Z-A", favorites_opt:"Favoritos",
export_backup:"Exportar copia de seguridad", privacy_policy:"Política de privacidad", user_guide:"Guía de usuario", language_label:"Idioma",
delete_btn:"Eliminar", favorite_btn:"Favorito", share_btn:"Compartir",
director_label:"Dirección:", pages_label:"páginas", no_notes:"Sin notas",
stat_movies:"películas", stat_songs:"canciones", stat_books:"libros", no_reviews:"Aún no hay reseñas",
alert_movie_title:"Introduce un título", alert_song_title:"Introduce el título de la canción",
alert_book_title:"Introduce el título del libro", alert_folder_name:"Introduce un nombre para la carpeta",
edit_label:"Editar", delete_folder_label:"Eliminar carpeta", close_folder_label:"Cerrar carpeta",
delete_folder_confirm:'¿Eliminar la carpeta "{name}"? Los elementos que contiene no se eliminarán.',
contact_title:"Contáctanos",
contact_desc:"¿Encontraste un error, tienes una idea o solo quieres saludar? Envía un mensaje y te responderé lo antes posible.",
contact_email_placeholder:"Tu email", contact_message_placeholder:"Tu mensaje",
contact_send:"Enviar", contact_sending:"Enviando...", contact_success:"¡Mensaje enviado, gracias!",
contact_error_fields:"Por favor completa ambos campos.", contact_error_generic:"Algo salió mal. Inténtalo de nuevo.",
contact_error_network:"Error de red. Inténtalo de nuevo.", instagram_label:"Instagram"
},

fr: {
nav_all:"Tout", nav_movies:"Films", nav_music:"Musique", nav_books:"Livres", nav_favorites:"Favoris", nav_settings:"Paramètres", nav_contact:"Nous contacter",
folders_heading:"Dossiers", new_folder:"Nouveau dossier",
hero_title1:"Tes passions,", hero_title2:"ton histoire.", search_placeholder:"Rechercher dans ta collection...",
rec_title:"Sélection de la semaine", rec_subtitle:"Films qui pourraient te plaire",
add_label:"+ Ajouter", added_label:"✓ Ajouté",
add_title:"Que veux-tu ajouter ?",
choice_movie_title:"Film", choice_movie_desc:"Noter un film",
choice_song_title:"Musique", choice_song_desc:"Enregistrer une chanson",
choice_book_title:"Livre", choice_book_desc:"Noter un livre",
choice_folder_title:"Dossier", choice_folder_desc:"Créer une collection",
movie_add_title:"Ajouter un film", title_placeholder:"Titre",
genre_placeholder:"Genre (rempli automatiquement uniquement)", director_placeholder:"Réalisateur (rempli automatiquement uniquement)",
duration_placeholder:"Durée (rempli automatiquement uniquement)", cast_placeholder:"Distribution (rempli automatiquement uniquement)",
cover_hint:"Affiche (manuelle, optionnelle si trouvée sur TMDB)", where_placeholder:"Où l'as-tu vu ?",
note_placeholder:"Note", save:"Enregistrer", close:"Fermer",
song_add_title:"Ajouter une chanson", song_title_placeholder:"Titre de la chanson", artist_placeholder:"Artiste",
spotify_placeholder:"Lien Spotify", song_cover_hint:"Pochette (manuelle, optionnelle si trouvée sur Spotify)",
book_add_title:"Ajouter un livre", book_title_placeholder:"Titre du livre",
book_cover_hint:"Couverture (manuelle, optionnelle si trouvée sur Google Books)",
author_placeholder:"Auteur", pages_placeholder:"Nombre de pages",
new_folder_title:"Nouveau dossier", folder_name_placeholder:"Nom du dossier",
settings_title:"Paramètres", theme_label:"Thème", dark:"Sombre", light:"Clair",
layout_label:"Mise en page", cards:"Cartes", list:"Liste",
sort_label:"Trier par", newest:"Plus récents", oldest:"Plus anciens", rating_desc:"Note ↓", rating_asc:"Note ↑",
az:"A-Z", za:"Z-A", favorites_opt:"Favoris",
export_backup:"Exporter la sauvegarde", privacy_policy:"Politique de confidentialité", user_guide:"Guide d'utilisation", language_label:"Langue",
delete_btn:"Supprimer", favorite_btn:"Favori", share_btn:"Partager",
director_label:"Réalisation :", pages_label:"pages", no_notes:"Aucune note",
stat_movies:"films", stat_songs:"chansons", stat_books:"livres", no_reviews:"Aucun avis pour l'instant",
alert_movie_title:"Merci de saisir un titre", alert_song_title:"Merci de saisir le titre de la chanson",
alert_book_title:"Merci de saisir le titre du livre", alert_folder_name:"Merci de saisir un nom de dossier",
edit_label:"Modifier", delete_folder_label:"Supprimer le dossier", close_folder_label:"Fermer le dossier",
delete_folder_confirm:'Supprimer le dossier "{name}" ? Les éléments qu\'il contient ne seront pas supprimés.',
contact_title:"Nous contacter",
contact_desc:"Un bug trouvé, une idée, ou juste envie de dire bonjour ? Envoie un message et je te répondrai dès que possible.",
contact_email_placeholder:"Ton email", contact_message_placeholder:"Ton message",
contact_send:"Envoyer", contact_sending:"Envoi en cours...", contact_success:"Message envoyé, merci !",
contact_error_fields:"Merci de remplir les deux champs.", contact_error_generic:"Une erreur est survenue. Réessaie.",
contact_error_network:"Erreur réseau. Réessaie.", instagram_label:"Instagram"
},

de: {
nav_all:"Alle", nav_movies:"Filme", nav_music:"Musik", nav_books:"Bücher", nav_favorites:"Favoriten", nav_settings:"Einstellungen", nav_contact:"Kontakt",
folders_heading:"Ordner", new_folder:"Neuer Ordner",
hero_title1:"Deine Leidenschaften,", hero_title2:"deine Geschichte.", search_placeholder:"Durchsuche deine Sammlung...",
rec_title:"Empfehlungen der Woche", rec_subtitle:"Filme, die dir gefallen könnten",
add_label:"+ Hinzufügen", added_label:"✓ Hinzugefügt",
add_title:"Was möchtest du hinzufügen?",
choice_movie_title:"Film", choice_movie_desc:"Einen Film bewerten",
choice_song_title:"Musik", choice_song_desc:"Einen Song speichern",
choice_book_title:"Buch", choice_book_desc:"Ein Buch bewerten",
choice_folder_title:"Ordner", choice_folder_desc:"Eine Sammlung erstellen",
movie_add_title:"Film hinzufügen", title_placeholder:"Titel",
genre_placeholder:"Genre (nur automatisch ausgefüllt)", director_placeholder:"Regisseur (nur automatisch ausgefüllt)",
duration_placeholder:"Dauer (nur automatisch ausgefüllt)", cast_placeholder:"Besetzung (nur automatisch ausgefüllt)",
cover_hint:"Cover (manuell, optional falls bei TMDB gefunden)", where_placeholder:"Wo hast du ihn gesehen?",
note_placeholder:"Notiz", save:"Speichern", close:"Schließen",
song_add_title:"Song hinzufügen", song_title_placeholder:"Songtitel", artist_placeholder:"Künstler",
spotify_placeholder:"Spotify-Link", song_cover_hint:"Cover (manuell, optional falls bei Spotify gefunden)",
book_add_title:"Buch hinzufügen", book_title_placeholder:"Buchtitel",
book_cover_hint:"Cover (manuell, optional falls bei Google Books gefunden)",
author_placeholder:"Autor", pages_placeholder:"Seitenzahl",
new_folder_title:"Neuer Ordner", folder_name_placeholder:"Ordnername",
settings_title:"Einstellungen", theme_label:"Design", dark:"Dunkel", light:"Hell",
layout_label:"Layout", cards:"Karten", list:"Liste",
sort_label:"Sortieren nach", newest:"Neueste", oldest:"Älteste", rating_desc:"Bewertung ↓", rating_asc:"Bewertung ↑",
az:"A-Z", za:"Z-A", favorites_opt:"Favoriten",
export_backup:"Backup exportieren", privacy_policy:"Datenschutzerklärung", user_guide:"Bedienungsanleitung", language_label:"Sprache",
delete_btn:"Löschen", favorite_btn:"Favorit", share_btn:"Teilen",
director_label:"Regie:", pages_label:"Seiten", no_notes:"Keine Notizen",
stat_movies:"Filme", stat_songs:"Songs", stat_books:"Bücher", no_reviews:"Noch keine Bewertungen",
alert_movie_title:"Bitte gib einen Titel ein", alert_song_title:"Bitte gib den Songtitel ein",
alert_book_title:"Bitte gib den Buchtitel ein", alert_folder_name:"Bitte gib einen Ordnernamen ein",
edit_label:"Bearbeiten", delete_folder_label:"Ordner löschen", close_folder_label:"Ordner schließen",
delete_folder_confirm:'Ordner "{name}" löschen? Die enthaltenen Elemente werden dabei nicht gelöscht.',
contact_title:"Kontakt",
contact_desc:"Einen Fehler gefunden, eine Idee, oder willst du einfach nur Hallo sagen? Schick eine Nachricht, ich melde mich so schnell wie möglich.",
contact_email_placeholder:"Deine E-Mail", contact_message_placeholder:"Deine Nachricht",
contact_send:"Senden", contact_sending:"Wird gesendet...", contact_success:"Nachricht gesendet, danke!",
contact_error_fields:"Bitte fülle beide Felder aus.", contact_error_generic:"Etwas ist schiefgelaufen. Bitte versuche es erneut.",
contact_error_network:"Netzwerkfehler. Bitte versuche es erneut.", instagram_label:"Instagram"
}

};



let currentLang = localStorage.getItem("language") || "en";


// global translation helper, usable from any file loaded after this one
function t(key){

    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS.en;

    return dict[key] || TRANSLATIONS.en[key] || key;

}



function applyLanguage(lang){


    if(!TRANSLATIONS[lang]) lang = "en";


    currentLang = lang;

    document.documentElement.lang = lang;

    localStorage.setItem("language", lang);



    document.querySelectorAll("[data-i18n]").forEach(function(el){

        el.textContent = t(el.dataset.i18n);

    });



    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){

        el.placeholder = t(el.dataset.i18nPlaceholder);

    });


    // re-render dynamic content so cards/labels update immediately too
    if(typeof renderMovies === "function") renderMovies();

    if(typeof renderFolderSidebar === "function") renderFolderSidebar();


}




const languageSelect =
document.getElementById("languageSelect");


if(languageSelect){


    languageSelect.onchange = function(){

        applyLanguage(this.value);

    };


}




document.addEventListener("DOMContentLoaded", function(){


    if(languageSelect) languageSelect.value = currentLang;


    applyLanguage(currentLang);


});