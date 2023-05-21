const express = require('express')
const router = express.Router();


router.post('/login', (req, res) => {
	const {username, email, password} = req.body
	res.json(req.body)
})

router.post('/register', (req, res) => {
	const {username, email, password} = req.body
	res.json(req.body)
})

module.exports = router
