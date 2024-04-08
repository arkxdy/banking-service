import { Router } from "express";
import { createUser, getUsersList } from "../controllers/user.controller";
//const { validateApi } = require('../middlewares/apiAuthorization')
const express = require('express')

const router: Router = express.Router()

//const { catchErros } = require('../middlewares/error.handler')
console.log('admin router')
router.route('/list').get(getUsersList)
router.route('/:id').get(getUsersList)
router.route('/create').post(createUser);
router.route('/update').put();
router.route('/delete').delete();
module.exports = router;
