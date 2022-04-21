//demoMongose

const mongoose = require("mongoose")


//setup 
//donde rayos nos vamos a conectar 

            //127.0.0.1
mongoose.connect('mongodb://localhost/perritosMongoose')
.then(x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) )
.catch(err => console.error('Error connecting to mongo', err) )


//create model version 0.1

const Cat = mongoose.model("Cat", { 
    name:String,
    color:String,
    age:Number
})

//const Dog = mongoose.model("Dog",{name:String,color:String,breed:String})

//vamos a utilizar modelo version 0.1

const kitty = new Cat( {
    name:"Filomeno v2",
    color:Number(123456),
    age:10
})


//guardar en mi base de datos ver 0.1

// kitty.save()
// .then(newKitty=> console.log("que rayos es:",newKitty))
// .catch(error=>console.log("error save kitty",error))


//metodo de mongoose para traerme todos los gatos de mi base datos


//NombredelModel.find() then().catch()
//find() que busca todos los documentos de ese Modelo(Collection)!!!!
//findOne() busca un elemento
//findById()busca un elemento en especifico 
Cat.find()
.then( cats => console.log("cats:",cats)   )
.catch(error=>console.log("error find cat",error))

//vamos por un filtro (Query)
Cat.find( {name:"Garfield"} )
.then( cats => console.log("query cats:",cats)   )
.catch(error=>console.log("error find query cat",error))

Cat.findOne( {name:"Garfield"} )
.then( cats => console.log("query One cats:",cats)   )
.catch(error=>console.log("error find query ONE cat",error))

//1.- findById({_id:1234567890}) /lll
//2.- findById("1234567890") /llll

Cat.findById("626176cd85942b8a7c7162e6")
.then( cat => console.log("query ID cats:",cat)   )
.catch(error=>console.log("error find query ID cat",error))

/**
Cat.findOne( { filter  })
.projection({ field:1 || 0 })
.sort( { field: 1})
.limit()
.skip()
.populate(<expression>)
.then( cats => console.log("query One cats:",cats)   )
.catch(error=>console.log("error find query ONE cat",error))
 */

