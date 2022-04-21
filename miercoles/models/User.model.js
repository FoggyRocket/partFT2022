//Destructuro y asigno
const {Schema, model} = require("mongoose");


//crear el Schema 
                        //Scheme({esqueleto},{timestamps:true})
const userSchema = new Schema({
    //email:String
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true,
        unique:true
    },
    avatarPic:{
        type:String,
        default:"https://avatars.githubusercontent.com/u/29002976?v=4"
    },
    //["Ana","Pedro","Nova"]
    // listFriends:{
    //     type:[String]
    // }
    //[{...},{...}]
    listFriends:{
        type:[{
            name:String,
            age:Number,
            hobbies:String
        }]
    },
    //enum
    gender:{
        type:String,
        enum:["Masculino","Femenino","Otro","No quiero contestar"],
        default:"Otro"
    }

},{timestamps:true} )




module.exports = model("User",userSchema)