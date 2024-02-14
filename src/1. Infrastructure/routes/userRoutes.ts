import express from "express";
import { UserController } from "../../2. Presentation/Controllers/userController";
import { UserUseCase } from "../../3. Application/useCases/userUseCase";
import { userAuth } from "../middleware/userAuth";
import { UserRepository } from "../repositories/userRepository";
const userRouter = express.Router()

const userRepository = new UserRepository()
const userUseCase = new UserUseCase(userRepository)
const userController = new UserController(userUseCase)

userRouter.post('/', userAuth, (req, res, next) => userController.saveUserData(req, res, next))
userRouter.get('/', userAuth, (req, res, next) => userController.getUserData(req, res, next))
userRouter.put('/', userAuth, (req, res, next) => userController.updateUserData(req, res, next))
userRouter.delete('/', userAuth, (req, res, next) => userController.deleteUserData(req, res, next))

export default userRouter