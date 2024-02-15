import { IUser } from "../../1. Domain/user"
/*
Abstraction of methods to define on User Repository
*/
export interface IUserRepository {
    save(user: IUser): Promise<IUser>
    getUserData(userId: string): Promise<IUser | null>
    updateUser(user: IUser): Promise<IUser | null>
    deleteUser(userId: string): Promise<IUser | null>
}