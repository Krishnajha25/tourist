require('dotenv').config()
const express = require('express')

var app = express()

app.get('/api', (req, res) => {
    res.json({
        status: '1',
        message: 'Wow! This works'
    })
})

app.listen(process.env.NW_PORT, () => {
    console.log('App is up and running on port : ', process.env.NW_PORT)
})