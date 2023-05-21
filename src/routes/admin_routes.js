const router = require('express').Router();
const authMiddleware = require('./../middlewares/auth_middleware');
const isAdmin = require('./../middlewares/is_admin');
const Course = require('./../Models/Course');


router.post('/admin', [authMiddleware, isAdmin], (req, res) => {
	res.json({result: "Success"})
})

router.post('/admin/courses/add', [authMiddleware, isAdmin], async (req, res) => {
	const {platform, link, status} = req.body;

	try {
		console.log('Executed')
		const newCourse = new Course({platform, link, status});
		console.log(newCourse)
		const savedCourse = await newCourse.save();
		return res.status(200).json({result: savedCourse});
	}
	catch (error) {
		return res.status(500).json({error: error})
	}

})


module.exports = router;
