const express = require('express')//Estamos utilizando express en nuestro proyecto.
const cors = require('cors')
const bodyparser = require('body-parser')

const { conectDB} = require('./db')
const app = express()//Se convierte a la cconstante express en un objeto por el cual se va a trabajar

app.use(cors())
app.use(bodyparser.json())

conectDB()//Ejecutando la conexion a la base de datos

require('./routes/user')(app)
require('./routes/genre')(app)
require('./routes/book')(app)
app.listen(3000,() =>{
    console.log('Holaaa a todos')
      
})