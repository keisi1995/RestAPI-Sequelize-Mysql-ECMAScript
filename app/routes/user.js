import express from 'express';
const router = express.Router();

import { validateStore } from '../http/validator/user';
import authMiddleware from '../http/middleware/authMiddleware';
import * as User from '../http/controller/userController';

router.route('/')
    .get(authMiddleware, (req, res) => { 
        User.index(req, res);
    })
    .post(validateStore, (req, res) => {
        User.store(req, res);
    })

router.route('/:id_user(\\d+)')
    .get(authMiddleware, (req, res) => {
        User.show(req, res);
    })
    .put(validateStore, authMiddleware, (req, res) => {
        User.update(req, res);
    })
    .delete(authMiddleware, (req, res) => {
        User.destroy(req, res); 
    })

export default router;