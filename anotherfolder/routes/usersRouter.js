import { Router } from "express";

const usersRouter = Router()

usersRouter.get('/', (req, res)=> res.send('All Users'))
usersRouter.get('/:id', (req, res)=> res.send(`User ID is ${req.params.id}`))

export default usersRouter