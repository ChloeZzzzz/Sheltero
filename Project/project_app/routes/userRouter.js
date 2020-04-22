const express = require('express');

const userRouter = express.Router();

const userController = require('../controllers/userController.js');

userRouter.get('/:userCredential', (req, res) => userController.userLogIn(req, res));

userRouter.post('/', userController.userSignUp);

userRouter.post('/:id', userController.userUpdate);

module.exports = userRouter;