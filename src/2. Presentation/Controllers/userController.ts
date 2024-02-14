import { Request, Response, NextFunction } from 'express'
import { UserUseCase } from "../../3. Application/useCases/userUseCase";

export class UserController {
    constructor (
        private readonly _userUseCase: UserUseCase
    ) {}

    async saveUserData(req: Request, res: Response, next: NextFunction) {
        try {
            const user = req.body
            console.log(user, 'user from controller');
            
            const savedUser = await this._userUseCase.saveUserData(user)
            res.status(200).json(savedUser)
        } catch (error) {
            next(error)
        }
    }

    async getUserData(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await this._userUseCase.getUserData('65ccb0b457483ae1c0988865')
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
            const user = await this._userUseCase.deleteUser('65ccb0b457483ae1c0988865')
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }
    }
}