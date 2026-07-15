let valueNoiseSeed = Math.random();


function randomValue(x, y) {

    let value =
        Math.sin(
            x * 12.9898 +
            y * 78.233 +
            valueNoiseSeed * 43758.5453
        );

    return value - Math.floor(value);

}



function createValueNoiseMap() {

    let map = [];


    for (let y = 0; y < 60; y++) {

        let row = [];


        for (let x = 0; x < 60; x++) {

            row.push(
                randomValue(x, y)
            );

        }


        map.push(row);

    }


    return map;

}
