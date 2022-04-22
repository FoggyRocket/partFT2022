//muy importante
const express = require("express")
const hbs = require("hbs")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")


//Setup
const app = express()

app.set('views',__dirname + "/views"); //=>haciendo un tipo shorcut para las rutas del archivo views
app.set('view engine',"hbs"); //=> vamos a utilizar .hbs
app.use( bodyParser.urlencoded( {extended:true} ) )//los va a habilitar la llave body dentro de request
app.use(express.static('public') ) // para evitar usar esta syntax => public/images/nova.png  // images/nova.png

hbs.registerPartials(__dirname +"/views/partials")//nos dar de alta un bloque de codigo (html) para reutilizarlo en n cantidad de paginas

//conection
             //127.0.0.1
mongoose.connect('mongodb://localhost/recapDB')
.then(x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) )
.catch(err => console.error('Error connecting to mongo', err) )

//rutas!!
//vamos a importar la ruta y usarla
const indexRoutes = require("./routes/index");
const userRoutes = require("./routes/user.route")
//http://www.dylanSexy.com/perro
app.use("/",indexRoutes)

//http://www.dylansexy.com/user
app.use("/user",userRoutes)
// /perro
//  /perro/profile
//  /perro/listPerro
//app.use("/perro",perroRoutes)
//otra cosa muy importante

app.listen(3000,()=>{
    console.log("Estoy chido en el 3000!")
})