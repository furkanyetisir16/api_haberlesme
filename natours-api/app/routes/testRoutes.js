const {testIndexValidations} = require("../requests/test");
const {validateParams} = require("../requests/validateParams");

const express = require('express');
const testController = require('../controllers/testController')

const router = express.Router();


router.route('/').get(validateParams(testIndexValidations), testController.getTests)


module.exports = router
