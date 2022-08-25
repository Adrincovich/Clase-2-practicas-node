const express = require("express");
const app = express(); //app = a la funcion express
const PORT = 3000;

const user = {
    name: "Julian",
    state: "active"
};

// EN GET SE LE PASAN 2 PARAMETROS, EL PATH QUE ES LO QUE DEVOLVEMOS EN LA API
// Y 2 PARAMETROS MAS , LO QUE ENTRA Y LO QUE SALE DEL ENDPOINT
// EN LOS ENDPOINT PUEDE SER GET O POST

app.get("/", (req,res) => {
    try {
        res.status(200)
           .send("Hello World")
    }
    catch{
        res.status(400)
    }
});

app.get("/id/:id", (req,res) => {
    try {
        const id = req.params.id
        res.status(200)
           .json({user, id})
    }
    catch{
        res.status(400)
    }
});


// EN LISTEN SE PASA UN PUERTO Y UNA CALLBACK (QUE NO ES NECESARIA) PARA SABER QUE ESTA ANDANDO
//NO PUEDE FALTAR NUNCA
app.listen(PORT, () => {
    console.log("Todo ok")
});
