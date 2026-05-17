const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({ 
      name: {type: String, required: true},
      phone: {type: Number, required: true,unique: true,length:10},
      email: {type: String, required: true,unique: true},
      password: {type: String, required: true},
      adderss: {type: String, required: true},
      city: {type: String, required: true},
      userType: {type: String, required: true, default: 'user'},
      state: {type: String, required: true},
      zip: {type: Number, required: true},
    },{timestamps:true})

   const userModel = mongoose.model('users',userSchema);

   module.exports = userModel;