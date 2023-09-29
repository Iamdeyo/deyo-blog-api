'use strict';
import express from 'express';
import { database } from '../libs/Prisma.js';
const router = express.Router()


router.post('/', async (req, res)=>{
    try {

        const user = await database.user.create({data:{username: 'deyo', password: 'nosecret'}})
        console.log(user)
        res.send('user')
        
    } catch (error) {
        console.log(error)
        res.send('errer')
    }
})

export default router