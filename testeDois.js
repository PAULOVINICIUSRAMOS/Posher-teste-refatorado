/* Teste 2
Dado um array de strings não vazio, remove os dados duplicados em sequência.

public String[] removeDuplicates(String[] values)
Exemplo entrada
removeDuplicates(new String[]{"g", "g", "y", "c", "c", "c", "q", "c", "y", "y"})
Exemplo saída
["g", "y", "c", "q", "c", "y"]

*/

const values = ["g", "g", "y", "c", "c", "c", "q", "c", "y", "y"];
const duplicate = [];

for(let i = 0; i < values.length; i++){
    if(values[i + 1] != values[i]){

      duplicate.push(values[i])

    }
}

console.log(duplicate);