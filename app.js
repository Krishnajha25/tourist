require('dotenv').config()
const userRouter = require('./api/users/users.router')
const express = require('express')


var app = express()
app.use(express.json())
app.use('/api/users', userRouter)

app.listen(process.env.NW_PORT, () => {
    console.log('App is up and running on port : ', process.env.NW_PORT)
})