/**
 * Given an array of positive numbers, find the maximum sum of a subsequence
 * with the constraint that no 2 numbers in the sequence should be adjacent in the array.
 *  So 3 2 7 10 should return 13 (sum of 3 and 10) or 3 2 5 10 7 should return 15 (sum of 3, 5 and 7).
 * Answer the question in most efficient way.
 * Input : arr[] = {5, 5, 10, 100, 10, 5}
Output : 110
Input : arr[] = {1, 2, 3}
Output : 4
 */
 function maiorValor(lista){
     aux = 0;
     for(let i = 0; i < lista.length; i++)
         aux = lista[i] > lista[aux] ? i : aux;
     return aux;
 }

 function somatoria(valor, lista, j){
     if (lista.length == 0)
         return 0;
     valor = lista[j];
     if(j == 0)
         lista.splice(0, 2);
     else if (j == lista.length - 1)
         lista.splice(j - 1, 2);
     else if (lista.length == 1)
         lista.slice(0, 1);
     else
         lista.splice(j - 1, 3);
     return valor + somatoria(valor, lista, maiorValor(lista));
 }

 function resposta(lista){
     maior = 0;
     for(let i = 0; i < lista.length; i++){
         aux = somatoria(0, lista.slice(), i);
         if(aux > maior)
             maior = aux;
     }
     return maior;
 }

 var lista = [5, 5, 10, 100, 10, 5];
 console.log('resposta: ', resposta(lista));
