// Veil Studio
// Stable procedural texture prototype


const canvas = document.getElementById("textureCanvas");
const ctx = canvas.getContext("2d");

const slider = document.getElementById("scaleSlider");
const contrastSlider = document.getElementById("contrastSlider");
const randomizeButton = document.getElementById("randomizeButton");
const algorithmSelect = document.getElementById("algorithmSelect");


let noiseMap = [];


function createNoiseMap() {

    const algorithm = algorithmSelect.value;


    if (algorithm === "value") {

        noiseMap = createValueNoiseMap();

    } else {

        noiseMap = createPixelNoiseMap();

    }

}



function drawTexture() {


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    const algorithm = algorithmSelect.value;
    const size = Number(slider.value);

    const contrast =
        Number(contrastSlider.value) / 100;



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


            const mapX =
                Math.floor(x / size);

            const mapY =
                Math.floor(y / size);



            const value =
                noiseMap[mapY % 60][mapX % 60];



            let shade;


            if (value > 0.5) {

                shade =
                    128 + (127 * contrast);

            } else {

                shade =
                    128 - (127 * contrast);

            }


            shade = Math.floor(shade);



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



function resizeCanvas() {

    canvas.width = 600;
    canvas.height = 600;

    createNoiseMap();

    drawTexture();

}



slider.addEventListener(
    "input",
    drawTexture
);


contrastSlider.addEventListener(
    "input",
    drawTexture
);
algorithmSelect.addEventListener(
    "change",
    function() {

        
);
randomizeButton.addEventListener(
    "click",
    function() {

        createNoiseMap();

        drawTexture();

    }
);



resizeCanvas();
