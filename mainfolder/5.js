import express from "express";
const app = express()

const middlware = (req, res, next)=>{
console.log(`Request received at ${new Date().toLocaleTimeString()} | Method: ${req.method} | URL: ${req.url}`)
next()
}

const custom =(req,res, next)=>{
    res.json({
        "error": 'Route not found'
    })
    next()
}

app.use(middlware)
app.use(express.json())

app.get( '/home',(req, res)=> res.send("Welcome Home"))
app.get( '/services',(req, res)=> res.send("Our Services"))

app.post('/login', (req, res)=> {
    const username = req.body.username
    res.send(`User ${username} logged in`)
})

app.use(custom)
app.listen(4000, ()=>console.log('Server is running on Port'))