import { Router } from "express";
import transactionController from '../controllers/transaction.controller'
const express = require('express')

const router: Router = express.Router()


router.route('/transactions/:id')
    .get(transactionController.getTransactionHistory)

router.route('/transaction')
    .post(transactionController.sendMoney)

module.exports = router;
