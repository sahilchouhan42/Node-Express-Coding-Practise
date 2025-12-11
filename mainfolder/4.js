import express from 'express'
const app = express();

app.use(express.json())

const user = {'name': 'John doe', 'age': 25}
const products = [
    {id: 1, name: 'Laptop'},
    {id: 2, name: 'Keyboard'},
]

app.get('/user', (req, res)=>{
    res.json(user)
})

app.get('/products', (req, res)=>{
    res.json(products)
})

app.post('/add-user', (req, res)=>{
    const name = req.body.name
    const age = req.body.age
    res.send(`${name} of ${age} is addedd`)
})

app.listen(4000, ()=>console.log("Server is running on Port"))