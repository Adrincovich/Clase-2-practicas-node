//METODOS IMPORTANTES QUE VAMOS A USAR DE JS

// === valor y tipo
// == valor

// find devuelve 1 valor
// filter devuelve 1 array
// foreach
// map
// some
// every



const array1 = ["a", "b", "c"];


//el foreach recorre el array de forma prolija, en los metodos con vsc dice como funciona.-
// en este caso se pasa primero el item despues el indice
array1.forEach((item, indice) => {
    console.log(item, indice)
})


// declarar nuevas variables para almacenar el find , se puede usar luego con la constante
const findVariable = array1.find(item => item == "b")

console.log(findVariable);



// a diferencia del find que busca, este filtra en un array
const filterVariable = array1.find(item => item == "b")

console.log(filterVariable);


//map es un bucle, como el foreach,  agarra un array y lo transforma. usar solo cuando hay que cambiar elementos
// si no hay que cambiar directamente se usa foreach

const array2 = [1, 2, 3];

const mapArray2 = array2.map(element => element * 3)

console.log(mapArray2);



// chequea con true o folse si coincide elemento del parametro que pasamos
const someArray2 = array2.some(item => item == 8);

console.log(someArray2);



//  chequea si cada uno de los elementos del array coinciden
const everyArray2 = array2.every(item => typeof item === "number")

console.log (everyArray2)



