/* 
Scrivi una funzione che accetti tre argomenti:
un array e due numeri ("a" più piccolo di "b" e "b" grande al massimo quanto il numero di elementi dell'array).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra "a" e "b"
*/
function filtra_array(array, a, b) {

const numeri_compresi = [];
for (let i = a; i < b - 1; i++) {
  numeri_compresi.push(array[i]);
}

return numeri_compresi;
}


const numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const risultato = filtra_array(numeri, 1, 8);
console.log(risultato);
