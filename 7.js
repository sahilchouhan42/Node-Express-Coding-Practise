import express from 'express'
import path from 'path'
import fs from 'fs'

const app = express()
const absolutePath = path.resolve('./public/data.txt')

app.use(express.json())

app.get('/', (req, res)=>{
    console.log(absolutePath)
    res.send('ok')
})

app.get('/read-file', (req, res)=>{
    const fileData = fs.readFileSync(absolutePath).toString()
    console.log(fileData)
    res.json({
        "content": fileData
    })
})

app.post('/write-file', (req, res)=>{
    const text = req.body.text
    const updatedFile = fs.writeFileSync(absolutePath, text)
    // console.log(updatedFile)
    res.json({
        "content": updatedFile
    })
})

app.put('/append-file', (req, res)=>{
    const text = req.body.text
    const appendFile = fs.appendFileSync(absolutePath, text)
    res.json({
        "content": appendFile
    })
})

app.delete('/delete-file', (req, res)=>{
    const deleteFile = fs.unlinkSync(absolutePath)
    res.send('File deleted')
})
app.listen(4000, ()=>console.log('Server is running'))