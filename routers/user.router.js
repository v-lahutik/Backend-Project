import express from 'express';
import {login, logout, register, verifyAccount} from '../controllers/user.controller.js';
import { registerValidation, loginValidation } from '../validations/users.validation.js';
import { handleValidationErrors } from '../middlewares/handleValidationResult.js';


const userRouter=express.Router();

userRouter.route('/register').post(registerValidation,handleValidationErrors, register)
userRouter.route('/verify/:vtoken/:uid').get(verifyAccount)
userRouter.route('/login').post(loginValidation, login)
userRouter.route('/logout').get(logout)

export default userRouter;