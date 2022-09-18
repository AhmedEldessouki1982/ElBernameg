import mongoose from 'mongoose';

export default function Connect (url) {
    try {
        mongoose.connect(url);
        console.log("server successfully connected to mongo db ....");
    } catch (error) {
        console.log(error);
    }
}