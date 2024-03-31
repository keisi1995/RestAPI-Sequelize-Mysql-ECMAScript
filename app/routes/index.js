import express from 'express';
const router = express.Router();

import user from './user.js';
import authenticate from './authenticate.js';

router.use(`/${process.env.API_PATH}/user`, user);
router.use(`/${process.env.API_PATH}/authenticate`, authenticate);

export default router;