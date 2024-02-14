import { Request, Response, NextFunction } from "express"

export const userAuth = async (req: Request, res: Response, next: NextFunction) => {
    if (true){
        console.log('authenticated from middleware');
        next()
    } else {
        console.log('not authenticated from middleware');
        res.status(401).json({message: 'Unauthorized'})
    }
}