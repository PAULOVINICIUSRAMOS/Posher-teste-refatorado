/*Teste 3
Dado um array de strings não vazio, retorna um array de booleans indicando se a string é ou não um palíndromo.

public boolean[] verifyPalindromes(String[] values

Exemplo entrada
verifyPalindromes(new String[]{"arara", "jabuticaba", "asa", "caminhao"})
Exemplo saída
[true, false, true, false]*/


let word =  ["arara", "jabuticaba", "asa", "caminhao", "ana", "apos a sopa"];
    for(let i = 0; i < word.length; i++){	
    	console.log(check(word[i]));
    }

function check(word) {     
    for (var i = 0; i < word.length / 2; i++) {
        if (word[i] != word[word.length - i - 1]) {
         return word + " não é um palindromo";    
       
        } return word + " é um palindromo";    
    }
}