const BookModel = require('../models/book')


/**
 * @req => Todo lo que se envia
 * @res =>Todo lo que se devolverá
 */
exports.create =(req,res)=>{
     if(Object.entries(req.body).length==0){
         return res.status(400).send({
             message:'Todos los campos son obligatorios'
         })
     }

     const book = new BookModel({
         name: req.body.name,
         author: req.body.author,
         pageNumber: req.body.pageNumber,
         publisher: req.body.publisher,
         publicationDate: req.body.publicationDate,
         genre: req.body.genre
     })
     book.save()
     .then(
         (dataBook)=>{
             res.send(dataBook)
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

   const book = {
    name: req.body.name,
    author: req.body.author,
    pageNumber: req.body.pageNumber,
    publisher: req.body.publisher,
    publicationDate: req.body.publicationDate,
    genre: req.body.genre 
   }
  BookModel.findByIdAndUpdate(req.params.id,book,{new:true})
  .then(
      (bookUpdated)=>{
          res.send(bookUpdated)
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
/**
 * Metodo para obtener todos los libros
 */

exports.getAll = (req,res)=>{
    BookModel.find()
    .populate('genre')
    .exec()//se ejectuta la consulta
    .then((books)=>res.send(books))
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}
/**
 * Metodo para obtener un solo libro
 */
exports.getOne=(req,res)=>{
    BookModel.findById(req.params.id)
    .populate('genre')
    .exec()//se ejectuta la consulta
    .then((book)=>res.send(book))
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}

/**
 * Método para para eliminar un libro por el id
 * @param {*} req => Todo lo que se recibe
 * @param {*} res => Respuesta que devuelve
 */

exports.deleteOne =(req,res) =>{
    BookModel.findByIdAndRemove(req.params.id)
    .then((books) => {res.send(books)})
    .catch((error) => {
        res.status(500).send({message: error.message})
    })
}