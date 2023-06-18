const Skill = require('./../Models/Skill')

exports.addCourse = async (req, res) => {
	let {title, description, platform, link, status, skillName, slug} = req.body;
	const skill = await Skill.findOne({name: skillName})
	if (skill == null) {
		return res.status(400).json({error: 'skill not found'})
	}
	
	if (!slug) {
		slug = title.toLowerCase().replace(/\s+/g, '-');
		slug = slug + platform.toLowerCase().replace(/\s+/g, '-');

	}
	else {
		slug = slug.toLowerCase()
		slug = slug.replace(/\s+/g, '-');
	}
	const skillData = await Skill.findById(skill._id).exec()
	try {

		const newCourse = new Course({title, description, platform, link, status, slug});
		newCourse.skills.push(skillData._id)
		skillData.courses.push(newCourse)
		await skillData.save()
		const result = await newCourse.save()
		return res.status(200).json({result: result})
	}
	catch (error) {
		return res.status(500).json({error: error})
	}

}
