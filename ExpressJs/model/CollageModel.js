const mongoose = require('mongoose');

const collegeSchema = new mongoose.Schema({
    name: {type: String,required: true},
    code : {type: String,unique: true,required: true},
    depertments : {type: Array,required: true},
    email : {type: String,required: true,unique: true},
    address : {type: String,required: true},
    url : {type:String,require:true,unique:true}
},{timestamps:true})

const collegeModel = mongoose.model('college',collegeSchema);

module.exports = collegeModel;