const User = require('./../Models/User')
const isAdmin = async (req, res, next) => {
	const user = await User.findById(req.token.userId)
	if (user.role == 'admin') {
		return next()
	}
	return res.status(401).json({error: "Unauthorized!"})

}
module.exports = isAdmin

