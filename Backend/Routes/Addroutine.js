const express = require('express')
const router = express.Router()
const User = require('../models/User')
router.post('/Addroutine', async (req, res) => {
    let emailin = req.body.email;
    let exename = req.body.ename;
    let addday = req.body.day;
    console.log(emailin)
    console.log(addday)
    try {
        let userdata = await User.findOne({ email: emailin })
        console.log(exename)
        //console.log(userdata.Mondayschedule);
        if (addday == 1) {
            userdata.Mondayschedule.push(exename)
        }
        if (addday == 2) {
            console.log("here");
            userdata.Tuesdayschedule.push(exename)
        }
        if (addday == 3) {
            userdata.Wednesdayschedule.push(exename)
        }
        if (addday == 4) {
            userdata.Thursdayschedule.push(exename)
        }
        if (addday == 5) {
            userdata.Fridayschedule.push(exename)
        }
        if (addday == 6) {
            userdata.Saturdayschedule.push(exename)
        }
        if (addday == 7) {
            userdata.Sundayschedule.push(exename)
        }

        userdata.save();
        console.log(userdata.Mondayschedule);
        
        return res.json({ success: true });
    } catch (error) {
        console.error(error.message);

        res.send("server error")
        return res.json({ success: false });

    }
})

module.exports = router