/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/


const arrayTest = [1, 2, 4, 8]

const brutto = function (numberArray) {
    let sum = 0;

    for (let i = 0; i < numberArray.length; i++) {
        sum += numberArray[i]  * 1.27;
        console.log(sum)
    }
    return Math.round(sum)
}

//const gross = Math.round(numberArray.map(sum => sum * 1.27)); 


console.log(brutto(arrayTest))