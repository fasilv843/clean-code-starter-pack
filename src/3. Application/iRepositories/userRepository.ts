import { IUser } from "../../1. Infrastructure/models/userSchema";

export interface IUserRepository {
    save(user: IUser): Promise<IUser>
    getUserData(userId: string): Promise<IUser | null>
    updateUser(user: IUser): Promise<IUser | null>
    deleteUser(userId: string): Promise<IUser | null>
}