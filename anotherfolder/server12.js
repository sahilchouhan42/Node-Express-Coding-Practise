import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||6500

app.use(express.json())

app.post(('/login'), (req, res)=>{
    const {email, password} = req.body;
    if(!email||!password){
        return res.send("All fields are required")
    }
    if(password==='12345'){
        return res.send('Login Successfull')
    }
    res.send("Invalid credentials")
})

app.listen(port, ()=>console.log(`Server running on ${port}`))