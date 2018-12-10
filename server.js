const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const axios = require('axios')
const cheerio = require('cheerio')
const path = require('path')

const app = express()
mongoose.connect('mongodb://localhost/user', { useNewUrlParser: true })

app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyparser.urlencoded({ extended: true }))
app.use(bodyparser.json())

axios
 .get("http://reddit.com/")
 .then(r => {
   const $ = cheerio.load(r.data);
   const headers = $(".imors3-0.iuScIP").each((i, elem) => console.log($(elem).text()))
 })
 .catch(e => console.log(e));

const PORT = process.env.PORT || 3000
app.listen(PORT, _ => console.log(`http://localhost:${PORT}`))