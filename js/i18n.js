// ===============================
// LANGUAGE / i18n - MYVERSE
// 7 languages: it, en, sq, es, fr, de, zh
// Movie/song/artist/book titles and any other user-entered
// or API-fetched content are never translated: only interface text is.
// ===============================


const SUPPORTED_LANGUAGES = ["it","en","sq","es","fr","de","zh"];


const TRANSLATIONS = {

en: {
menu_label:"Menu",
nav_all:"All", nav_movies:"Movies", nav_music:"Music", nav_books:"Books", nav_favorites:"Favorites", nav_settings:"Settings", nav_contact:"Contact Us",
folders_heading:"Folders", new_folder:"New folder", edit_folder_title:"Edit folder",
hero_title1:"Let your passions,", hero_title2:"Become your story.", search_placeholder:"Search your collection...",
rec_title:"Just for you", rec_subtitle:"Movies you might like",
add_label:"+ Add",
add_title:"What do you want to add?",
choice_movie_title:"Movie", choice_movie_desc:"Review a movie",
choice_song_title:"Music", choice_song_desc:"Save a song",
choice_book_title:"Book", choice_book_desc:"Review a book",
choice_folder_title:"Folder", choice_folder_desc:"Create a collection",
movie_add_title:"Add movie", title_placeholder:"Title",
genre_placeholder:"Genre (auto-filled only)", director_placeholder:"Director (auto-filled only)",
duration_placeholder:"Duration (auto-filled only)", cast_placeholder:"Cast (auto-filled only)",
cover_hint:"Cover (manual, optional if found on TMDB)", where_placeholder:"Where did you watch it?",
where_cinema:"Cinema", where_other:"Other",
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
director_label:"Director:", pages_label:"pages", no_notes:"No notes", rating_label:"Rating",
stat_movies:"movies", stat_songs:"songs", stat_books:"books", no_reviews:"No reviews yet",
alert_movie_title:"Please enter a title", alert_song_title:"Please enter the song title",
alert_book_title:"Please enter the book title", alert_folder_name:"Please enter a folder name",
alert_share_failed:"Could not generate the image to share.",
edit_label:"Edit", delete_folder_label:"Delete folder", close_folder_label:"Close folder",
delete_folder_confirm:'Delete the folder "{name}"? The items inside it will not be deleted.',
contact_title:"Contact Us",
contact_desc:"Found a bug, have an idea, or just want to say hi? Send a message and I'll get back to you as soon as I can.",
contact_email_placeholder:"Your email", contact_message_placeholder:"Your message",
contact_send:"Send", contact_sending:"Sending...", contact_success:"Message sent, thank you!",
contact_error_fields:"Please fill in both fields.", contact_error_generic:"Something went wrong. Please try again.",
contact_error_network:"Network error. Please try again.", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • Created by Matteo Minniti",
privacy_title:"Privacy Policy",
privacy_p1:"MyVerse does not collect, send, or store any data on servers of its own. There is no backend: it's a site that runs entirely in your browser.",
privacy_p2:"All the movies, songs and books you add are saved only on your device, in your browser's local storage. No one but you can see them, unless you manually export your backup and share it.",
privacy_p3:"No account, login or sign-up is required to use the app, and your usage is not tracked in any way.",
privacy_p4:"When you type a movie title, that text is sent directly from your browser to TMDB (The Movie Database) to fetch the poster, genre, director, cast, duration and trailer. MyVerse does not intercept or store this request anywhere else.",
privacy_p5:"When you paste a Spotify link, that link is sent directly from your browser to Spotify to fetch the song's title and cover art, on the same principle.",
privacy_p6:"When you type a book title, that text is sent directly from your browser to Open Library to fetch the cover, author and page count.",
privacy_p7:"You can export your backup or delete all your data at any time from Settings.",
manual_title:"User Guide",
manual_p1:"Adding a movie, song or book: tap the + button in the bottom right, then choose Movie, Music or Book.",
manual_p2:"Movie: type the title. When you leave the field, the app automatically searches TMDB and fills in the poster, genre, director, duration and cast on its own — these fields are not editable by hand. You can still upload a custom cover if you prefer, using the file field below the preview.",
manual_p3:"Song: paste the Spotify link of the track in the field provided. When you leave the field, the app automatically fetches the song title and cover art. The artist still needs to be entered by hand, since Spotify doesn't provide it this way.",
manual_p4:"Book: type the title. The app tries to fetch the cover, author and page count from Open Library. Unlike movies, author and page count remain editable at any time — if you type them in yourself first, the app won't overwrite them.",
manual_p5:"Rating: tap the stars to give a score from 1 to 10.",
manual_p6:"Where you watched/listened and note: free-text fields, filled in by hand.",
manual_p7:"Trailer: if a movie has a trailer available on TMDB, you can watch it by tapping directly on the cover in the details screen — it opens on YouTube in a new tab.",
manual_p8:"Favorites: tap the heart on a card, or in the details screen, to add or remove it from favorites.",
manual_p9:"Search: use the search bar at the top to filter by title, artist, author, where you watched/listened, or note.",
manual_p10:"Filters and layout: from the side menu you can show everything, only movies, only music, only books, or only favorites. From Settings you can change the theme (dark/light), the layout (cards or list), and the sort order.",
manual_p11:"Folders: from the side menu you can create your own collections. Tap New folder, name it, then tap the items you want to include — an item can belong to more than one folder at the same time.",
manual_p12:"Backup: from Settings you can export all your data to a file, to keep it safe or move it to another device, and import it again whenever you want.",
manual_p13:"Deleting an item: tap the Delete button on the card or in the details screen. This action is permanent."
},

it: {
menu_label:"Menu",
nav_all:"Tutti", nav_movies:"Film", nav_music:"Musica", nav_books:"Libri", nav_favorites:"Preferiti", nav_settings:"Impostazioni", nav_contact:"Contattaci",
folders_heading:"Cartelle", new_folder:"Nuova cartella", edit_folder_title:"Modifica cartella",
hero_title1:"Le tue passioni,", hero_title2:"la tua storia.", search_placeholder:"Cerca nella tua collezione...",
rec_title:"I consigli della settimana", rec_subtitle:"Film che potrebbero piacerti",
add_label:"+ Aggiungi",
add_title:"Cosa vuoi aggiungere?",
choice_movie_title:"Film", choice_movie_desc:"Recensisci un film",
choice_song_title:"Musica", choice_song_desc:"Salva una canzone",
choice_book_title:"Libro", choice_book_desc:"Recensisci un libro",
choice_folder_title:"Cartella", choice_folder_desc:"Crea una collezione",
movie_add_title:"Aggiungi film", title_placeholder:"Titolo",
genre_placeholder:"Genere (compilabile solo automaticamente)", director_placeholder:"Regista (compilabile solo automaticamente)",
duration_placeholder:"Durata (compilabile solo automaticamente)", cast_placeholder:"Cast (compilabile solo automaticamente)",
cover_hint:"Copertina (manuale, opzionale se trovata su TMDB)", where_placeholder:"Dove lo hai visto?",
where_cinema:"Cinema", where_other:"Altro",
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
director_label:"Regia:", pages_label:"pagine", no_notes:"Nessuna nota", rating_label:"Voto",
stat_movies:"film", stat_songs:"canzoni", stat_books:"libri", no_reviews:"Nessuna recensione aggiunta",
alert_movie_title:"Inserisci un titolo", alert_song_title:"Inserisci il titolo della canzone",
alert_book_title:"Inserisci il titolo del libro", alert_folder_name:"Inserisci un nome per la cartella",
alert_share_failed:"Impossibile generare l'immagine da condividere.",
edit_label:"Modifica", delete_folder_label:"Elimina cartella", close_folder_label:"Chiudi cartella",
delete_folder_confirm:'Eliminare la cartella "{name}"? Gli elementi al suo interno non verranno cancellati.',
contact_title:"Contattaci",
contact_desc:"Hai trovato un bug, hai un'idea o vuoi solo salutare? Scrivi un messaggio e ti risponderò appena possibile.",
contact_email_placeholder:"La tua email", contact_message_placeholder:"Il tuo messaggio",
contact_send:"Invia", contact_sending:"Invio in corso...", contact_success:"Messaggio inviato, grazie!",
contact_error_fields:"Compila entrambi i campi.", contact_error_generic:"Qualcosa è andato storto. Riprova.",
contact_error_network:"Errore di rete. Riprova.", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • Creato da Matteo Minniti",
privacy_title:"Informativa Privacy",
privacy_p1:"MyVerse non raccoglie, invia o memorizza alcun dato su server propri. Non esiste un backend: è un sito che funziona interamente nel tuo browser.",
privacy_p2:"Tutti i film, le canzoni e i libri che aggiungi vengono salvati solo sul tuo dispositivo, nella memoria locale del browser. Nessuno può vederli tranne te, a meno che tu non esporti manualmente il backup e lo condivida.",
privacy_p3:"Non è richiesto alcun account, accesso o registrazione per usare l'app, e il tuo utilizzo non viene tracciato in alcun modo.",
privacy_p4:"Quando digiti il titolo di un film, quel testo viene inviato direttamente dal tuo browser a TMDB (The Movie Database) per recuperare locandina, genere, regista, cast, durata e trailer. MyVerse non intercetta né memorizza questa richiesta altrove.",
privacy_p5:"Quando incolli un link Spotify, quel link viene inviato direttamente dal tuo browser a Spotify per recuperare titolo e copertina della canzone, con lo stesso principio.",
privacy_p6:"Quando digiti il titolo di un libro, quel testo viene inviato direttamente dal tuo browser a Open Library per recuperare copertina, autore e numero di pagine.",
privacy_p7:"Puoi esportare il backup o cancellare tutti i tuoi dati in qualsiasi momento dalle Impostazioni.",
manual_title:"Manuale d'uso",
manual_p1:"Aggiungere un film, una canzone o un libro: tocca il pulsante + in basso a destra, poi scegli Film, Musica o Libro.",
manual_p2:"Film: digita il titolo. Quando esci dal campo, l'app cerca automaticamente su TMDB e compila da sola locandina, genere, regista, durata e cast — questi campi non sono modificabili a mano. Puoi comunque caricare una copertina personalizzata, se preferisci, usando il campo file sotto l'anteprima.",
manual_p3:"Canzone: incolla il link Spotify del brano nel campo apposito. Quando esci dal campo, l'app recupera automaticamente titolo e copertina della canzone. L'artista va comunque inserito a mano, perché Spotify non lo fornisce in questo modo.",
manual_p4:"Libro: digita il titolo. L'app prova a recuperare copertina, autore e numero di pagine da Open Library. A differenza dei film, autore e numero di pagine restano sempre modificabili — se li digiti tu per primo, l'app non li sovrascrive.",
manual_p5:"Voto: tocca le stelle per dare un punteggio da 1 a 10.",
manual_p6:"Dove l'hai visto/ascoltato e nota: campi di testo libero, da compilare a mano.",
manual_p7:"Trailer: se un film ha un trailer disponibile su TMDB, puoi guardarlo toccando direttamente la copertina nella schermata dei dettagli — si apre su YouTube in una nuova scheda.",
manual_p8:"Preferiti: tocca il cuore su una card, o nella schermata dei dettagli, per aggiungere o rimuovere un elemento dai preferiti.",
manual_p9:"Ricerca: usa la barra di ricerca in alto per filtrare per titolo, artista, autore, dove l'hai visto/ascoltato o nota.",
manual_p10:"Filtri e layout: dal menu laterale puoi mostrare tutto, solo film, solo musica, solo libri o solo preferiti. Dalle Impostazioni puoi cambiare il tema (scuro/chiaro), il layout (card o lista) e l'ordinamento.",
manual_p11:"Cartelle: dal menu laterale puoi creare le tue collezioni. Tocca Nuova cartella, dalle un nome, poi tocca gli elementi che vuoi includere — un elemento può appartenere a più cartelle contemporaneamente.",
manual_p12:"Backup: dalle Impostazioni puoi esportare tutti i tuoi dati in un file, per tenerli al sicuro o spostarli su un altro dispositivo, e importarli di nuovo quando vuoi.",
manual_p13:"Eliminare un elemento: tocca il pulsante Elimina sulla card o nella schermata dei dettagli. Questa azione è permanente."
},

sq: {
menu_label:"Menyja",
nav_all:"Të gjitha", nav_movies:"Filma", nav_music:"Muzikë", nav_books:"Libra", nav_favorites:"Të preferuarat", nav_settings:"Cilësimet", nav_contact:"Na kontaktoni",
folders_heading:"Dosjet", new_folder:"Dosje e re", edit_folder_title:"Ndrysho dosjen",
hero_title1:"Pasionet e tua,", hero_title2:"historia jote.", search_placeholder:"Kërko në koleksionin tënd...",
rec_title:"Zgjedhjet e kësaj jave", rec_subtitle:"Filma që mund të të pëlqejnë",
add_label:"+ Shto",
add_title:"Çfarë dëshiron të shtosh?",
choice_movie_title:"Film", choice_movie_desc:"Vlerëso një film",
choice_song_title:"Muzikë", choice_song_desc:"Ruaj një këngë",
choice_book_title:"Libër", choice_book_desc:"Vlerëso një libër",
choice_folder_title:"Dosje", choice_folder_desc:"Krijo një koleksion",
movie_add_title:"Shto film", title_placeholder:"Titulli",
genre_placeholder:"Zhanri (plotësohet vetëm automatikisht)", director_placeholder:"Regjisori (plotësohet vetëm automatikisht)",
duration_placeholder:"Kohëzgjatja (plotësohet vetëm automatikisht)", cast_placeholder:"Aktorët (plotësohet vetëm automatikisht)",
cover_hint:"Kopertina (manuale, opsionale nëse gjendet në TMDB)", where_placeholder:"Ku e pe?",
where_cinema:"Kinema", where_other:"Tjetër",
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
director_label:"Regjia:", pages_label:"faqe", no_notes:"Asnjë shënim", rating_label:"Vlerësimi",
stat_movies:"filma", stat_songs:"këngë", stat_books:"libra", no_reviews:"Asnjë vlerësim ende",
alert_movie_title:"Ju lutem shkruani një titull", alert_song_title:"Ju lutem shkruani titullin e këngës",
alert_book_title:"Ju lutem shkruani titullin e librit", alert_folder_name:"Ju lutem shkruani emrin e dosjes",
alert_share_failed:"Nuk u krijua dot imazhi për ta shpërndarë.",
edit_label:"Ndrysho", delete_folder_label:"Fshi dosjen", close_folder_label:"Mbyll dosjen",
delete_folder_confirm:'Të fshihet dosja "{name}"? Elementet brenda saj nuk do të fshihen.',
contact_title:"Na kontaktoni",
contact_desc:"Gjete një gabim, ke një ide, apo thjesht dëshiron të na përshëndetësh? Dërgo një mesazh dhe do të përgjigjemi sa më shpejt.",
contact_email_placeholder:"Email-i yt", contact_message_placeholder:"Mesazhi yt",
contact_send:"Dërgo", contact_sending:"Duke dërguar...", contact_success:"Mesazhi u dërgua, faleminderit!",
contact_error_fields:"Ju lutem plotësoni të dyja fushat.", contact_error_generic:"Diçka shkoi keq. Provo përsëri.",
contact_error_network:"Gabim rrjeti. Provo përsëri.", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • Krijuar nga Matteo Minniti",
privacy_title:"Politika e privatësisë",
privacy_p1:"MyVerse nuk mbledh, dërgon apo ruan asnjë të dhënë në serverat e vet. Nuk ka backend: është një sajt që funksionon tërësisht në shfletuesin tënd.",
privacy_p2:"Të gjithë filmat, këngët dhe librat që shton ruhen vetëm në pajisjen tënde, në hapësirën lokale të shfletuesit. Askush përveç teje nuk i sheh, përveçse nëse eksporton manualisht kopjen rezervë dhe e shpërndan.",
privacy_p3:"Nuk kërkohet asnjë llogari, hyrje apo regjistrim për të përdorur aplikacionin, dhe përdorimi yt nuk gjurmohet në asnjë mënyrë.",
privacy_p4:"Kur shkruan titullin e një filmi, ai tekst dërgohet direkt nga shfletuesi yt te TMDB (The Movie Database) për të marrë posterin, zhanrin, regjisorin, aktorët, kohëzgjatjen dhe trailer-in. MyVerse nuk e përgjon apo ruan këtë kërkesë diku tjetër.",
privacy_p5:"Kur ngjit një lidhje Spotify, ajo lidhje dërgohet direkt nga shfletuesi yt te Spotify për të marrë titullin dhe kopertinën e këngës, sipas të njëjtit parim.",
privacy_p6:"Kur shkruan titullin e një libri, ai tekst dërgohet direkt nga shfletuesi yt te Open Library për të marrë kopertinën, autorin dhe numrin e faqeve.",
privacy_p7:"Mund të eksportosh kopjen rezervë ose të fshish të gjitha të dhënat e tua në çdo moment nga Cilësimet.",
manual_title:"Udhëzuesi i përdorimit",
manual_p1:"Për të shtuar një film, këngë apo libër: shtyp butonin + poshtë djathtas, pastaj zgjidh Film, Muzikë ose Libër.",
manual_p2:"Film: shkruaj titullin. Kur del nga fusha, aplikacioni kërkon automatikisht në TMDB dhe plotëson vetë posterin, zhanrin, regjisorin, kohëzgjatjen dhe aktorët — këto fusha nuk redaktohen dorazi. Gjithsesi mund të ngarkosh një kopertinë tënden, nëse preferon, duke përdorur fushën e skedarit nën parapamje.",
manual_p3:"Këngë: ngjit lidhjen Spotify të këngës në fushën përkatëse. Kur del nga fusha, aplikacioni merr automatikisht titullin dhe kopertinën e këngës. Artisti duhet shkruar ende dorazi, sepse Spotify nuk e jep në këtë mënyrë.",
manual_p4:"Libër: shkruaj titullin. Aplikacioni përpiqet të marrë kopertinën, autorin dhe numrin e faqeve nga Open Library. Ndryshe nga filmat, autori dhe numri i faqeve mbeten gjithmonë të redaktueshëm — nëse i shkruan vetë i pari, aplikacioni nuk i mbishkruan.",
manual_p5:"Vlerësimi: shtyp yjet për të dhënë një pikëzim nga 1 deri në 10.",
manual_p6:"Ku e ke parë/dëgjuar dhe shënimi: fusha teksti të lira, plotësohen dorazi.",
manual_p7:"Trailer: nëse një film ka trailer të disponueshëm në TMDB, mund ta shikosh duke shtypur direkt mbi kopertinë në ekranin e detajeve — hapet në YouTube në një skedë të re.",
manual_p8:"Të preferuarat: shtyp zemrën mbi një kartë, ose në ekranin e detajeve, për ta shtuar apo hequr nga të preferuarat.",
manual_p9:"Kërkimi: përdor shiritin e kërkimit sipër për të filtruar sipas titullit, artistit, autorit, vendit ku e ke parë/dëgjuar, ose shënimit.",
manual_p10:"Filtrat dhe paraqitja: nga menyja anësore mund të shfaqësh gjithçka, vetëm filma, vetëm muzikë, vetëm libra, ose vetëm të preferuarat. Nga Cilësimet mund të ndryshosh temën (e errët/e çelët), paraqitjen (karta ose listë) dhe renditjen.",
manual_p11:"Dosjet: nga menyja anësore mund të krijosh koleksionet e tua. Shtyp Dosje e re, jepi një emër, pastaj shtyp elementet që dëshiron të përfshish — një element mund t'i përkasë njëkohësisht më shumë se një dosjeje.",
manual_p12:"Kopja rezervë: nga Cilësimet mund të eksportosh të gjitha të dhënat e tua në një skedar, për t'i mbajtur të sigurta ose për t'i kaluar në një pajisje tjetër, dhe t'i importosh sërish kur të duash.",
manual_p13:"Fshirja e një elementi: shtyp butonin Fshi mbi kartë ose në ekranin e detajeve. Ky veprim është i përhershëm."
},

es: {
menu_label:"Menú",
nav_all:"Todo", nav_movies:"Películas", nav_music:"Música", nav_books:"Libros", nav_favorites:"Favoritos", nav_settings:"Ajustes", nav_contact:"Contáctanos",
folders_heading:"Carpetas", new_folder:"Nueva carpeta", edit_folder_title:"Editar carpeta",
hero_title1:"Tus pasiones,", hero_title2:"tu historia.", search_placeholder:"Busca en tu colección...",
rec_title:"Recomendaciones de la semana", rec_subtitle:"Películas que podrían gustarte",
add_label:"+ Añadir",
add_title:"¿Qué quieres añadir?",
choice_movie_title:"Película", choice_movie_desc:"Reseña una película",
choice_song_title:"Música", choice_song_desc:"Guarda una canción",
choice_book_title:"Libro", choice_book_desc:"Reseña un libro",
choice_folder_title:"Carpeta", choice_folder_desc:"Crea una colección",
movie_add_title:"Añadir película", title_placeholder:"Título",
genre_placeholder:"Género (se rellena solo automáticamente)", director_placeholder:"Director (se rellena solo automáticamente)",
duration_placeholder:"Duración (se rellena solo automáticamente)", cast_placeholder:"Reparto (se rellena solo automáticamente)",
cover_hint:"Portada (manual, opcional si se encuentra en TMDB)", where_placeholder:"¿Dónde la viste?",
where_cinema:"Cine", where_other:"Otro",
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
director_label:"Dirección:", pages_label:"páginas", no_notes:"Sin notas", rating_label:"Valoración",
stat_movies:"películas", stat_songs:"canciones", stat_books:"libros", no_reviews:"Aún no hay reseñas",
alert_movie_title:"Introduce un título", alert_song_title:"Introduce el título de la canción",
alert_book_title:"Introduce el título del libro", alert_folder_name:"Introduce un nombre para la carpeta",
alert_share_failed:"No se pudo generar la imagen para compartir.",
edit_label:"Editar", delete_folder_label:"Eliminar carpeta", close_folder_label:"Cerrar carpeta",
delete_folder_confirm:'¿Eliminar la carpeta "{name}"? Los elementos que contiene no se eliminarán.',
contact_title:"Contáctanos",
contact_desc:"¿Encontraste un error, tienes una idea o solo quieres saludar? Envía un mensaje y te responderé lo antes posible.",
contact_email_placeholder:"Tu email", contact_message_placeholder:"Tu mensaje",
contact_send:"Enviar", contact_sending:"Enviando...", contact_success:"¡Mensaje enviado, gracias!",
contact_error_fields:"Por favor completa ambos campos.", contact_error_generic:"Algo salió mal. Inténtalo de nuevo.",
contact_error_network:"Error de red. Inténtalo de nuevo.", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • Creado por Matteo Minniti",
privacy_title:"Política de privacidad",
privacy_p1:"MyVerse no recopila, envía ni almacena ningún dato en servidores propios. No existe un backend: es un sitio que funciona íntegramente en tu navegador.",
privacy_p2:"Todas las películas, canciones y libros que añades se guardan solo en tu dispositivo, en el almacenamiento local de tu navegador. Nadie más que tú puede verlos, a menos que exportes manualmente tu copia de seguridad y la compartas.",
privacy_p3:"No se requiere ninguna cuenta, inicio de sesión ni registro para usar la aplicación, y tu uso no se rastrea de ninguna manera.",
privacy_p4:"Cuando escribes el título de una película, ese texto se envía directamente desde tu navegador a TMDB (The Movie Database) para obtener el póster, el género, el director, el reparto, la duración y el tráiler. MyVerse no intercepta ni almacena esta solicitud en ningún otro lugar.",
privacy_p5:"Cuando pegas un enlace de Spotify, ese enlace se envía directamente desde tu navegador a Spotify para obtener el título y la portada de la canción, siguiendo el mismo principio.",
privacy_p6:"Cuando escribes el título de un libro, ese texto se envía directamente desde tu navegador a Open Library para obtener la portada, el autor y el número de páginas.",
privacy_p7:"Puedes exportar tu copia de seguridad o eliminar todos tus datos en cualquier momento desde Ajustes.",
manual_title:"Guía de usuario",
manual_p1:"Añadir una película, canción o libro: toca el botón + de la esquina inferior derecha y elige Película, Música o Libro.",
manual_p2:"Película: escribe el título. Al salir del campo, la app busca automáticamente en TMDB y rellena por sí sola el póster, el género, el director, la duración y el reparto — estos campos no se pueden editar a mano. Aun así puedes subir una portada personalizada, si lo prefieres, usando el campo de archivo debajo de la vista previa.",
manual_p3:"Canción: pega el enlace de Spotify de la pista en el campo correspondiente. Al salir del campo, la app obtiene automáticamente el título y la portada de la canción. El artista sigue debiendo introducirse a mano, ya que Spotify no lo proporciona de esta forma.",
manual_p4:"Libro: escribe el título. La app intenta obtener la portada, el autor y el número de páginas desde Open Library. A diferencia de las películas, el autor y el número de páginas siguen siendo editables en cualquier momento — si los escribes tú primero, la app no los sobrescribirá.",
manual_p5:"Valoración: toca las estrellas para dar una puntuación del 1 al 10.",
manual_p6:"Dónde lo viste/escuchaste y nota: campos de texto libre, que se rellenan a mano.",
manual_p7:"Tráiler: si una película tiene un tráiler disponible en TMDB, puedes verlo tocando directamente la portada en la pantalla de detalles — se abre en YouTube en una nueva pestaña.",
manual_p8:"Favoritos: toca el corazón de una tarjeta, o en la pantalla de detalles, para añadirlo o quitarlo de favoritos.",
manual_p9:"Búsqueda: usa la barra de búsqueda superior para filtrar por título, artista, autor, dónde lo viste/escuchaste o nota.",
manual_p10:"Filtros y diseño: desde el menú lateral puedes mostrar todo, solo películas, solo música, solo libros o solo favoritos. Desde Ajustes puedes cambiar el tema (oscuro/claro), el diseño (tarjetas o lista) y el orden.",
manual_p11:"Carpetas: desde el menú lateral puedes crear tus propias colecciones. Toca Nueva carpeta, ponle un nombre y luego toca los elementos que quieras incluir — un elemento puede pertenecer a más de una carpeta a la vez.",
manual_p12:"Copia de seguridad: desde Ajustes puedes exportar todos tus datos a un archivo, para mantenerlos a salvo o pasarlos a otro dispositivo, y volver a importarlos cuando quieras.",
manual_p13:"Eliminar un elemento: toca el botón Eliminar en la tarjeta o en la pantalla de detalles. Esta acción es permanente."
},

fr: {
menu_label:"Menu",
nav_all:"Tout", nav_movies:"Films", nav_music:"Musique", nav_books:"Livres", nav_favorites:"Favoris", nav_settings:"Paramètres", nav_contact:"Nous contacter",
folders_heading:"Dossiers", new_folder:"Nouveau dossier", edit_folder_title:"Modifier le dossier",
hero_title1:"Tes passions,", hero_title2:"ton histoire.", search_placeholder:"Rechercher dans ta collection...",
rec_title:"Sélection de la semaine", rec_subtitle:"Films qui pourraient te plaire",
add_label:"+ Ajouter",
add_title:"Que veux-tu ajouter ?",
choice_movie_title:"Film", choice_movie_desc:"Noter un film",
choice_song_title:"Musique", choice_song_desc:"Enregistrer une chanson",
choice_book_title:"Livre", choice_book_desc:"Noter un livre",
choice_folder_title:"Dossier", choice_folder_desc:"Créer une collection",
movie_add_title:"Ajouter un film", title_placeholder:"Titre",
genre_placeholder:"Genre (rempli automatiquement uniquement)", director_placeholder:"Réalisateur (rempli automatiquement uniquement)",
duration_placeholder:"Durée (rempli automatiquement uniquement)", cast_placeholder:"Distribution (rempli automatiquement uniquement)",
cover_hint:"Affiche (manuelle, optionnelle si trouvée sur TMDB)", where_placeholder:"Où l'as-tu vu ?",
where_cinema:"Cinéma", where_other:"Autre",
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
director_label:"Réalisation :", pages_label:"pages", no_notes:"Aucune note", rating_label:"Note",
stat_movies:"films", stat_songs:"chansons", stat_books:"livres", no_reviews:"Aucun avis pour l'instant",
alert_movie_title:"Merci de saisir un titre", alert_song_title:"Merci de saisir le titre de la chanson",
alert_book_title:"Merci de saisir le titre du livre", alert_folder_name:"Merci de saisir un nom de dossier",
alert_share_failed:"Impossible de générer l'image à partager.",
edit_label:"Modifier", delete_folder_label:"Supprimer le dossier", close_folder_label:"Fermer le dossier",
delete_folder_confirm:'Supprimer le dossier "{name}" ? Les éléments qu\'il contient ne seront pas supprimés.',
contact_title:"Nous contacter",
contact_desc:"Un bug trouvé, une idée, ou juste envie de dire bonjour ? Envoie un message et je te répondrai dès que possible.",
contact_email_placeholder:"Ton email", contact_message_placeholder:"Ton message",
contact_send:"Envoyer", contact_sending:"Envoi en cours...", contact_success:"Message envoyé, merci !",
contact_error_fields:"Merci de remplir les deux champs.", contact_error_generic:"Une erreur est survenue. Réessaie.",
contact_error_network:"Erreur réseau. Réessaie.", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • Créé par Matteo Minniti",
privacy_title:"Politique de confidentialité",
privacy_p1:"MyVerse ne collecte, n'envoie ni ne stocke aucune donnée sur ses propres serveurs. Il n'y a pas de backend : c'est un site qui fonctionne entièrement dans ton navigateur.",
privacy_p2:"Tous les films, chansons et livres que tu ajoutes sont enregistrés uniquement sur ton appareil, dans le stockage local de ton navigateur. Personne d'autre que toi ne peut les voir, à moins que tu n'exportes manuellement ta sauvegarde et que tu la partages.",
privacy_p3:"Aucun compte, aucune connexion ni inscription n'est nécessaire pour utiliser l'application, et ton utilisation n'est suivie d'aucune manière.",
privacy_p4:"Quand tu saisis le titre d'un film, ce texte est envoyé directement depuis ton navigateur à TMDB (The Movie Database) pour récupérer l'affiche, le genre, le réalisateur, la distribution, la durée et la bande-annonce. MyVerse n'intercepte ni ne stocke cette requête ailleurs.",
privacy_p5:"Quand tu colles un lien Spotify, ce lien est envoyé directement depuis ton navigateur à Spotify pour récupérer le titre et la pochette de la chanson, selon le même principe.",
privacy_p6:"Quand tu saisis le titre d'un livre, ce texte est envoyé directement depuis ton navigateur à Open Library pour récupérer la couverture, l'auteur et le nombre de pages.",
privacy_p7:"Tu peux exporter ta sauvegarde ou supprimer toutes tes données à tout moment depuis les Paramètres.",
manual_title:"Guide d'utilisation",
manual_p1:"Ajouter un film, une chanson ou un livre : appuie sur le bouton + en bas à droite, puis choisis Film, Musique ou Livre.",
manual_p2:"Film : saisis le titre. Quand tu quittes le champ, l'application recherche automatiquement sur TMDB et remplit elle-même l'affiche, le genre, le réalisateur, la durée et la distribution — ces champs ne sont pas modifiables à la main. Tu peux tout de même importer une affiche personnalisée, si tu préfères, via le champ fichier sous l'aperçu.",
manual_p3:"Chanson : colle le lien Spotify du titre dans le champ prévu à cet effet. Quand tu quittes le champ, l'application récupère automatiquement le titre et la pochette de la chanson. L'artiste doit encore être saisi à la main, car Spotify ne le fournit pas de cette façon.",
manual_p4:"Livre : saisis le titre. L'application essaie de récupérer la couverture, l'auteur et le nombre de pages depuis Open Library. Contrairement aux films, l'auteur et le nombre de pages restent modifiables à tout moment — si tu les saisis toi-même en premier, l'application ne les écrasera pas.",
manual_p5:"Note : appuie sur les étoiles pour donner une note de 1 à 10.",
manual_p6:"Où tu l'as vu/écouté et note : champs de texte libre, à remplir à la main.",
manual_p7:"Bande-annonce : si un film a une bande-annonce disponible sur TMDB, tu peux la regarder en appuyant directement sur l'affiche dans l'écran de détails — elle s'ouvre sur YouTube dans un nouvel onglet.",
manual_p8:"Favoris : appuie sur le cœur d'une carte, ou dans l'écran de détails, pour l'ajouter ou le retirer des favoris.",
manual_p9:"Recherche : utilise la barre de recherche en haut pour filtrer par titre, artiste, auteur, lieu de visionnage/écoute ou note.",
manual_p10:"Filtres et affichage : depuis le menu latéral, tu peux tout afficher, ou uniquement les films, la musique, les livres, ou les favoris. Depuis les Paramètres, tu peux changer le thème (sombre/clair), l'affichage (cartes ou liste) et le tri.",
manual_p11:"Dossiers : depuis le menu latéral, tu peux créer tes propres collections. Appuie sur Nouveau dossier, donne-lui un nom, puis appuie sur les éléments que tu veux inclure — un élément peut appartenir à plusieurs dossiers à la fois.",
manual_p12:"Sauvegarde : depuis les Paramètres, tu peux exporter toutes tes données dans un fichier, pour les garder en sécurité ou les transférer sur un autre appareil, et les réimporter quand tu veux.",
manual_p13:"Supprimer un élément : appuie sur le bouton Supprimer sur la carte ou dans l'écran de détails. Cette action est définitive."
},

de: {
menu_label:"Menü",
nav_all:"Alle", nav_movies:"Filme", nav_music:"Musik", nav_books:"Bücher", nav_favorites:"Favoriten", nav_settings:"Einstellungen", nav_contact:"Kontakt",
folders_heading:"Ordner", new_folder:"Neuer Ordner", edit_folder_title:"Ordner bearbeiten",
hero_title1:"Deine Leidenschaften,", hero_title2:"deine Geschichte.", search_placeholder:"Durchsuche deine Sammlung...",
rec_title:"Empfehlungen der Woche", rec_subtitle:"Filme, die dir gefallen könnten",
add_label:"+ Hinzufügen",
add_title:"Was möchtest du hinzufügen?",
choice_movie_title:"Film", choice_movie_desc:"Einen Film bewerten",
choice_song_title:"Musik", choice_song_desc:"Einen Song speichern",
choice_book_title:"Buch", choice_book_desc:"Ein Buch bewerten",
choice_folder_title:"Ordner", choice_folder_desc:"Eine Sammlung erstellen",
movie_add_title:"Film hinzufügen", title_placeholder:"Titel",
genre_placeholder:"Genre (nur automatisch ausgefüllt)", director_placeholder:"Regisseur (nur automatisch ausgefüllt)",
duration_placeholder:"Dauer (nur automatisch ausgefüllt)", cast_placeholder:"Besetzung (nur automatisch ausgefüllt)",
cover_hint:"Cover (manuell, optional falls bei TMDB gefunden)", where_placeholder:"Wo hast du ihn gesehen?",
where_cinema:"Kino", where_other:"Sonstiges",
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
director_label:"Regie:", pages_label:"Seiten", no_notes:"Keine Notizen", rating_label:"Bewertung",
stat_movies:"Filme", stat_songs:"Songs", stat_books:"Bücher", no_reviews:"Noch keine Bewertungen",
alert_movie_title:"Bitte gib einen Titel ein", alert_song_title:"Bitte gib den Songtitel ein",
alert_book_title:"Bitte gib den Buchtitel ein", alert_folder_name:"Bitte gib einen Ordnernamen ein",
alert_share_failed:"Das Bild zum Teilen konnte nicht erstellt werden.",
edit_label:"Bearbeiten", delete_folder_label:"Ordner löschen", close_folder_label:"Ordner schließen",
delete_folder_confirm:'Ordner "{name}" löschen? Die enthaltenen Elemente werden dabei nicht gelöscht.',
contact_title:"Kontakt",
contact_desc:"Einen Fehler gefunden, eine Idee, oder willst du einfach nur Hallo sagen? Schick eine Nachricht, ich melde mich so schnell wie möglich.",
contact_email_placeholder:"Deine E-Mail", contact_message_placeholder:"Deine Nachricht",
contact_send:"Senden", contact_sending:"Wird gesendet...", contact_success:"Nachricht gesendet, danke!",
contact_error_fields:"Bitte fülle beide Felder aus.", contact_error_generic:"Etwas ist schiefgelaufen. Bitte versuche es erneut.",
contact_error_network:"Netzwerkfehler. Bitte versuche es erneut.", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • Erstellt von Matteo Minniti",
privacy_title:"Datenschutzerklärung",
privacy_p1:"MyVerse sammelt, sendet oder speichert keine Daten auf eigenen Servern. Es gibt kein Backend: Die Seite läuft vollständig in deinem Browser.",
privacy_p2:"Alle Filme, Songs und Bücher, die du hinzufügst, werden nur auf deinem Gerät gespeichert, im lokalen Speicher deines Browsers. Niemand außer dir kann sie sehen, es sei denn, du exportierst dein Backup manuell und teilst es.",
privacy_p3:"Für die Nutzung der App ist kein Konto, kein Login und keine Registrierung erforderlich, und deine Nutzung wird in keiner Weise nachverfolgt.",
privacy_p4:"Wenn du einen Filmtitel eingibst, wird dieser Text direkt von deinem Browser an TMDB (The Movie Database) gesendet, um Poster, Genre, Regisseur, Besetzung, Dauer und Trailer abzurufen. MyVerse fängt diese Anfrage nirgendwo sonst ab und speichert sie auch nicht.",
privacy_p5:"Wenn du einen Spotify-Link einfügst, wird dieser Link nach demselben Prinzip direkt von deinem Browser an Spotify gesendet, um Songtitel und Cover abzurufen.",
privacy_p6:"Wenn du einen Buchtitel eingibst, wird dieser Text direkt von deinem Browser an Open Library gesendet, um Cover, Autor und Seitenzahl abzurufen.",
privacy_p7:"Du kannst dein Backup jederzeit über die Einstellungen exportieren oder alle deine Daten löschen.",
manual_title:"Bedienungsanleitung",
manual_p1:"Einen Film, Song oder ein Buch hinzufügen: Tippe unten rechts auf die Schaltfläche +, wähle dann Film, Musik oder Buch.",
manual_p2:"Film: Gib den Titel ein. Wenn du das Feld verlässt, durchsucht die App automatisch TMDB und füllt Poster, Genre, Regisseur, Dauer und Besetzung von selbst aus — diese Felder lassen sich nicht von Hand bearbeiten. Du kannst dennoch ein eigenes Cover hochladen, falls gewünscht, über das Dateifeld unter der Vorschau.",
manual_p3:"Song: Füge den Spotify-Link des Titels in das entsprechende Feld ein. Wenn du das Feld verlässt, ruft die App automatisch Songtitel und Cover ab. Der Künstler muss weiterhin von Hand eingegeben werden, da Spotify ihn auf diesem Weg nicht bereitstellt.",
manual_p4:"Buch: Gib den Titel ein. Die App versucht, Cover, Autor und Seitenzahl von Open Library abzurufen. Anders als bei Filmen bleiben Autor und Seitenzahl jederzeit bearbeitbar — wenn du sie zuerst selbst eingibst, überschreibt die App sie nicht.",
manual_p5:"Bewertung: Tippe auf die Sterne, um eine Bewertung von 1 bis 10 zu vergeben.",
manual_p6:"Wo du es gesehen/gehört hast und Notiz: Freitextfelder, die von Hand ausgefüllt werden.",
manual_p7:"Trailer: Wenn ein Film einen auf TMDB verfügbaren Trailer hat, kannst du ihn dir ansehen, indem du in der Detailansicht direkt auf das Cover tippst — er öffnet sich in einem neuen Tab auf YouTube.",
manual_p8:"Favoriten: Tippe auf das Herz auf einer Karte oder in der Detailansicht, um sie zu den Favoriten hinzuzufügen oder daraus zu entfernen.",
manual_p9:"Suche: Nutze die Suchleiste oben, um nach Titel, Künstler, Autor, Ort (gesehen/gehört) oder Notiz zu filtern.",
manual_p10:"Filter und Layout: Über das Seitenmenü kannst du alles, nur Filme, nur Musik, nur Bücher oder nur Favoriten anzeigen. In den Einstellungen kannst du das Design (dunkel/hell), das Layout (Karten oder Liste) und die Sortierung ändern.",
manual_p11:"Ordner: Über das Seitenmenü kannst du eigene Sammlungen erstellen. Tippe auf Neuer Ordner, gib ihm einen Namen und tippe dann auf die Elemente, die du einschließen möchtest — ein Element kann gleichzeitig zu mehreren Ordnern gehören.",
manual_p12:"Backup: In den Einstellungen kannst du alle deine Daten in eine Datei exportieren, um sie zu sichern oder auf ein anderes Gerät zu übertragen, und sie jederzeit wieder importieren.",
manual_p13:"Ein Element löschen: Tippe auf die Schaltfläche Löschen auf der Karte oder in der Detailansicht. Diese Aktion ist endgültig."
},

zh: {
menu_label:"菜单",
nav_all:"全部", nav_movies:"电影", nav_music:"音乐", nav_books:"图书", nav_favorites:"收藏", nav_settings:"设置", nav_contact:"联系我们",
folders_heading:"文件夹", new_folder:"新建文件夹", edit_folder_title:"编辑文件夹",
hero_title1:"让你的热爱，", hero_title2:"成为你的故事。", search_placeholder:"搜索你的收藏...",
rec_title:"本周推荐", rec_subtitle:"你可能会喜欢的电影",
add_label:"+ 添加",
add_title:"你想添加什么？",
choice_movie_title:"电影", choice_movie_desc:"评价一部电影",
choice_song_title:"音乐", choice_song_desc:"保存一首歌曲",
choice_book_title:"图书", choice_book_desc:"评价一本书",
choice_folder_title:"文件夹", choice_folder_desc:"创建一个收藏集",
movie_add_title:"添加电影", title_placeholder:"标题",
genre_placeholder:"类型（仅自动填写）", director_placeholder:"导演（仅自动填写）",
duration_placeholder:"时长（仅自动填写）", cast_placeholder:"演员（仅自动填写）",
cover_hint:"封面（手动上传，如在 TMDB 找到则可选）", where_placeholder:"你在哪里看的？",
where_cinema:"影院", where_other:"其他",
note_placeholder:"备注", save:"保存", close:"关闭",
song_add_title:"添加歌曲", song_title_placeholder:"歌曲名称", artist_placeholder:"艺人",
spotify_placeholder:"Spotify 链接", song_cover_hint:"封面（手动上传，如在 Spotify 找到则可选）",
book_add_title:"添加图书", book_title_placeholder:"书名",
book_cover_hint:"封面（手动上传，如在 Google Books 找到则可选）",
author_placeholder:"作者", pages_placeholder:"页数",
new_folder_title:"新建文件夹", folder_name_placeholder:"文件夹名称",
settings_title:"设置", theme_label:"主题", dark:"深色", light:"浅色",
layout_label:"布局", cards:"卡片", list:"列表",
sort_label:"排序方式", newest:"最新", oldest:"最早", rating_desc:"评分 ↓", rating_asc:"评分 ↑",
az:"A-Z", za:"Z-A", favorites_opt:"收藏",
export_backup:"导出备份", privacy_policy:"隐私政策", user_guide:"使用指南", language_label:"语言",
delete_btn:"删除", favorite_btn:"收藏", share_btn:"分享",
director_label:"导演：", pages_label:"页", no_notes:"暂无备注", rating_label:"评分",
stat_movies:"部电影", stat_songs:"首歌曲", stat_books:"本图书", no_reviews:"暂无评价",
alert_movie_title:"请输入标题", alert_song_title:"请输入歌曲名称",
alert_book_title:"请输入书名", alert_folder_name:"请输入文件夹名称",
alert_share_failed:"无法生成分享图片。",
edit_label:"编辑", delete_folder_label:"删除文件夹", close_folder_label:"关闭文件夹",
delete_folder_confirm:'删除文件夹"{name}"？其中的项目不会被删除。',
contact_title:"联系我们",
contact_desc:"发现了漏洞、有新想法，还是只想打个招呼？发送一条消息，我会尽快回复你。",
contact_email_placeholder:"你的邮箱", contact_message_placeholder:"你的消息",
contact_send:"发送", contact_sending:"发送中...", contact_success:"消息已发送，谢谢！",
contact_error_fields:"请填写两个字段。", contact_error_generic:"出了点问题，请重试。",
contact_error_network:"网络错误，请重试。", instagram_label:"Instagram", github_label:"GitHub",
footer_text:"© 2026 MyVerse • 由 Matteo Minniti 创建",
privacy_title:"隐私政策",
privacy_p1:"MyVerse 不会在自己的服务器上收集、发送或存储任何数据。它没有后端：这是一个完全在你的浏览器中运行的网站。",
privacy_p2:"你添加的所有电影、歌曲和图书都只保存在你的设备上，存储在浏览器的本地存储中。除非你手动导出备份并分享，否则没有人能看到它们。",
privacy_p3:"使用本应用无需账户、登录或注册，你的使用情况也不会以任何方式被追踪。",
privacy_p4:"当你输入电影标题时，该文本会直接从你的浏览器发送到 TMDB（The Movie Database），以获取海报、类型、导演、演员、时长和预告片。MyVerse 不会在其他任何地方拦截或存储这一请求。",
privacy_p5:"当你粘贴 Spotify 链接时，该链接会基于同样的原理直接从你的浏览器发送到 Spotify，以获取歌曲名称和封面图片。",
privacy_p6:"当你输入书名时，该文本会直接从你的浏览器发送到 Open Library，以获取封面、作者和页数。",
privacy_p7:"你可以随时在设置中导出备份或删除所有数据。",
manual_title:"使用指南",
manual_p1:"添加电影、歌曲或图书：点击右下角的 + 按钮，然后选择电影、音乐或图书。",
manual_p2:"电影：输入标题。离开输入框后，应用会自动在 TMDB 中搜索，并自动填写海报、类型、导演、时长和演员——这些字段无法手动编辑。如果你愿意，仍然可以通过预览图下方的文件字段上传自定义封面。",
manual_p3:"歌曲：在相应字段中粘贴该歌曲的 Spotify 链接。离开输入框后，应用会自动获取歌曲名称和封面图片。艺人信息仍需手动输入，因为 Spotify 不会以这种方式提供该信息。",
manual_p4:"图书：输入书名。应用会尝试从 Open Library 获取封面、作者和页数。与电影不同，作者和页数始终可以手动编辑——如果你先自己输入了这些信息，应用不会覆盖它们。",
manual_p5:"评分：点击星星，给出 1 到 10 分的评分。",
manual_p6:"观看/收听地点和备注：自由文本字段，需手动填写。",
manual_p7:"预告片：如果一部电影在 TMDB 上有可用的预告片，你可以在详情页面直接点击封面观看——会在新标签页中打开 YouTube。",
manual_p8:"收藏：点击卡片上或详情页面中的心形图标，即可将其添加到收藏或从收藏中移除。",
manual_p9:"搜索：使用顶部的搜索栏，按标题、艺人、作者、观看/收听地点或备注进行筛选。",
manual_p10:"筛选和布局：在侧边菜单中，你可以显示全部内容、仅电影、仅音乐、仅图书或仅收藏。在设置中，你可以更改主题（深色/浅色）、布局（卡片或列表）以及排序方式。",
manual_p11:"文件夹：在侧边菜单中，你可以创建自己的收藏集。点击新建文件夹，为其命名，然后点击想要加入的项目——一个项目可以同时属于多个文件夹。",
manual_p12:"备份：在设置中，你可以将所有数据导出为文件，以妥善保存或转移到其他设备，并可以随时重新导入。",
manual_p13:"删除项目：点击卡片或详情页面中的删除按钮。此操作不可撤销。"
}

};



