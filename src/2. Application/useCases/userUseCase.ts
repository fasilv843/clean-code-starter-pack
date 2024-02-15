import { IUser } from "../../1. Domain/user"
import { IUserRepository } from "../iRepositories/userRepository";
export class UserUseCase {
    // Injecting Interface (Abstraction) to avoid dependence on repository (infrastructure layer) // Dependency Inversion
    constructor (private readonly _userRepo: IUserRepository) {}
    
    async saveUserData(user: IUser): Promise<IUser> {
        try {
            console.log(user, 'user from saveUserData')
            const savedUser = await this._userRepo.save(user)
            return savedUser
        } catch (error) {
            throw error
        }
    }

    async getUserData (userId: string): Promise<IUser> {
        try {
            const retrievedUser = await this._userRepo.getUserData(userId)
            if (retrievedUser) {
                return retrievedUser
            }
            throw Error('User not found')
        } catch (error) {
            throw error
        }
    }

    async updateUserData (user: IUser): Promise<IUser> {
        try {
            const updatedUser = await this._userRepo.updateUser(user)
            if (updatedUser) {
                return updatedUser
            }
            throw Error('User not found')
        } catch (error) {
            throw error
        }
    }

    async deleteUser (userId: string): Promise<any> {
        try {
            const deletedUser = await this._userRepo.deleteUser(userId)
            if (deletedUser) {
                return deletedUser
            }
            throw Error('User not found')
        } catch (error) {
            throw error
        }
    }
}