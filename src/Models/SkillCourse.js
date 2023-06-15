const mongoose = require('mongoose');
const skillCourseSchema = mongoose.Schema({
	skill: {
		type: mongoose.Types.ObjectId,
		ref: 'Skill',
	},
	course: {
		type: mongoose.Types.ObjectId,
		ref: 'Course',
	},
},)

const skillCourseModel = mongoose.model('SkillCourse', skillCourseSchema)

module.exports = skillCourseModel
