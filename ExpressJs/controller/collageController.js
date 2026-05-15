const colleges = require('../model/CollageModel')

//add college

const addCollege = async (req,res) => {
  try {
     const {name,code ,depertments,email ,address,url} = req.body
    const newCollege = {
        name:name,
        code:code,
        depertments:depertments,
        email:email,
        address:address,
        url:url
    }
    
    await colleges.create(newCollege);
    res.status(200).json({message:"college added successfully"})
  } 

  catch (error) {
    res.status(500).json({message:error.message})
    console.log(error);
    
  }
}


const getAllcolleges = async (req,res)=>{
  try {
   const  foundColleges = await colleges.find()
   if(!foundColleges){
    res.status(400).json({message:"colleges not found"})
   }
   res.status(200).json({foundColleges})
  } catch (error) {
    res.status(500).json({message:"faild to retrive data"})
  }
}


//delete collage
 const deleteCollege = async (req,res)=>{
  try {
   const delectedDocument = await colleges.findByIdAndDelete({_id:req.params.id});
   console.log(delectedDocument);
   
    res.status(200).json({message:"college deleted successfully"})

  } catch (error) {
    res.status(500).json({message:error.message})
  }
 }


 const getCollageById = async (req,res)=>{
  try {
    const foundCollege = await colleges.findById({_id:req.params.id})

    res.status(200).json({message:"college found",foundCollege})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
 }

 const updateCollegeDetails = async (req,res)=>{
  try {
    const updateData = req.body;
    const updatedCollege =await colleges.findByIdAndUpdate(req.params.id,updateData,{new:true})
    res.status(200).json({message:"college updated successfully"})

  } catch (error) {
    res.status(500).json({message:error.message})
  }
 }


 const updateCollegeEmail = async (req,res)=>{
  try {
   const updateedEmail = await colleges.findByIdAndUpdate(req.params.id,{email:req.body.email},{new:true})
   res.status(200).json({message:"email updated successfully"})
  } catch (error) {
    res.status(500).json({message:error.message})
  }
 }

module.exports = {addCollege,getAllcolleges,deleteCollege,getCollageById,updateCollegeDetails,updateCollegeEmail};