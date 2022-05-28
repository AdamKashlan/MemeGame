let imageInput = document.querySelector("#imageFileInput");
let topTextInput = document.querySelector("#topTextInput");
let bottomTextInput = document.querySelector("#bottomTextInput");
let buttonPress = document.querySelector("#memeSubmit")
let canvas = document.querySelector("#meme")

let image;

imageInput.addEventListener("change", function() {
    const imageURL = URL.createObjectURL(imageInput.files[0]);
    image = new Image();
    image.src = imageURL;
});

buttonPress.addEventListener("click", function() {
    addMeme(canvas, image, topTextInput.value, bottomTextInput.value);
})

function addMeme(canvas, image, topText, bottomText) {
    const ctx = canvas.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 15);
    const yDiff = height / 30;

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0);

    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 4);
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.font = `${fontSize}px sans-serif`;

    ctx.textBaseline = "top";
    ctx.strokeText(topTextInput.value, width / 2, yDiff);
    ctx.fillText(topTextInput.value, width / 2, yDiff);

    ctx.textBaseline = "bottom";
    ctx.strokeText(bottomTextInput.value, width / 2, height - yDiff);
    ctx.fillText(bottomTextInput.value, width / 2, height - yDiff);

}

function removeMeme()