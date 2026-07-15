// Veil Studio
// First procedural texture preview


const canvas = document.getElementById("textureCanvas");
const ctx = canvas.getContext("2d");


function resizeCanvas() {

    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    generateTexture();

}


function generateTexture() {

    const image = ctx.createImageData(
        canvas.width,
        canvas.height
    );

    for (let i = 0; i < image.data.length; i += 4) {

        const value = Math.random() * 255;

        image.data[i] = value;
        image.data[i + 1] = value;
        image.data[i + 2] = value;
        image.data[i + 3] = 255;

    }

    ctx.putImageData(image, 0, 0);

}


window.addEventListener(
    "resize",
    resizeCanvas
);


resizeCanvas();
