const mongoose =require('mongoose')

const promptSchema = new mongoose.Schema({
    question : {type: String, required: true},
   promptData: {type: String, required: true},
},{timestamps:true})

const promptModel = mongoose.model('prompt_data',promptSchema);

module.exports = promptModel;