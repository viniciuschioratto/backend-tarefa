const express = require('express')
const mongoose = require('mongoose')
const routes = require('../src/routes')
const cors = require('cors')

const app = express()

mongoose.connect('mongodb+srv://chioratto:teste123456@cluster0-gao4d.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3001)