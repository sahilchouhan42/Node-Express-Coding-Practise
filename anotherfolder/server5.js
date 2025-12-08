import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||6500;

app.use(express.json())

//Register Route
app.post('/register', (req, res)=>{
    console.log(req.body)
    res.send("User Registered Successfully")
})

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    if(password==='12345'){
        res.send("Login Successfull")
    } else{
        res.send("Invalid Credential")
    }
})

app.listen(port, ()=>console.log(`Server is running on ${port}`))