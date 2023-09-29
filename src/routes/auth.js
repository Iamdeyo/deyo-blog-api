'use strict';
import express from 'express';
import { database } from '../libs/Prisma.js';
import { login, me, register } from '../controllers/auth.js';
import { tokenAuth } from '../middleware/auth.js';
const router = express.Router()


router.post('/register', register)
router.post('/login', login)
router.get('/me', tokenAuth, me)

export default router