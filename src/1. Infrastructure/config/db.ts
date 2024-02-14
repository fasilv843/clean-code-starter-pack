import mongoose from "mongoose";

export const mongoConnect = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
        console.log(MONGO_URI, 'MongoURI from mongoConnect');
        if (MONGO_URI) {
            await mongoose.connect(MONGO_URI);
            console.log(`MongoDB connected: ${mongoose.connection.host}`);
        } else {
            throw Error('MONGO URL is undefined, check dotenv')
        }
    } catch (error) {
        console.log(`Error from mongoConnect : ${(error as Error).message}`);
        process.exit(1);
    }
}
