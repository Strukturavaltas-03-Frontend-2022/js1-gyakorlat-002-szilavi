/*
- A `js/second.js` fájlban dolgozz!
- Írj egy olyan függvénykifejezést, amely paraméterként kap egy tetszőleges 
típusú elemeket tartalmazó tömböt és egy tetszőleges primitív értéket!
- A függvény neve `checker` legyen!
- A függvény __visszatérési értéke__ egy objektum, amely a következő 
property-ket tartalmazza:
- `exists`: Értéke true/false attól függően, hogy a második paraméterként 
megadott érték megtalálható-e a tömbben
- `index`: Értéke egy szám; ha a második paraméterként megadott érték 
megtalálható a tömbben, akkor a tömbben lévő indexe, 
ha nem, akkor -1 legyen az értéke
- `allElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömb minden eleme number típusú-e vagy sem
- `someElementsAreNumbers`: Értéke true/false attól függően, 
hogy a tömbben van-e number típusú elem vagy sem
*/

const checker = (array, value) => {
    let object = {
        /*'exists': array.some(x => x === value),*/
        'exists': false,
        'index': -1,
        'allElementsAreNumbers': true,
        'someElementsAreNumbers': false  
    };

    for (let i = 0; i <array.length; i++) {
        if (array[i] === value) {
            object.exists = true
            object.index = i
        }

        if (typeof array[i] !== 'number') {
            onject.allElementsAreNumbers = false
        }else {
            object.someElementsAreNumbers = true
        }
        
        /*if (typeof array[i] === 'number') {
            object.someElementsAreNumbers = true
        }*/
    }
    
    return object    
}