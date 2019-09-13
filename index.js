const express = require('express')

const app = express()

app.get('/test', (req, res) => {
    res.send('Hellow, this is test page')
})
app.get('/', (req, res) => {
    res.send('Heeeeee')
})

app.listen(process.env.PORT || 8080)