// ===============================
// LANGUAGE DETECTION
// ===============================


function detectBrowserLanguage(){


    const candidates =
    (navigator.languages && navigator.languages.length)
    ? navigator.languages
    : [navigator.language || "en"];


    for(let i=0;i<candidates.length;i++){

        const code =
        (candidates[i] || "").slice(0,2).toLowerCase();

        if(SUPPORTED_LANGUAGES.includes(code)) return code;

    }


    return "en";


}



let currentLang =
localStorage.getItem("language")
|| detectBrowserLanguage();


if(!SUPPORTED_LANGUAGES.includes(currentLang)){

    currentLang = "en";

}




// ===============================
// TRANSLATION HELPER
// ===============================


function t(key, vars){


    const dict =
    TRANSLATIONS[currentLang] || TRANSLATIONS.en;


    let str =
    (dict[key] !== undefined) ? dict[key]
    : (TRANSLATIONS.en[key] !== undefined) ? TRANSLATIONS.en[key]
    : key;


    if(vars){

        Object.keys(vars).forEach(function(k){

            str = str.replace(new RegExp("\\{"+k+"\\}","g"), vars[k]);

        });

    }


    return str;


}




// the "where" select stores brand names as-is (Netflix, Prime Video,
// Disney+) but "cinema"/"other" as language-independent keys, so this
// turns the stored value back into a translated label for display
function formatWhereLabel(value){


    if(!value) return value;


    const key = value.toLowerCase();


    if(key === "cinema") return t("where_cinema");

    if(key === "other") return t("where_other");


    return value;


}




