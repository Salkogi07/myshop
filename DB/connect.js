const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://kogisal:Human3350@kimdongwoo.3dq5t.mongodb.net/?retryWrites=true&w=majority&appName=kimdongwoob');
    } catch (error){
        throw new Error("Connection Failed");
    }
};
module.exports = connectDB;