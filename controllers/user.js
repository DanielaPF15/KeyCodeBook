const UserModel = require('../models/user')

exports.create = (req, res) => {
    /**
     * Validamos que todos los datos esten completos
     */

    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const user = new UserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age
    })

    user.save()
        .then((dataUser) => {
            res.send(dataUser)
        })
        .catch((error) => {
            res.status(500).send({
                message: error.message
            })
        })
}
exports.update = (req, res) => {
    if (Object.entries(req.body).length == 0) {
        return res.status(400).send({
            message: 'Los datos son obligatorios'
        })
    }
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        role: req.body.role,
        birthDate: req.body.birthDate,
        age: req.body.age

    }
    /**
     * findByIdAndUpdate =>Metodo de mongoose que permite 
     * buscar por id de usuario tiene los parámetros:
     *  -El id del usuario =>req.params.id es el id que se envía por url
     * -los datos nuevos.
     */
    UserModel.findByIdAndUpdate(req.params.id, user)
        .then(
            (userUpdate) => {
                res.send(userUpdate)
            }
        ).catch(
            (error)=>{
                   res.status(500).send({
                       message: error.message
                   })
            }
        )
}
exports.getAll = (req,res)=>{
   UserModel.find()
    .then((users)=>res.send(users))
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}
exports.getOne = (req,res)=>{
    UserModel.findById(req.params.id)
    .then((user)=>res.send(user))
    .catch(
        (error)=>{
            return res.status(500).send({
                message:error.message
            })
        }
    )
}

exports.deleteOne =(req,res) =>{
    UserModel.findByIdAndRemove(req.params.id)
    .then((user) => {res.send(user)})
    .catch((error) => {
        res.status(500).send({message: error.message})
    })
}