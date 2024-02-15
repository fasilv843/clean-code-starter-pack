import { Request, Response, NextFunction } from "express"

// This is just a sample, apply your project authorized logic here like jwt verification, user blocked or not
export const userAuth = async (req: Request, res: Response, next: NextFunction) => {
    if (true){
        // User is authorized
        console.log('authorized from middleware');
        next()
    } else {
        // User is not authorized, return 401 Unauthorized
        console.log('not authorized from middleware');
        res.status(401).json({message: 'Unauthorized'})
    }
}