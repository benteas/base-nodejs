var express = require('express')
var app = express()
app.get('/contact', () => {
    res.send('hi my lover!')
})

app.listen(3000, () => {
    console.log('Example app listening on prot 3000!')
})