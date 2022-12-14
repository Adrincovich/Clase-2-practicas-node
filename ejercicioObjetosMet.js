// 1. Alumnos aprobados.
// Dado el siguiente array de alumnos de una clase Obtener un array con los números de alumno de aquellos
// alumnos que hayan aprobado la materia. Para aprobar la matería la nota final debe ser mayor a 6.


const alumnos = [
    { numAlumno: "1234/0", nombre: "maria", nota: 7 },
    { numAlumno: "4459/2", nombre: "juan", nota: 3 },
    { numAlumno: "5877/1", nombre: "pepe", nota: 5 },
    { numAlumno: "5512/0", nombre: "josefina", nota: 9 },
    { numAlumno: "9874/0", nombre: "jaime", nota: 7 }
]

const filterAlumnos = alumnos
    .filter(item => item.nota > 6)
    .map(item => item.numAlumno);

    // console.log(alumnos);

// al armar un array nuevo completamente distinto, se usa map


// -----------°-----------°-----------°-----------°-----------°-----------°-----------°-----------°


// 2. Stock agotado
// Dado el siguiente array de productos en stock, agregar a cada producto un atributo booleano agotado
// en true si el stock es 0, caso contrario false.

const productos = [
    { id: "1", nombre: "lapiceras", stock: 164 },
    { id: "2", nombre: "marcadores", stock: 0 },
    { id: "3", nombre: "cartulinas", stock: 25 },
    { id: "4", nombre: "cartucheras", stock: 0 },
    { id: "5", nombre: "mochilas", stock: 4 }
]

//en foreach no va return


    const agregarStock = productos.forEach((a) =>{
        if (a.stock == 0) {
             a.agotado = true
        }if (a.stock > 0 ){
             a.agotado = false
        }
        console.log(a)
    })

        //  .map(chequeo)

// console.log(asdasd)


// -----------°-----------°-----------°-----------°-----------°-----------°-----------°-----------°


// 3. Jugadores sospechosos
// En nuestro juego online tenemos un array de usuarios sospechosos que están usando un item que fue prohibido,
// obtener la lista de IDs de usuarios que en su inventario tengan dicho item. El item prohibido se llama "Katana de fuego".

const jugadores = [
    { ID: "1", clase: "mago", nivel: 35, inventario:
        ["Manzana", "Poción de maná", "Vara mágica"] },
    { ID: "2", clase: "ladron", nivel: 65, inventario:
        ["Daga", "Katana de fuego", "Poción de vida"] },
    { ID: "4", clase: "curandero", nivel: 73, inventario:
        ["Vara mágica", "Armadura ligera"] },
    { ID: "3", clase: "espadachin", nivel: 36, inventario:
        ["Casco de hierro", "Katana de fuego", "Pocíón de velocidad"] },
    { ID: "5", clase: "mago", nivel: 26, inventario:
        ["Carta de PecoPeco", "Oridecon", "Poción de concentración"] },
]


const jugadoresSospechosos = jugadores.filter(item => item.inventario
                                                          .some(inv => inv === "Katana de fuego"))  //quedan solo jugadores con katana
                                      .map(element => element.ID)

// console.log(jugadoresSospechosos)


// -----------°-----------°-----------°-----------°-----------°-----------°-----------°-----------°


// 4. Silabas
// Nuestro software de reconocimiento de voz funciona de una forma un poco particualar, y el texto reconocido
// nos lo envía en un arreglo de silabas. Dado el siguiente array, obtener un string con todo el texto de corrido.

const silabas = ["¡Ho", "la, ", "mun", "do! ", "¿To", "do ", "bien? ", "Me ", "a", "le", "gro."]


const palabras = silabas.join("")

// console.log(palabras)


// -----------°-----------°-----------°-----------°-----------°-----------°-----------°-----------°


// 5. Pedidos
// Tenemos un array con pedidos para nuestro negocio de comidas. Obtener un array con solo aquellos
// pedidos que incluyan algun condimento extra.

const pedidos = [
    { id: "1", pedido: "hamburgesa", extras: ["mayonesa"] },
    { id: "1", pedido: "pancho" },
    { id: "1", pedido: "pizza" },
    { id: "1", pedido: "pancho", extras: ["ketchup"] },
    { id: "1", pedido: "empanadas" },
]

const pedidosIncluyeExtras = pedidos.filter(pedido => pedido.extras)

// console.log(pedidosIncluyeExtras)

// -----------°-----------°-----------°-----------°-----------°-----------°-----------°-----------°


// 6. Usuario y su perfil
// Tenemos dos objetos, uno con la información de usuario, y otro con la información personal de dicho usuario,
// queremos obtener un solo objeto con toda la información.

const usuario1 = { id: "123", username: "pepe24" }
const usuario1perfil = { nombre: "pepe", edad: 27, profesion: "programador" }

const usuario1Completo = {...usuario1, ...usuario1perfil}

//console.log(usuario1Completo)







