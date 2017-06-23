const path = require("path")
const users = require("./../controllers/users.js")

module.exports = (app) => {
		app.post('/login', users.login);
		app.post('/register', users.register);
		app.get('/allusers', users.all_users);
		app.get('/logout', users.logout);
		app.get('/checkstatus', users.checkStatus);

		
    app.get("*", (req, res) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	})
}