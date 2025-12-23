import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js'
const app = express()
const port = process.env.PORT

connectDB()

app.listen(port, ()=>console.log(`Server is runnig on ${port}`))