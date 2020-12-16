const mongoose = require('mongoose')
const { schema } = require('./staff_member_models')

const attendanceSchema = new mongoose.Schema(
    {
     
        ID: {

            type:mongoose.Schema.Types.ObjectId,
            unique:true,
            required:true,
            ref:"attendance"
            
        },
        month: {
            type: String,
            required:true
        } ,
        day: {
            type: String,
            required:true
        } ,
        signInTime: {
            type: Date,
            required:true
        } ,
        signOutTime: {
            type: Date,
            required:true
        } 
    })
    
    //req mongoose, then schema, then export
    
    module.exports.model = mongoose.model('attendance',attendanceSchema)
    module.exports.attendanceSchema=attendanceSchema
    //table is lowercase and plural of 'user' insterted above
    