// ===============================
// APPLY LANGUAGE
// ===============================


const LANGUAGE_CHANGE_LISTENERS = [];


function onLanguageChange(fn){

    LANGUAGE_CHANGE_LISTENERS.push(fn);

}




function applyStaticTranslations(){


    document.querySelectorAll("[data-i18n]").forEach(function(el){

        el.textContent = t(el.dataset.i18n);

    });


    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(el){

        el.placeholder = t(el.dataset.i18nPlaceholder);

    });


    document.querySelectorAll("[data-i18n-title]").forEach(function(el){

        el.title = t(el.dataset.i18nTitle);

    });


}




function applyLanguage(lang){


    if(!SUPPORTED_LANGUAGES.includes(lang)) lang = "en";


    currentLang = lang;

    document.documentElement.lang = lang;

    localStorage.setItem("language", lang);


    applyStaticTranslations();


    const languageSelectEl =
    document.getElementById("languageSelect");

    if(languageSelectEl) languageSelectEl.value = currentLang;


    // re-render dynamic content (cards, stats, folder list) immediately
    if(typeof renderMovies === "function") renderMovies();

    if(typeof renderFolderSidebar === "function") renderFolderSidebar();


    LANGUAGE_CHANGE_LISTENERS.forEach(function(fn){

        try{

            fn();

        }catch(err){

            console.error("Language change listener error:", err);

        }

    });


}




// apply immediately: by the time this script runs, every element
// above it in the page has already been parsed into the DOM
document.documentElement.lang = currentLang;

applyStaticTranslations();




const languageSelect =
document.getElementById("languageSelect");


if(languageSelect){


    languageSelect.value = currentLang;


    languageSelect.onchange = function(){

        applyLanguage(this.value);

    };


}
