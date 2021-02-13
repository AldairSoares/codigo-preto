/* Funções Nativas - Maximo e Minimo
Escreva uma função maxmin(a, b, c, d, e) que receba cinco números como parâmetros.
Sua função deve retornar um array onde o primeiro elemento é o menor dos parâmetros e o segundo elemento é o maior dos parâmetros. */

function maxmin(a, b, c, d, e){
    var array = Array();
    var min = Math.min(a, b, c, d, e);
    array.push(min);
    var max = Math.max(a,b,c,d,e);
    array. push(max);

    return array;
}