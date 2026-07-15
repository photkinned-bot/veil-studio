function createPixelNoiseMap() {

    let map = [];

    for (let y = 0; y < 60; y++) {

        let row = [];

        for (let x = 0; x < 60; x++) {

            row.push(Math.random());

        }

        map.push(row);

    }

    return map;

}
