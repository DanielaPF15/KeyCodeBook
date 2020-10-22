const mongoose = require('mongoose')
const userShema = new mongoose.Schema({
    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true},
    role:{type:String,require:true},
    birthDate:{type:Date},
    age:{type:Number}
})
module.exports = mongoose.model('User',userShema)