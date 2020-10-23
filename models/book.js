const { Mongoose } = require("mongoose");

const moongoose = require('mongoose');

const bookSchema = new moongoose.Schema({
    name:{type: String, required:true},//Nombre libro
    author:{type: String, required:true},// Nombre autor del libro
    pageNumber:{type: Number},// Número de páginas
    publisher:{type: String, required:true},//Editorial
    publicacionDate:{type: Date},//Fecha d publicación
    genre:[{type: moongoose.Schema.Types.ObjectId, ref:'Genre'}]
})
module.exports = moongoose.model('Book',bookSchema)