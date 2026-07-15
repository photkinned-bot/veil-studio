// Veil Studio
// Interactive texture prototype


const canvas = document.getElementById("textureCanvas");
const ctx = canvas.getContext("2d");

const slider = document.getElementById("scaleSlider");

const contrastSlider = document.getElementById("contrastSlider");

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


            const contrast = Number(contrastSlider.value) / 100;

const value = Math.random();

const shade = Math.floor(
    128 + (value - 0.5) * 255 * contrast
);


ctx.fillStyle = 
    `rgb(${shade}, ${shade}, ${shade})`;


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

contrastSlider.addEventListener(
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
