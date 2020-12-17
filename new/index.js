const {app} = require('./app.js')
const staff_member_routes=require('./routes/staff_member_routes')
const authentication_routes=require('./routes/authentication_routes')
const mongoose = require('mongoose')
require('dotenv').config()
console.log(process.env.DB_URL)

mongoose.connect(process.env.DB_URL, {useNewUrlParser: true , useUnifiedTopology:true})

authentication_routes.route('')
staff_member_routes.route('')
//hiiiis

app.listen(process.env.PORT)