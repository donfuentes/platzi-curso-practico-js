const lista = [
    1,
    2,
    3,
    4,
    2,
    2,
    1,
    5,
    6,
    3,
    1,
    7,
    7,
    2,
];

const listaCount = {};

lista.map(
    function (elemento){
        if (listaCount[elemento]){
            listaCount[elemento] += 1;
        }else {
            listaCount[elemento] = 1;
        }

        listaCount[elemento];
    }
);

// console.log(listaCount);

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB[1];
    }
);

// console.log(listaArray);
// console.log(listaArray.length);


const moda = listaArray[listaArray.length - 1];


