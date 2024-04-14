import { Request, Response } from "express";
import { pool } from "../../data/data-sources/db-datasource/dbDatasource";

const getTransactionHistory = async (req: Request, res: Response): Promise<Response> => {
    try{
        const accountNumber: number = parseInt(req.body.accountNumber)
        const currDateString: string = new Date().toLocaleDateString()
        const currDate: Date = new Date()
        currDate.setDate(currDate.getDate() - 30)
        const prevDateString: string = currDate.toLocaleDateString()
        const response = await pool.query(`select * from transaction where account_id = ${accountNumber} date between ${currDateString} and ${prevDateString}`)
        if(response.rowCount === 0){
            return res.status(400).json({
                success: false,
                message: 'Connot find Transaction history'
            })
        }
        return res.status(200).json(response.rows)
    }catch(error){
        return res.status(500).json({
            success: false,
            message: 'Cannot retrieve transaction history',
            error: error
        })
    }
}

const sendMoney = async (req: Request, res: Response): Promise<Response> => {
    const client = await pool.connect()
    try{
        const amount = parseFloat(req.body.amount)  
        const senderId = parseInt(req.body.accountNumber)
        const receiverId = parseInt(req.body.recipientAccountNumber)
        const debitQuery = `update accounts set balance = balance - $1 where account_id = $2 returning balance`
        const debitResult = await client.query(debitQuery, [amount, senderId])
        if(debitResult.rowCount === 0 || debitResult.rows[0].balance<0){
            await client.query('ROLLBACK')
            return res.status(400).json({
                success: false,
                message: 'Insufficient balance'
            })
        }

        const creditQuery = `update accounts set balance = balance + $1 where account_id = $2 returning balance`
        const creditResult = await client.query(creditQuery, [amount, receiverId])
        if(creditResult.rowCount === 0){
            await client.query('ROLLBACK')
            return res.status(400).json({
                success: false,
                message: 'Annot find recipient account'
            })
        }
        await client.query('COMMIT')
        return res.status(200).json({
            success: true,
            message: 'Money sent successfully'
        })
    }catch(error){
        await client.query('ROLLBACK')
        return res.status(500).json({
            success: false,
            message: 'Cannot complete request',
            error: error
        })
    }finally{
        client.release()
    }
}

export default {
    getTransactionHistory,
    sendMoney
}