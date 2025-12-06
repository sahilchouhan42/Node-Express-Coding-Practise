import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.port||6500

app.get('/', (_, res)=>res.send('Home Page'))

app.listen(port, ()=>console.log(`Server is running on ${port}`))