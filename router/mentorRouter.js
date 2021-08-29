const express = require('express');
const mentorController = require('./../controller/mentorController')

const router = express.Router();
router.route('/').get(mentorController.getAllMentors).post(mentorController.postMentor);
router.route('/:name').patch(mentorController.patchMentor).get(mentorController.getSpecificMentor)

module.exports = router;