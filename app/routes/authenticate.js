import express from 'express';
const router = express.Router();

import { validateLogin } from '../http/validator/user';
import { Auth } from '../http/controller/authenticateController';
 
router.route('/')
    .post(validateLogin, (req, res) => { 
        Auth.login(req, res); 
    })


export default router;