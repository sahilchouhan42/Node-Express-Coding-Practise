import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||6500

//URL PARAMS
app.get('/user/:id', (req, res)=>{
    const {id} = req.params;
    res.send(`User ID is ${id}`)
})

//Query Params
app.get('/search', (req, res)=>{
    const {name, age} = req.query
    res.json({name, age})
})

//Multiple params 

app.get('/product/:category/:id', (req, res)=>{
    const { category, id} = req.params
    res.send(`Category: ${category}, Product ID: ${id}`)
})

app.listen(port, ()=>console.log(`Server is running on ${port}`))