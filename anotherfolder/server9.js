import express from 'express';
import 'dotenv/config'
import path from 'path'
import { fileURLToPath } from 'url';
const app = express()
const port = process.env.PORT||6500

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, "public")))

app.get('/home', (req, res)=>{
        // res.sendFile(path.join(__dirname, "public", "index.html"))
        res.sendFile(path.join(__dirname, 'public/index.html'))
})



app.listen(port, ()=>console.log(`Server is running on ${port}`))