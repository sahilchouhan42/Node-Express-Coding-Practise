import express from 'express'
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url'
const app = express()
const port  =process.env.PORT||6500

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, "public")))

app.get('/form', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/form.html'))
})

app.post('/submit', (req, res)=>{
    const {name, email}= req.body;
    console.log({name}, {email})
    res.json({
        name: name,
        email: email,
        message: "user added "
    })
})



app.listen(port, ()=>console.log(`Server is running on ${port}`))