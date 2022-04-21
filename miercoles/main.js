//importar
const mongoose = require("mongoose")
//usar modelos
const Cat = require("./models/Cat.model")



//conection
mongoose.connect('mongodb://localhost/perritosMongoose')
.then( x=>console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`) )
.catch( err=>console.error('Error connecting to mongo', err) )



//CRUD**
let gatos = [
    {
        name:"loki",
        color:"Verde",
        age:120,
        isAvailable:true
    },
    {
        name:"Peter",
        color:"Algo como rojo",
        age:41,
        isAvailable:true
    },
    {
        name:"Tom",
        color:"gris",
        age:4,
        isAvailable:true
    }
]
//CREATE
Cat.create({
    name:"Thor",
    color:true,
    age:115,
    isAvailable:true
})
.then(newCat => console.log("CREATE:",newCat) )
.catch(error=> console.log("Error en CREATE:",error))
//insertMany
Cat.insertMany(gatos)
.then(newCats => console.log("INSERTMANY:",newCats) )
.catch(error=> console.log("Error en INSERTMANY:",error))

//READ find({query},"projection projectionName",{sort,linit skip},()=>{})
Cat.find({name:"Bola de nieve VII"},'name',{sort:{name:-1} })
.then(findCat => console.log("READ:",findCat) )
.catch(error=> console.log("Error en READ:",error))
//UPDATE
  //updateMany => actualizar varios 
  //updateOne => actualizar uno sera la primera coincidencia 
  //findByIdAndUpdate => buscamos uno en específico

Cat.updateMany({isAvailable:true}, {age:5})
.then(updateCats => console.log("updateMany:",updateCats) )
.catch(error=> console.log("Error en updateMany:",error))

Cat.updateOne({color:"123456"},{color:"Rosa Mexicano"} )
.then(updateCats => console.log("updateOne:",updateCats) )
.catch(error=> console.log("Error en updateOne:",error))

                //_id,{field:updated},{new:true}
Cat.findByIdAndUpdate("6261857b891490eb792f1415",{color:"Blanco con negro"},{new:true})
.then(updateCats => console.log("findByIdAndUpdate:",updateCats) )
.catch(error=> console.log("Error en findByIdAndUpdate:",error))
//DELETE

        //deleteMany({query})
        //deleteOne({query})
        //findByIdAndRemove('id')
Cat.findByIdAndRemove('626080d0ce2df7711d39f883')
.then( () => console.log("Utilice findByIdAndRemove") )
.catch(error=> console.log("Error en findByIdAndUpdate:",error))

let perrito = Cat.create({
    name:"Thor",
    color:true,
    age:115,
    isAvailable:true
})
Promise.all([
    Cat.create({
    name:"Thor",
    color:true,
    age:115,
    isAvailable:true
}), perrito ])

async function insertCats(){
    try{
        const create =  await Cat.create({
            name:"Thor",
            color:true,
            age:115,
            isAvailable:true
        })
        const update = await Cat.updateMany({isAvailable:true}, {age:5})
       /// await Cat.updateMany({isAvailable:true}, {age:5})


        console.log("CREATE",create)
        console.log("UPDATE",update)

    }catch(error){
        console.log("error")
    }
}