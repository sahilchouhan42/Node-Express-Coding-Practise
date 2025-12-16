import express from 'express'
import 'dotenv/config'
import helloController from './controllers/helloController.js'
const app = express()
const port = process.env.PORT||6500

app.get('/hello', helloController)

app.listen(port, ()=>console.log(`Server is running on ${port}`))