"use strict";
function encontrarMaiorElemento(array) {
    return array.reduce((max, current) => {
        if (current > max) {
            return current;
        }
        else {
            return max;
        }
    });
}
const maiorNumero = encontrarMaiorElemento([10, 20, 30]);
console.log(`Maior número: ${maiorNumero}`); // 30
const maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);
console.log(`Maior palavra: ${maiorPalavra}`); // 'zebra'
