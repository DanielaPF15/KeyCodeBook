const mongoose = require('mongoose');

const genreShema = new mongoose.Schema(
    {
        name:{type:String,required:true},
        status:{type:Boolean,required:true}

/**
 * Campos Boolean
 * 1= false
 * 0 => true
 *  */    }
)
module.exports = mongoose.model('Genre',genreShema)