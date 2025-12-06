import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.post||6500

app.get('/about', (_, res)=>res.send('This is about page'))

app.get('/student', (_, res)=>res.json({name: 'sahil', course:"Node and Express", level: "Beginner"}))

app.get('/error', (_, res)=>res.status(400).send('Page not found'))

app.listen(port, ()=>console.log(`Server is running on ${port}`))