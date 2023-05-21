const jwt = require('jsonwebtoken')
const authMiddleware = (req, res, next) => {
	const token = req.header('Authorization');
	if (!token) {
		return res.status(401).json({error: 'Unauthorized'})
	}
	const decoded = jwt.verify(token, 'some-private-key')
	req.token = decoded;
	next();
}

module.exports = authMiddleware
