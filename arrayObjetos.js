const empresa = [
    {
        nombre : "Empresa1",
        cantidadEmpleados : "100",
        rubro : "Gastronomico",
    },

    {
        nombre : "Empresa2",
        cantidadEmpleados : "200",
        rubro : "Comercio"
    },

    {
        nombre : "Empresa3",
        cantidadEmpleados : "300",
        rubro : "Construccion",
    },

    {
        nombre : "Empresa4",
        cantidadEmpleados : "400",
        rubro : "Metalurgico",
    },

    {
        nombre : "Empresa5",
        cantidadEmpleados : "500",
        rubro : "Gastronomico",
    }
]


const empresasConstruccion = empresa.filter((item) => item.rubro == "Gastronomico")


console.log(empresasConstruccion)

