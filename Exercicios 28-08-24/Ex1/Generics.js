function encontrarMaiorElemento(array) {
    return array.reduce(function (max, current) {
        if (current > max) {
            return current;
        }
        else {
            return max;
        }
    });
}
var maiorNumero = encontrarMaiorElemento([10, 20, 30]);
console.log("Maior n\u00FAmero: ".concat(maiorNumero)); // 30
var maiorPalavra = encontrarMaiorElemento(['gato', 'elefante', 'zebra']);
console.log("Maior palavra: ".concat(maiorPalavra)); // 'zebra'
