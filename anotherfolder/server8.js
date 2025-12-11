import express from 'express'
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'
const app = express()
const port = process.env.PORT||6500

app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)

app.listen(port, ()=>console.log(`Server is running on ${port}`))
