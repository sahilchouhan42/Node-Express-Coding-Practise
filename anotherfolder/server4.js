import e from 'express'
import 'dotenv/config'
const app = e()
const port = process.env.port||6500

app.use((_, __, next)=>(console.log(`A new Request Received`), next()))

const showTime = (_, __, next)=>(console.log(`Time : ${new Date().toLocaleTimeString()}`), next())

app.get('/',showTime, (_, res)=> res.send("Home page with logged time"))

const checkAdmin = (req, res, next)=> req.query.key==='1234'?next(): res.send("Unauthorized User")

app.get('/admin', checkAdmin, (_, res)=>res.send("Welcome Admin"))

app.listen(port, ()=>console.log(`Server in running on ${port}`))