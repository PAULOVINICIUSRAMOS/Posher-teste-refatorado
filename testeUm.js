/*Teste 1
Dado dois arrays de inteiros não vazios, determine se os valores do segundo array estão na mesma ordem no primeiro array.

public boolean isSubsequent(int[] values, int[] sequence)

Exemplo entrada
isSubsequent(new int[]{5, 1, 22, 25, 6, -1, 8, 10}, new int[]{1, 6, -1, 10})
Exemplo saída
true */


const values = [ 5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];
const contain = [];

for (let i = 0; i < values.length; i++) {
	for (let j = 0; j < sequence.length; j++){
		if(values[i] === sequence[j]){
		contain.push({'arr1': i, 'arr2': j})
		}
	}
}   

let positionA = 0;
let positionB = 0;
let itsSequence = true;
for(let k = 0; k < contain.length; k++){
	if(contain[k].arr1 < positionA || contain[k].arr2 < positionB) {
				itsSequence = false;
	} 
  positionA = contain[k].arr1 
  positionB = contain[k].arr2

} if(itsSequence){
		console.log('está na mesma sequencia')
	}else {
		console.log('não está na sequencia')
	}