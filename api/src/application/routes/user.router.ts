import { Router } from "express";
import { createUser, getUserById, getUserList } from "../controllers/user.controller";
const { checkPermission } =  require('../middlewares/api.permission')
const errorHandlers = require('../middlewares/error.handler')
const express = require('express')

const router: Router = express.Router()

router.route('/user/list').get(checkPermission('read'), errorHandlers.catchErros(getUserList))
router.route('/user/:id')
    .get(getUserById)
    .post(createUser)
    .delete()
    .put()
module.exports = router;
