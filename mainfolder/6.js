import express from 'express'
import dotenv from 'dotenv'
const app = express()
dotenv.config()
const port = process.env.port||3000

app.use(express.static('.env'))
app.use(express.static('public'))
app.use(express.json())

app.get('/test', (req, res)=>{
    res.sendFile('index.html')
})

app.get('/api/info', (req, res)=>res.json({
    "app": "Node Practise",
    "status": "running"
}))

app.get('/api/random', (req, res)=>{
    const randomNumber = Math.floor(Math.random()*100)+1;
    res.json({
        number: randomNumber
    })
})


app.listen(port, ()=>console.log(`Server is running on ${port}`))