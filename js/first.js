/*
- Írj egy olyan függvénykifejezést, amely paraméterként vár egy egész számokat tartalmazó tömböt! (Inputellenőrzést nem kell végezni.)
- A függvény neve `brutto` legyen!
- A függvény szorozza meg a tömbelemek értékét 1.27-tel, majd pedig 
__térjen vissza__ az elemek egész számra kerekített összegével!
*/


const arrayTest = [1, 2]

const brutto = function (numberArray) {

    const gross = numberArray.map(sum => sum * 1.27); Math.round()

    return gross

    //numberArray.map(x => x * 1.27)
}

//.map((sum) => sum * 1.27)

console.log(brutto(arrayTest))