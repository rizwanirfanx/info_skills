
const authMiddleware = (req, res, next) => {
	const token = req.header('Authorization');
	console.log('Hey I am Auth Middleware In Action')
	if (!token) {
		return res.status(401).json({error: 'Unauthorized'})
	}
	console.log(token)
	req.token = token;
	next();
}

module.exports = authMiddleware
