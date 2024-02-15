import mongoose, { Model, Schema } from 'mongoose'
import { IUser } from '../../1. Domain/user'

const userSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})

export const userModel: Model<IUser & Document> = mongoose.model<IUser & Document>('users', userSchema)
