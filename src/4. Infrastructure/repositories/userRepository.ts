import { IUserRepository } from "../../2. Application/iRepositories/userRepository";
import { IUser } from "../../1. Domain/user";
import { userModel } from "../models/userSchema";

export class UserRepository implements IUserRepository {
    async save (user: IUser): Promise<IUser> {
        return new userModel(user).save()
    }

    async getUserData(userId: string): Promise<IUser | null> {
        return await userModel.findById(userId)
    }

    async updateUser(user: IUser): Promise<IUser | null> {
        console.log(user, 'user from updateUser repo');
        
        return await userModel.findByIdAndUpdate(
            { _id: user._id },
            user,
            { new: true }
        )
    }

    async deleteUser(userId: string): Promise<IUser | null> {
        return await userModel.findByIdAndDelete(userId)
    }
}