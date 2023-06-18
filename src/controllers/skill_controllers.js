const Skill = require('./../Models/Skill')

exports.addSkill = async (req, res) => {
	let {name, description, slug} = req.body;
	console.log(req.body)
	if (!slug) {
		slug = name.toLowerCase().replace(/\s+/g, '-');
	}
	else {
		slug = slug.toLowerCase()
		slug = slug.replace(/\s+/g, '-');
	}

	try {
		const newSkill = new Skill({name, description, slug});
		const savedSkill = await newSkill.save();
		return res.status(200).json({result: savedSkill});
	}
	catch (error) {
		return res.status(500).json({error: error})
	}

}
