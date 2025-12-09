import express from 'express'
import 'dotenv/config'
const app = express()
const port  = process.env.PORT||6700

app.get('/user/:id', (req, res)=>res.send(`User ID is ${req.params.id}`))

app.get('/search', (req, res)=>res.json(req.query))

app.get('/product/:category/:id', (req, res)=>res.send(`Category: ${req.params.category}, Product ID: ${req.params.id}`))

app.listen(port, ()=>console.log(`Server is running on ${port}`))