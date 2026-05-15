const students = require('../model/StudentModel')

//add student 

const addStudent = async (req,res) => {
  try {
     const {name,rollNo ,branch ,phone,email ,address} = req.body
    const newStudent = {
        name:name,
        rollNo:rollNo,
        branch:branch,
        phone:phone,
        email:email,
        address:address
    }
    
    await students.create(newStudent);
    res.status(200).json({message:"student added successfully"})
  } 
  catch (error) {
    res.status(500).json({message:error.message})
    console.log(error);
    
  }
}





//get all students
//get student based on iD
//update student
//delete student

module.exports = {addStudent};
