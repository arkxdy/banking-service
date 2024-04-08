// import {Application, Request, Response} from 'express';
// import { createUser, getUsersList } from './application/controllers/user.controller';

// const express = require('express')
// const app: Application = express();
// app.use(express.json())

require('dotenv').config();
const app = require('./app')
// app.get('/v1/user/list', getUsersList)
// app.get('/v1/user/create', createUser)
// app.get('/app',(_req:Request, res:Response) => {
//   res.status(200).json({status: "app is running"})
// })

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`);
});