import { Request, Response, NextFunction } from 'express';

//? Handle error according to your logic
export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err, 'error from errorHandler middleware');
    res.status(500).json({ error: err.message });
};

