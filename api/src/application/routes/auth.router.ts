import { Router } from "express"
import authController from '../controllers/auth.controller'


const express = require('express')

const router:Router = express.Router()

router.route('/login').post(authController.loginUser)
router.route('/register').post(authController.registerUser)
module.exports = router;