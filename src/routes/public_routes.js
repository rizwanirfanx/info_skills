const router = require('express').Router();
const Course = require('./../Models/Course');
const Skill = require('./../Models/Skill');



router.get('/courses', async (req, res) => {
	try {
		const result = await Course.find();
		res.status(200).json({result: result})
	}
	catch (error) {
		res.status(500).json({error: error})
	}
})


router.get('/course/:id', async (req, res) => {
	var {id} = req.params
	try {
		const course = await Course.findById(id);
		return res.status(200).json({result: course})
	} catch (error) {
		return res.status(500).json({error: error})
	}
})

router.get('/skills', async (req, res) => {
	try {
		const result = await Skill.find();
		res.status(200).json({result: result})
	}
	catch (error) {
		res.status(500).json({error: error})
	}
})


module.exports = router
