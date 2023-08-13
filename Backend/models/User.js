const mongoose = require('mongoose')
const { Schema } = mongoose
const UserSchema = new Schema({
    name: {
       type: String,
       required: true
    },
    email: {
        type: String,
       required: true
    },
    password:{
        type: String,
       required: true
    },
    dob: {
        type: Date,
        required: true
    },
    Mondayschedule:{
        type: [String]
    },
    Tuesdayschedule:{
        type: [String]
    },
    Wednesdayschedule:{
        type: [String]
    },
    Thursdayschedule:{
        type: [String]
    },
    Fridayschedule:{
        type: [String]
    },
    Saturdayschedule:{
        type: [String]
    },
    Sundayschedule:{
        type: [String]
    },
});
module.exports = mongoose.model('user', UserSchema)