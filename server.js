var express = require("express")
var app     = express()

var bp      = require("body-parser")

var config = require("./config")

app.use(bp.json())

app.use(require("./modules/user/user.router"))

app.listen(config.port, () => console.log(`binding ${config.port}`))