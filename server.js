const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const path = require('path')

const app = express()
mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

const PORT = process.env.PORT || 3000
app.listen(PORT, _ => console.log(`http://localhost:${PORT}`))