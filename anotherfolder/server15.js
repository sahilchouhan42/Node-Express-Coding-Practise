import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||6500

app.get('/', (req, res)=>res.send("Server is running"))

app.listen(port, ()=>console.log(`Server is running on ${port}`))