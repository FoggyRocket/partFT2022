//importar los pacakges o librerias 
const express =  require('express');

//vamos a crear nuestro server 
const app = express()


//Usaremos arachivos staticos (Public)
//no se hace=> ../public/images/sexy.png
//forma correcta=>  images/sexy.png

app.use(express.static('public'))



//crearemos rutas con express 
/* nuestra primera ruta */
//verb get post
    //('ruta',(req,res,next)=>{})
app.get('/',(req,res,next)=>{
    res.send('<h1>Hola Express junto a Nodemon</h1>')
})


app.get('/about',(req,res,next)=>{
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>About</title>
    </head>
    <body>
        <h1>Este es el about us  ¡mamá!</h1>
    </body>
    </html>
    `)
})


//otra ruta
app.get("/sexy", (req,res,next)=>{

                //_ _dirname
    res.sendFile(__dirname + '/views/sexiest-page.html') //<= estoy manando un archivo .html
})


//app.post()




app.listen(3000,()=>{
    console.log("Estoy corriendo en el puerto 3000")
})
