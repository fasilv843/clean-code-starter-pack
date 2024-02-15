import { Request, Response, NextFunction } from 'express'
import { UserUseCase } from "../../2. Application/useCases/userUseCase";

/*
According to Single Responsibility Principle (SRP part of SOLID principles), we have to create multiple controllers
each for specific functionalities in UserController.
eg: SaveUserController, GetUserController, UpdateUserController, DeleteUserController

I violated SRP so that I can reduce number of controllers

Single Responsibility Principle: A class should have only one responsibility or job. This helps to keep classes focused and easy to understand.

*/

export class UserController {
    constructor (
        // We can only inject modules from Inner Layers or Higher Level Layers
        // Also same when importing something.
        private readonly _userUseCase: UserUseCase
    ) {}

    async saveUserData(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.body
            console.log(user, 'user from controller');
            // Validate received data before passing to use case
            // Always pass one argument to use case, pass it as an object if there is multiple data
            const savedUser = await this._userUseCase.saveUserData(user)
            res.status(200).json(savedUser)
        } catch (error) {
            next(error)
        }
    }

    async getUserData(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId
            const user = await this._userUseCase.getUserData(userId)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }

    async updateUserData(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.body
            const updatedUser = await this._userUseCase.updateUserData(user)
            res.status(200).json(updatedUser)
        } catch (error) {
            next(error)
        }
    }

    async deleteUserData(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.params.userId
            const user = await this._userUseCase.deleteUser(userId)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}