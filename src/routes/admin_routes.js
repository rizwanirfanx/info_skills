const router = require('express').Router();
const authMiddleware = require('./../middlewares/auth_middleware');
const isAdmin = require('./../middlewares/is_admin');


router.post('/admin' , [authMiddleware , isAdmin], (req,res) => {
	res.json({result: "Success"})
})


module.exports = router;
