import { Router } from "express";
const productsRouter = Router()

productsRouter.get('/', (req, res)=>res.send('All Products'))
productsRouter.get('/:id', (req, res)=>res.send(`Product ID is ${req.params.id}`))

export default productsRouter