import express from 'express'
import * as dotenv from 'dotenv'
dotenv.config()
import userRouter from '../routes/userRoutes'; 

export const createServer = () => {
    try {
        const app = express()

        app.use(express.json())
        app.use(express.urlencoded({extended:true}))

        app.use('/user', userRouter)
        return app

    } catch (error) {
        console.log('error logging from createServer, from app.ts');
        console.error('error caught from app')
        console.log((error as Error).message);
    }
}