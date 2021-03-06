const mongoose = require ('mongoose')//Paquete que permite la comunicación con nuestra base de datos.
const config = require('./config')
const conectDB = ()=>{
    //conect permite conectar a una base de datos tiene opciones:
    // -useNewUrlParser: analizar la informacion que se le quiere enviar a MongoDB.
    //-useUnifiedTopology escucha llamados que hacemos a mongo de BD y monitoréa que es lo que pasa
    mongoose.connect(config.mongoDB,{ useNewUrlParser: true, useUnifiedTopology: //esta bien
        true},(error)=>{
            if(error){
                console.log('Error',error)
            
            }else{
                console.log('Nos conectamos a la DB.');
            }
        })
}
/**
 * module.exports
 * Permite exportar una funcion para que pueda ser utilizada por otra parte del proyecto
 */
module.exports = { conectDB }