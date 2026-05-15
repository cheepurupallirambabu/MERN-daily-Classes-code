const mongoose = require('mongoose');

const connection = async()=> {
  try {
     await mongoose.connect("mongodb://localhost:27017/bits")
    console.log("Db connected successfully");
  }
  catch(err){
    console.log("faild to connect DB");
    
  }
    
}

module.exports = connection;

