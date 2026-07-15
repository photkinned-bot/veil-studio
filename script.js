// Veil Studio
// Interactive texture prototype


const canvas = document.getElementById("textureCanvas");
const ctx = canvas.getContext("2d");

const slider = document.getElementById("scaleSlider");

const algorithmSelect = document.getElementById("algorithmSelect");


function resizeCanvas() {

    canvas.width = 600;
    canvas.height = 600;

    drawTexture();

}


function drawTexture() {

    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const size = Number(slider.value);


    for (
        let y = 0;
        y < canvas.height;
        y += size
    ) {

        for (
            let x = 0;
            x < canvas.width;
            x += size
        ) {


            const value = Math.random();


            if (value > 0.5) {
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



slider.addEventListener(
    "input",
    function() {

        drawTexture();

    }
);

algorithmSelect.addEventListener(
    "change",
    function() {

        drawTexture();

    }
);


resizeCanvas();
