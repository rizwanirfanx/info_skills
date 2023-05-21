const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
	const token = req.header('Authorization');
	if (!token) {
		return res.status(401).json({error: 'Unauthorized'})
	}
	try {
		const decoded = jwt.verify(token, 'some-private-key')
		req.token = decoded;
		next();
	}
	catch (error) {
		res.status(500).json({error: error})
	}
}

module.exports = authMiddleware
