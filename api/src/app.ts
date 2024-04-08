import { Application } from "express";
import { getUsersList } from "./application/controllers/user.controller";
//import { getUsersList } from "./application/controllers/user.controller";

const express = require('express')

const cors = require('cors')
const compression = require('compression')
const cookieParser = require('cookie-parser')

const accountApiRouter = require('./application/routes/account.router') 

const errorHandlers = require('./application/middlewares/error.handler')

const app:Application = express();

app.use(
    cors({
        origin: true,
        credentials: true,
    })
)

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(compression())
//app.get('/user',getUsersList)
app.use('/v1/user', accountApiRouter)
app.use('/api',getUsersList)
app.use(errorHandlers.notFound)

module.exports = app;
