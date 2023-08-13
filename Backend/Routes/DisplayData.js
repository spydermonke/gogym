const express = require('express')
const router = express.Router()
router.post('/exercise', (req,res)=>{
    try {
        //console.log("ab");
        res.send([global.exercise,global.category,global.days, global.users])
    } catch (error) {
        console.error(error.message);
        res.send("server error")

    }
})

module.exports = router