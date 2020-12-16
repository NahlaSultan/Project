const staff_members_models = require('../models/staff_member_models')
const express = require('express')
const { compareSync } = require('bcrypt')
const router = express.Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
require('dotenv').config()




router.route('/homePage')
    .get( (req, res) => {

        res.send('/home')
    })


router.route('/signOut')
    .get((req, res) => {
        res.send('/login')
    })

router.route('/homePage')
    .get((req, res) => {
        res.send('/login')
    })

router.route('/resetPassword')
    .post( async (req, res) => {
        console.log(req.user)
        const staffId=req.user._id;
        console.log("/n in req")
        const staff = await staff_members_models.findOne({ _id: staffId })
      if(staff){
          
      res.send('Hi')
      }
    })
module.exports = router