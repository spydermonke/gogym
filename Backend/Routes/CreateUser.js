const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
router.post("/CreateUser", [
  body('email').isEmail(),
  body('password').isLength({ min: 8 })]

  , async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }


    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        dob: new Date(req.body.dob)

      })
      //console.log("hello")
      res.json({ success: true });
    } catch (error) {
      console.log(error)
      res.json({ success: false });
    }
  })
router.post("/Loginuser",
  [
    body('email').isEmail(),
    body('password').isLength({ min: 8 })],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let emailin = req.body.email;

    try {
      let userData = await User.findOne({email: emailin})
      if (!userData) {
        // alert("his E-mail doesn't have an account!")
        return res.status(400).json({ errors: "This E-mail doesn't have an account!" });
        
      }
      if (req.body.password !== userData.password) {
        return res.status(400).json({ errors: "Enter the correct password" });
      }
      return res.json({ success: true });
    } catch (error) {
      console.log(error)
      res.json({ success: false , error : errors});
    }
  })
module.exports = router