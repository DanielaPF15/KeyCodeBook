const GenreModel = require('../models/genre')


/**
 * Método para modificar los generos
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que devuelve
 */

exports.create =(req,res)=>{
     if(Object.entries(req.body).length==0){
         return res.status(400).send({
             message:'Todos los campos son obligatorios'
         })
     }

     const genre = new GenreModel({
         name: req.body.name,
         status: req.body.status
     })
     genre.save()
     .then(
         (dataGenre)=>{
             res.send(dataGenre)
         }
     ).catch(
         (error)=>{
             return res.status(500).send({
                 message:error.message
             })
         }
     )
}

exports.update =(req,res)=>{
    if(Object.entries(req.body).length==0){
        return res.status(400).send({
            message:'Todos los campos son obligatorios'
        })
    }

   const genre = {
    name: req.body.name,
    status: req.body.status
   }
  GenreModel.findByIdAndUpdate(req.params.id,genre,{new:true})
  .then(
      (genreUpdated)=>{
          res.send(genreUpdated)
      }
  )
  .catch(
      (error)=>{
          return res.status(500).send({
              message:error.message
          })
      }
  )
}
exports.getAll = (req,res)=>{
    GenreModel.find()
     .then((genre)=>res.send(genre))
     .catch(
         (error)=>{
             return res.status(500).send({
                 message:error.message
             })
         }
     )
 }
 exports.getOne = (req,res)=>{
     GenreModel.findById(req.params.id)
     .then((genre)=>res.send(genre))
     .catch(
         (error)=>{
             return res.status(500).send({
                 message:error.message
             })
         }
     )
 }
 
