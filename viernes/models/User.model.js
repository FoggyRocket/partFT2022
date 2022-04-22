//importar moogse y sacar Schema y model 

//let Schema = mongoose.Schema
const { Schema, model } = require("mongoose");


const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
},{timestamps:true})



//jamas olviden 
module.exports = model("User",userSchema)