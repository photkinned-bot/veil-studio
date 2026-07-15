function createValueNoiseMap() {

    let map = [];

    for (let y = 0; y < 60; y++) {

        let row = [];

        for (let x = 0; x < 60; x++) {

            let value =
                Math.sin(x * 0.15) *
                Math.cos(y * 0.15);

            value =
                (value + 1) / 2;

            row.push(value);

        }

        map.push(row);

    }

    return map;

}
