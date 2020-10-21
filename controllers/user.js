const UserModel = require('../models/user')

exports.create = (req, res) => {

   /* if(Object.entries(req,body).length == 0){
        return res.status(400).send({
            message:'Los datos son obligatorios'
        })
    }*/
    const user = new UserModel({
        fisrtName: req.body.fisrtName,
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
    if(Object.entries(req,body).length == 0){
        return res.status(400).send({
            message:'Los datos son obligatorios'
        })
    }
   UserModel.findByIdAndUpdate(req.params.id,user)
   .then(
       (userUpdate)=>{
           res.send
       }
   )
}
