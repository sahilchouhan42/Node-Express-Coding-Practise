import express from 'express'
import 'dotenv/config'
const app = express()
const port = process.env.PORT||6500

app.get('/divide', (req, res)=>{
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    num2===0?res.send('Number connot be divisible by zero'): res.send(`result is ${num1/num2}`)
})


app.listen(port, ()=>console.log(`Server is running on ${port}`))