const router = require('express').Router();
const authMiddleware = require('./../middlewares/auth_middleware');
const isAdmin = require('./../middlewares/is_admin');
const Course = require('./../Models/Course');
const Skill = require('./../Models/Skill');




router.post('/admin', [authMiddleware, isAdmin], (req, res) => {
	res.json({result: "Success"})
})

router.post('/admin/courses/add', [authMiddleware, isAdmin], async (req, res) => {
	const {title, description, platform, link, status, skillName} = req.body;
	const skill = await Skill.findOne({name: skillName})
	if (skill == null) {
		return res.status(400).json({error: 'skill not found'})
	}
	const skillData = await Skill.findById(skill._id).exec()
	//	return res.status(200).json({result: foundById._id})
	console.log(skillData._id)
	try {

		const newCourse = new Course({title, description, platform, link, status, courses: skillData._id});
		skillData.courses.push(newCourse._id)



//		const skillCourse = new SkillCourse({skill: skillData._id, course: newCourse._id})
		await newCourse.save()
		await skillData.save()
		return res.status(200).json({result: newCourse})
		return res.status(200).json({course: newCourse._id})
		//		const savedCourse = await newCourse.save();
		//		return res.status(200).json({result: savedCourse});
	}
	catch (error) {
		return res.status(500).json({error: error})
	}

})

router.post('/admin/skills/add', [authMiddleware, isAdmin], async (req, res) => {
	const {name, description} = req.body;
	console.log(req.body)
	console.log('Terrorististan')

	try {
		const newSkill = new Skill({name, description});
		const savedSkill = await newSkill.save();
		return res.status(200).json({result: savedSkill});
	}
	catch (error) {
		return res.status(500).json({error: error})
	}

})


router.post('/gd', async (req, res) => {
	const result = await Skill.findOne({name: 'Graphic Designing'}).populate('courses').exec()
	res.status(200).json({result: result})
})





module.exports = router;
