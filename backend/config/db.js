const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://alexis:Patate02@app-js-full-stack.hbk16qt.mongodb.net/app-js-fullstack"


const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        mongoose.connect(mongoURI) 
        console.log('Mongo connected')
    }
    catch(err){
        console.log(err);
        process.exit();
    }
};

module.exports = connectDB;