const router = require("express").Router()
//necesito el modelo donde voy a guardar
// ../ regresar un nivel (../../ regresar dos niveles)
// ./ en este mismo nivel 
const User = require("../models/User.model")


//http://www.dylansexy.com/user/
router.get("/",(req,res,next)=>{
    //aqui estamos en la raiz de la ruta user
    res.send("la del raiz del user")
})

//http://www.dylansexy.com/user/signup
router.get("/signup",(req,res,next)=>{
            //para entrar a una vista dentro de una carperta 
            //views
            // --auth
            //   index.hbs
            //nombreCarpeta/archivo
    res.render("auth/signup")
})


router.post("/signup",(req,res,next)=>{
    //todo lo que lleguemos a mandar con un formulario en un metodo post
    // va a llegar en req.body
    console.log("que rayos se esta mandando",req.body)
    //1.- desctructurar const {username,password,email} = req.body
    //User.create({username,password,email})

    //2.- usar ...req.body (spread operator) copia y pega los elementos de un array o un objeto y crea los pega en nuevo elemento
    //User.create({ ...req.body })

    //3.- agregarlos en el objeto
    //User.create({ username:req.body.username, password:req.body.password, email:req.body.email })

    User.create({ ...req.body })
    .then(newUser=>{
                    //render("vista",{ listFriends:[],name:"Dylan" ,...})
                    //siempre siempre siempre es un objecto los datos que mandamos 
        res.render("success", newUser)
    })
    .catch(err=>{
        res.send("Error en create")
    })
    
})






//nunca olvidar
module.exports = router