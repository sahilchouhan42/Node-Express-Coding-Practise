import express from 'express'
const app = express()

app.get('/', (req, res)=>res.send("This is Home Page"))
app.get('/about', (req, res)=>res.send("This is About Page"))
app.get('/contact', (req, res)=>res.send("Contact Page: You can contact us anytime"))

app.listen(4000, ()=>console.log('Server is running on port'))