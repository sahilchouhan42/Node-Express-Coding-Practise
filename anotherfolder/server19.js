import express from 'express'
import 'dotenv/config'
import connectDB from './config/db.js'
import User from './model/userModel.js'
const app = express()
const port = process.env.PORT

connectDB()
app.use(express.json())

app.post('/users', async (req, res)=>{
    const {name, email} = req.body;
    const user = new User({name, email})
    await user.save()

    res.send('User created successfully')
})

app.listen(port, ()=>console.log(`Server is running on ${port}`))