const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/removeroutine', async (req, res) => {
  const email = req.body.email;
  const exerciseName = req.body.ename;
  const day = req.body.day;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    let targetSchedule;
    switch (day) {
      case 1:
        targetSchedule = user.Mondayschedule;
        break;
      case 2:
        targetSchedule = user.Tuesdayschedule;
        break;
      case 3:
        targetSchedule = user.Wednesdayschedule;
        break;
      case 4:
        targetSchedule = user.Thursdayschedule;
        break;
      case 5:
        targetSchedule = user.Fridayschedule;
        break;
      case 6:
        targetSchedule = user.Saturdayschedule;
        break;
      case 7:
        targetSchedule = user.Sundayschedule;
        break;
      default:
        return res.status(400).json({ success: false, message: 'Invalid day' });
    }

    const indexToRemove = targetSchedule.indexOf(exerciseName);
    if (indexToRemove !== -1) {
      targetSchedule.splice(indexToRemove, 1);
      await user.save();
      return res.json({ success: true });
    } else {
      return res.json({ success: false, message: 'Exercise not found in the schedule' });
    }
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
});

module.exports = router;
