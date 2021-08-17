function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado = valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
};


const lista = [
    100,
    200,
    500,
    4000000,
    1000,
];

const mitadLista = parseInt(lista.length / 2);

function esPar(numero){
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista.length)) {
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista - 1];

    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, 
        elemento2,
    ]);

    mediana = promedioElemento1y2;
}else {
    mediana = lista[mitadLista];
};