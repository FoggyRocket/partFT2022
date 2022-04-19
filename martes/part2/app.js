//que se necesita primero??

const express = require("express");
//inicializamos nuestra app
const app = express()

//crear un path absoluto para nuestras views
app.set("views",__dirname+"/views") //<== todas vistas en tan globales

//config para que jale el hbs
app.set("view engine", "hbs")

//ruta
app.get("/",(req,res,next)=>{
    //previamente
    //res.send("Todo chido")
    //cuando mandamos un archivo .html
    //res.sendFile(__dirname +"/views/index.hbs")
    //lo nuevo para hbs
    //.render("nombreDeLaVista")

    const perro = {
        name:"Dylan",
        age:29,
        single:false,
        foodFavorite:["Mixotes","Gorditas","Tacos"],
        friends:[
            {name:"Nacho",age:29},
            {name:"GEO",age:29},
            {name:"Meli",age:29}
        ],
        pet:{
            name:"<h1>Nova</h1>",
            age:2,
            breed:"Beagle",
            
        },
        moto:null,
        passport:undefined,
        //comer:()=>{}
    }
    res.render("index",perro) //<== usar esto para hbs
})
//correr el server
app.listen(3000,()=>{
    console.log("Estoy corriendo chido!!! en el puerto 3000")
})


