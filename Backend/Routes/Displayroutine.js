const express = require('express')
const router = express.Router()
const User = require('../models/User')
router.post('/displayroutine', async(req,res)=>{
    let emailin = req.body.email;
        console.log(emailin);
    try {
        let userdata = await User.findOne({ email: emailin })
        res.send([userdata.Mondayschedule, userdata.Tuesdayschedule,userdata.Wednesdayschedule,userdata.Thursdayschedule,userdata.Fridayschedule,userdata.Saturdayschedule,userdata.Sundayschedule,global.days,global.exercise])
    } catch (error) {
        console.error(error.message);
        res.send("server error")
    }
})

module.exports = router