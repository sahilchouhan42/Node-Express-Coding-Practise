import express from 'express'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
const app = express()
const port  = process.env.PORT||6500

app.use(express.json())

app.post('/login', (req, res)=>{
    const {email, password} = req.body;
    if(password!=='12345'){
        return res.status(404).json({message: "Invalid Credentials"})
    }

    const token = jwt.sign(
        {email: email},
        process.env.JWT_SECRET,
        {expiresIn: "1h"}
    )

    res.json({message: "login Successfull", token: token})

})

app.listen(port, ()=>console.log(`Server is running on ${port}`))