import mongosse from 'mongoose';

import { ENV } from './env.js';

export const connectDB = async () => {
    try {
        const conn = await mongosse.connect(ENV.MONGO_URI);
        console.log('MongoDB connected succsesfully:', conn.connection.host);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}