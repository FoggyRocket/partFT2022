// app.js
const express = require('express');
const app     = express();
const hbs     = require('hbs'); 
const bodyParser = require("body-parser")


//setup view y hbs
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');

app.use( bodyParser.urlencoded( {extended:true} ) )
//ruta!!
//Home
    //verb("/direction",(req,res,next)=>{})
app.get('/', (req, res) => {
  console.log(req);
  res.send("Hola")
});



//Querys!!!!! (?) 
// /pedro === /perrito 
app.get("/perritos",(req,res,next)=>{
        // ?perro=""&name=""
    console.log("Querys", req.query )
    res.send("perritos")

})


app.get("/login",(req,res,next)=>{

    res.render("index")

})

app.post("/login",(req,res,next)=>{
    console.log("Que es el body??",req.body)
    res.send("Ya mandaste tus datos!!!!")
})

//params
//estas rutas hay que mandarlas al final del documento!!
//localhost:3000/students/Dylan
app.get("/students/:name/:lastName/:perro",(req,res,next)=>{
                    /**
                     *  params = {
                     *  name:"Nova"
                     * }
                     */
    console.log("Params", req.params )
    res.send(`Hola de nuevo ${req.params.name}`)

})


//generar un error muy comun
// /pedro === ?¿
app.get("/:error",(req,res,next)=>{
    console.log("params",req.params)
    const {error} = req.params
    res.send(`la ruta que visitas es: ${error}`)
})


app.listen(3000, () => console.log('App listening on port 3000!'));
