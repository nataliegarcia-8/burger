const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static("public"))

const exhbs = require('express-handlebars')
app.engine('handlebars', exhbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(require('./controllers/burgers_controller'))

app.listen(PORT, function () { console.log("Listening on http://localhost:" + PORT) })