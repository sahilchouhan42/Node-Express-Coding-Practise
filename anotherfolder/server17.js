import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const app = express()
const port = process.env.PORT

const verifyToken = (req, res, next)=>{
    const authHeader = req.header.authorization
    if(!authHeader) return res.send("Unauthorized");

    const token = authHeader.split(" ")[1]

    try {
        jwt.verify(token, process.env.JWT_SECRET)
        next()
    } catch (error) {
        console.log(error.message)
        res.send("Unauthized access")
    }
}

app.get('/profile', verifyToken, (req, res)=>res.send('Welcome to my profile'))


app.listen(port, ()=>console.log(`Server is running on ${port}`))