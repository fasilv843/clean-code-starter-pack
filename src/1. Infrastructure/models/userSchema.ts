import mongoose, { Model, Schema } from 'mongoose'

export interface IUser {
    _id: string
    name: string
    email: string
    password: string
}

const userSchema: Schema = new Schema({
    name: String,
    email: String,
    password: String
})

export const userModel: Model<IUser & Document> = mongoose.model<IUser & Document>('users', userSchema)
