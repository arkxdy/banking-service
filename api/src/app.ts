import { Application, Request, Response } from "express";
import verifyToken from "./application/middlewares/verifyToken";

const express = require('express')

const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')

const authRouter = require('./application/routes/auth.router')
const userRouter = require('./application/routes/user.router') 
const accountRouter = require('./application/routes/account.router')
const transactionRouter = require('./application/routes/transaction.router')
const errorHandlers = require('./application/middlewares/error.handler')

const app:Application = express();

app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.get('/', (_req: Request, res: Response) => {
    return res.json("Server is running")
})
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(compression())

app.use('/api', authRouter)
app.use('/api', verifyToken.verifyToken)
app.use('/api', userRouter)
app.use('/api', accountRouter)
app.use('/api', transactionRouter)
app.use(errorHandlers.notFound)

module.exports = app;
