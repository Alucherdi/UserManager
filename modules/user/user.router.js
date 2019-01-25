var express = require("express")
var app = module.exports = express()

var UserModel = require("./user.model")

app.post("/users/getAll", (req, res) => {

})

app.post("/user/insert", (req, res) => {
	var model = new UserModel()
	
	model.insert(req.body).then(dbRes => {
		res.send(dbRes)
	})
})