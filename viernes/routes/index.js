//Estoy obteniendo el elemento router para tener un archivo modular

const router = require("express").Router()


/*GET home page */
//req = request
//res = response
//next = function next()
router.get("/",(req,res,next)=>{
            //body='views/index.hbs'
    res.render("index")
})

//https://www.dylansexy.com/about
router.get("/about",(req,res,next)=>{
    //body='views/index.hbs'
    res.render("about")
})

//http://www.dylansexy.com/perro
router.get("/perro",(req,res,next)=>{
    res.render("gato")
})



//siempre recordar exportar el archivo
module.exports = router;