// Veil Studio
// First texture test

const canvas = document.getElementById("textureCanvas");
const ctx = canvas.getContext("2d");


function resizeCanvas() {

    canvas.width = 600;
    canvas.height = 600;

    drawTexture();
}


function drawTexture() {

    const size = 20;

    for (let y = 0; y < canvas.height; y += size) {

        for (let x = 0; x < canvas.width; x += size) {

            const value = Math.random() > 0.5;

            if (value) {
                ctx.fillStyle = "#dddddd";
            } else {
                ctx.fillStyle = "#333333";
            }

            ctx.fillRect(
                x,
                y,
                size,
                size
            );

        }

    }

}


resizeCanvas();
