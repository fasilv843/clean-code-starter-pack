import { Request, Response, NextFunction } from 'express';
import { IUser } from '../../1. Domain/user';

function validateRegisterData(data: IUser): string[] {
    const errors = [];

    // Name validation
    if (!data.name || data.name.trim() === "") {
        errors.push("Name is required");
    } else if (!isNaN(Number(data.name))) {
        errors.push("Name must be a string");
    }

    // Email validation
    if (!data.email || data.email.trim() === "") {
        errors.push("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.push("Invalid email format");
    }

    // Password validation
    if (!data.password || data.password.trim() === "") {
        errors.push("Password is required");
    } else if (data.password.length < 6) {
        errors.push("Password must be at least 6 characters long");
    }

    return errors;
}

// Middleware for validating user data
export const validateUserData = (req: Request, res: Response, next: NextFunction) => {
    const errors = validateRegisterData(req.body);

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next(); // Proceed to the next middleware/controller if no validation errors
}
