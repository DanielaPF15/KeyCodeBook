module.exports = (app) =>{
    const user = require('../controllers/user')
    app.post('/user/create',user.create)
}