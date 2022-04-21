//ES5
//mongoose.model
//mongoose.Schema
//old
//const mongoose = require("mongoose") <== {name:"asddas",comer(){},...}
//const Schema = mongoose.Schema;
// const model = mongoose.model;

//new
const { Schema, model } = require("mongoose")
//crear un Schema
const catSchema = new Schema({
    name:String,
    color:{
        type:String
    },
    age:Number,
    isAvailable:Boolean
})
//exportamos el documento!!!! muy muy muy importante!!!
//previamente 
//const Cat = mongoose.model("Cat",catSchema)
//module.exports = Cat

//moderna  pero con una linea extra
//const Cat = model("Cat",catSchema)
//module.exports = Cat

//old con una linea
//module.exports = mongoose.model("Cat",catSchema)
//new con una linea
module.exports = model("Cat",catSchema)