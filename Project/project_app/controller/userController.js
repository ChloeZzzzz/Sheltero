var users = require('../models/user');

const userLogIn = (req, res) => {
	console.log("req:", req.params.userCredential);
	var credential = req.params.userCredential.toString().split(":");
	console.log("username---", credential);
	const user = users.find(user => 
		user.email_address === credential[0] && 
		user.password === credential[1]);

	if (user) {
		res.send(user);
	} else {
		res.send('<H1>Username or password is wrong!</H1>');
	}
}

const userSignUp = (req, res) => {
	const user = req.body;
	console.log("addUser:", user);

	users.push(user);
	res.send(users);
}

const userUpdate = (req, res) => {
	const updated_user = req.body;

	const user = users.find(user => user.id === req.params.id);
	if (!user) {
		return res.send('<H1>Cannot find this user, unable to update!</H1>');
	}

	Object.assign(user, updated_user);

	res.send(user);
}


module.exports = {
	userLogIn,
	userSignUp,
	userUpdate
};