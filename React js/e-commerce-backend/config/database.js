const mongoose = require('mongoose');
const connection = async ()=> {
    try {
       await mongoose.connect(process.env.MONGODB_URL);
        console.log("database connect successfully!");
    } catch (error) {
        console.log("faild to connect database:",error);
        
    }
}

module.exports = connection;