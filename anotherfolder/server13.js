import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||6500

const checkKey = (req, res, next)=>{
    const key = req.query.key
    if(key==='123'){
        next()
    } else{
        res.send("Access Denied")
    }
}


app.get('/secret', checkKey, (req, res)=>{
    res.send('Access Granted')
})

app.listen(port, ()=>console.log(`Server is running on ${port}`))