import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.port||6500

app.use((req, res, next)=>(console.log("A new Request Received"), next()))

const showTime = ((req, res, next)=>{
    const time = new Date().toLocaleTimeString()
    console.log(`Time : ${time}`)
    next()
})

app.get('/', showTime, (req, res)=>{
    res.send("Home Page with time logged in console")
})

const checkAdmin = (req, res, next)=>{
    const key = req.query.key
    if(key==='1234'){
        next()
    } else{
        res.send('Unauthorized User')
    }
}

app.get('/admin', checkAdmin, (req, res)=>{
    res.send('Welcome Admin')
})

app.listen(port, ()=>console.log(`Server is running on ${port}`))