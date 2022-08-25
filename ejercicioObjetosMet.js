
const alumnos = [
    { numAlumno: "1234/0", nombre: "maria", nota: 7 },
    { numAlumno: "4459/2", nombre: "juan", nota: 3 },
    { numAlumno: "5877/1", nombre: "pepe", nota: 5 },
    { numAlumno: "5512/0", nombre: "josefina", nota: 9 },     { numAlumno: "9874/0", nombre: "jaime", nota: 7 },
]

const filterAlumnos = alumnos
    .filter(item => item.nota > 6)
    .map(item => item.numAlumno);

    console.log(filterAlumnos);

// al armar un array nuevo completamente distinto, se usa map



