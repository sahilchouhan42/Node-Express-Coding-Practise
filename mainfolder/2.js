const express = require('express')
const app = express()

app.get('/hello', (req, res)=>{
    res.send('Hello From Express')
})

app.get('/time', (req, res)=>{
    res.send(new Date().toString())
})

app.listen(4000, ()=>console.log('Server is running on port'))