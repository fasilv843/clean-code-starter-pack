import express, { NextFunction, Request } from "express";
import { UserController } from "../../3. Presentation/Controllers/userController";
import { UserUseCase } from "../../2. Application/useCases/userUseCase";
import { userAuth } from "../middleware/userAuth";
import { UserRepository } from "../repositories/userRepository";
import { validateUserData } from "../middleware/validateUserData";
const userRouter = express.Router()

const userRepository = new UserRepository()
const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

userRouter.post('/', userAuth, validateUserData, (req, res, next) => userController.saveUserData(req, res, next))
userRouter.get('/:userId', userAuth, (req, res, next) => userController.getUserData(req, res, next))
userRouter.put('/', userAuth, (req, res, next) => userController.updateUserData(req, res, next))
userRouter.delete('/:userId', userAuth, (req, res, next) => userController.deleteUserData(req, res, next))

export default userRouter