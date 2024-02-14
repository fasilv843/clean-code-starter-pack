import { Request, Response, NextFunction } from 'express';

export const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    console.log(err, 'error from errorHandler middleware');
    res.status(err.status || 500).json({ error: err.message }); // corrected syntax
};

