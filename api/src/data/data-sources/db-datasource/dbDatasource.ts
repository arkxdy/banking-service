import { Pool } from "pg";
// import { IPostgreConn } from "../../../core/types";
// require('dotenv').config();
// const postgresConnDetails:IPostgreConn = {
//     user: process.env.PG_USER??'postgres',
//     host: process.env.PG_HOST??'localhost',
//     password: process.env.PG_PASSWORD??"Adi@9661",
//     database: process.env.PG_DATABASE??"bank-service",
//     port: parseInt(process.env.PG_PORT!==undefined ? process.env.PG_PORT : '5432')
// }
export const pool:Pool = new Pool({
    // user: postgresConnDetails.user,
    // host: postgresConnDetails.host,
    // password: postgresConnDetails.password,
    // database: postgresConnDetails.database,
    // port: postgresConnDetails.port,
    user:'postgres',
    host:'localhost',
    database:'bank-service',
    password:'Adi@9661',
    port: 5432
})