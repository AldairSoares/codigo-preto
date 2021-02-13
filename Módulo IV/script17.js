/* Funções parametrizadas - calculaValorDevido 2
Depois de nossa consultoria, a lavanderia DigitalLaundry percebeu que poderia deixar a sua cobrança mais sofisticada e justa. Ela decidiu cobrar R$10,00 fixo, a título de taxa de serviço (independente da quantidade de roupa), mais R$ 3,00 por quilo de roupa suja. Reescreva a função calculaValorDevido

function calculaValorDevido(pesoDeRoupaSuja){
	...
} */

function calculaValorDevido(pesoDaRoupaSuja){
    return  10 + pesoDaRoupaSuja*3.00;
}