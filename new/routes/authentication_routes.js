const staff_members_models = require('../models/staff_member_models')
const express = require('express')
const { compareSync } = require('bcrypt')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()

router.route('/login')
    .post(async (req, res) => {
        console.log("HII")
        const staff = await staff_members_models.model.findOne({ email: req.body.email })
        if (staff) {
            //const correctPassword=await bcrypt.compare(req.body.password,staff.password)

            console.log("correct password: ", staff.password)
            console.log("entered password: ", req.body.password)
            console.log(staff.password == req.body.password)

            //if(correctPassword){
            if (staff.password == req.body.password) {
              const token = jwt.sign({ _id: staff._id, role: staff.role }, process.env.TOKEN_SECRET)
              res.header('token', token)
              res.send()
              //return res.redirect('/homePage')
            }
            return res.status(401).send('Invalid password')
        }
        return res.status(401).send('Invalid email')
    })

    module.exports = router