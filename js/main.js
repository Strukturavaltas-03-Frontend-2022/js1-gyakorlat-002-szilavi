/*
- A `js/main.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként egy string-eket tartalmazó tömböt kap
 (inputellenőrzést nem kell végezni), és __visszaad__ egy HTML-template-et (string)! 
- A függvény neve `generateList` legyen!
- A HTML-template egy lista, amelynek a listaelemei a kapott tömb értékeit tartalmazzák.
*/

let testArray = ["egy", "kettő", "három"];

const generateList = function (array) {
    let string = ''
    for (let i = 0; i < array.length; i++) {
        string += '<li>' + array[i] + '</li>'
        //console.log(string)
    };
    return `<ul>${string}</ul>`
}