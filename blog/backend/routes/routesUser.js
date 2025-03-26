const express = require('express');
const router = express.Router();
const loginController = require('../controllers/login');
const registerController = require('../controllers/user');

router.post('/login',loginController.login)

router.post('/register',registerController.crearUsuario)

module.exports = router;