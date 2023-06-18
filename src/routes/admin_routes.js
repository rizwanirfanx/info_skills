const router = require('express').Router();
const {addCourse} = require('../controllers/course_controllers');
const {addSkill} = require('../controllers/skill_controllers');
const authMiddleware = require('./../middlewares/auth_middleware');
const isAdmin = require('./../middlewares/is_admin');




router.post('/admin', [authMiddleware, isAdmin], (req, res) => {
	res.json({result: "Success"})
})

router.post('/admin/courses/add', [authMiddleware, isAdmin], addCourse)

router.post('/admin/skills/add', [authMiddleware, isAdmin], addSkill)









module.exports = router;
