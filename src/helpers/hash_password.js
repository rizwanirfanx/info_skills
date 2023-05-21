const bcrypt = require('bcrypt');

const hashPassword = async () => {
	const saltRounds = 10;
	try {
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		return hashPassword
	} catch (error) {
		throw new Error('Hashing Failed');
	}
}


