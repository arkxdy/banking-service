import { Router } from "express";
import accountController from '../controllers/account.controller'
//const { validateApi } = require('../middlewares/apiAuthorization')
const express = require('express')

const router: Router = express.Router()

//const { catchErros } = require('../middlewares/error.handler')
router.route('/account').post(accountController.createAccountDetail)
router.route('/account/:id')
    .get(accountController.getAccountDetail)
    .delete(accountController.deleteAccountDetail)
    .put(accountController.getAccountDetail)
module.exports = router;
