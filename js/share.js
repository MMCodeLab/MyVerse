// ===============================
// SHARE CARD - MYVERSE
// generates an image (story style)
// with cover, title, rating and link
// ===============================


function loadImageSafe(src){


    return new Promise(function(resolve){


        const img = new Image();


        img.crossOrigin = "anonymous";


        img.onload = function(){

            resolve(img);

        };


        img.onerror = function(){

            resolve(null);

        };


        img.src = src;


    });


}




function drawRoundedImage(ctx, img, x, y, w, h, radius){


    ctx.save();


    ctx.beginPath();

    ctx.moveTo(x + radius, y);

    ctx.arcTo(x + w, y, x + w, y + h, radius);

    ctx.arcTo(x + w, y + h, x, y + h, radius);

    ctx.arcTo(x, y + h, x, y, radius);

    ctx.arcTo(x, y, x + w, y, radius);

    ctx.closePath();

    ctx.clip();


    const imgRatio = img.width / img.height;

    const boxRatio = w / h;


    let drawW, drawH, offsetX, offsetY;


    if(imgRatio > boxRatio){

        drawH = h;

        drawW = h * imgRatio;

        offsetX = x - (drawW - w) / 2;

        offsetY = y;

    }

    else{

        drawW = w;

        drawH = w / imgRatio;

        offsetX = x;

        offsetY = y - (drawH - h) / 2;

    }


    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);


    ctx.restore();


}




function wrapText(ctx, text, x, y, maxWidth, lineHeight){


    const words = text.split(" ");

    let line = "";

    let currentY = y;


    for(let i = 0; i < words.length; i++){


        const testLine = line + words[i] + " ";

        const metrics = ctx.measureText(testLine);


        if(metrics.width > maxWidth && i > 0){

            ctx.fillText(line, x, currentY);

            line = words[i] + " ";

            currentY += lineHeight;

        }

        else{

            line = testLine;

        }


    }


    ctx.fillText(line, x, currentY);


    return currentY;


}




async function generateShareCard(item){


    const canvas = document.createElement("canvas");

    canvas.width = 1080;

    canvas.height = 1920;


    const ctx = canvas.getContext("2d");


    // dark gradient background, in MyVerse style
    const bg = ctx.createLinearGradient(0, 0, 0, canvas.height);

    bg.addColorStop(0, "#0a0a0a");

    bg.addColorStop(1, "#050505");

    ctx.fillStyle = bg;

    ctx.fillRect(0, 0, canvas.width, canvas.height);


    // decorative green glow, consistent with the site background
    const glow = ctx.createRadialGradient(
        canvas.width / 2, 300, 50,
        canvas.width / 2, 300, 700
    );

    glow.addColorStop(0, "rgba(30,215,96,0.25)");

    glow.addColorStop(1, "rgba(30,215,96,0)");

    ctx.fillStyle = glow;

    ctx.fillRect(0, 0, canvas.width, canvas.height);


    // cover size: square for songs, portrait for movies/books
    const cardW = 760;

    const cardH = item.type === "song" ? 760 : 1080;

    const cardX = (canvas.width - cardW) / 2;

    const cardY = 260;


    let img = null;


    if(item.image){

        img = await loadImageSafe(item.image);

    }


    if(img){

        drawRoundedImage(ctx, img, cardX, cardY, cardW, cardH, 40);

    }

    else{

        // fallback background if the image isn't available
        ctx.fillStyle = "rgba(255,255,255,0.08)";

        ctx.fillRect(cardX, cardY, cardW, cardH);

    }


    // title
    ctx.fillStyle = "#ffffff";

    ctx.font = "bold 64px sans-serif";

    ctx.textAlign = "center";


    const titleY = cardY + cardH + 100;

    const afterTitleY = wrapText(ctx, item.title, canvas.width / 2, titleY, 900, 74);


    // rating
    ctx.fillStyle = "#aaaaaa";

    ctx.font = "44px sans-serif";

    const ratingText = item.rating < 0 ? `Rating ${item.rating}` : `${item.rating}/10`;

    ctx.fillText(ratingText, canvas.width / 2, afterTitleY + 80);


    // site link, at the bottom
    ctx.fillStyle = "#1ed760";

    ctx.font = "bold 40px sans-serif";

    ctx.fillText("mmcodelab.github.io/MyVerse/", canvas.width / 2, canvas.height - 100);


    // export and optional sharing
    canvas.toBlob(async function(blob){


        if(!blob){

            alert("Could not generate the image to share.");

            return;

        }


        const safeName = item.title.replace(/[^a-z0-9]/gi, "_").toLowerCase();

        const file = new File([blob], `myverse-${safeName}.png`, {type: "image/png"});


        if(navigator.canShare && navigator.canShare({files: [file]})){


            try{

                await navigator.share({

                    files: [file],

                    title: item.title,

                    text: `${item.title} - MyVerse`

                });

                return;

            }

            catch(err){

                console.error("Sharing cancelled or failed:", err);

            }


        }


        // fallback: just download the image
        const url = URL.createObjectURL(blob);

        const link = document.createElement("a");

        link.href = url;

        link.download = `myverse-${safeName}.png`;

        link.click();

        URL.revokeObjectURL(url);


    }, "image/png");


}