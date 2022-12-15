var express = require('express')
var app = express()
app.get('/contact', (req, res) => {
    res.send('hi my lover two!')
})

app.listen(3000, () => {
    console.log('Example app listening on prot 3000!')
})