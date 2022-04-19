// importar dependencies

//destructurar y asignacion
const { color, log } = require('console-log-colors');

//color = color => console-log-colors
const { red, green, cyan } = color;

//colocamos todo lo que vamos a importar y utlizar en el archivo
//console.log( red("Hola soy rojo" ) )


//1.
const http = require("http")


//demo server

// const server = http.createServer((request,response)=>{
//     response.write("Hola ya soy un pro en backend con node")
//     response.end()
// })
// req = request
// res = response 
const server = http.createServer((req,res)=>{

    console.log(cyan(`Someone has requested ${req.url}`))

    //rutas!!!!

    if(req.url === "/"){
        res.write("Estamos en el home todo hermoso")
        res.end()
    }else if(req.url === "/contacts"){
        res.write("<h1>Estoy en los contactos mamá</h1>")
        res.end()
    }else if(req.url === "/nova"){
        res.write("<h2>Hola soy nova!</h2>")
    }else{
        res.statusCode = 404
        res.write("Sorry bro TT_TT")
        res.end()
    }

})



console.log(red("server is running"))
server.listen(3000)