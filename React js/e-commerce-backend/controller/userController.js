const Users = require('../model/userModel');
const bcrypt = require('bcrypt');


//addUser

const register = async (req,res)=> {
try {
    const { name, phone,email,password,address,city,userType,state,zip} = req.body
   const hashedPassword = await bcrypt.hash(password,10)
    const newUser = {
        name:name,
        phone:phone,
        email:email,
        password:hashedPassword,
        address:address,
        city:city,
        userType:userType,
        state:state,
        zip:zip,
    }

   await Users.create(newUser);
   res.status(201).json({message:"Register successfully!"})
} catch (error) {
    res.status(500).json({message:"failed to register!",err:error.message})
}
}


//getUser

const login  = async (req,res)=> {
    try {
        const {email, password} = req.body;
       const foundUser = await Users.findOne({email:email});
       if (!foundUser) {
           return res.status(404).json({message: "User not found"});
       }
       const isPasswordCorrect = await bcrypt.compare(password,foundUser.password);

       if(!isPasswordCorrect){
        return res.status(400).json({message:"Wrong password"});
       }
       res.status(200).json({message:"Found user",foundUser});
       
    } catch (error) {
        res.status(500).json({message:"An error occurred during login."});
    }
}

//get users

const getUserBasedOnID = async (req,res)=>{
    try {
    const foundUser = await Users.findById(req.params.id);
    res.status(200).json({message:"found user",foundUser})
    } catch (error) {
        res.status(500).json({message:"failed to get user"})
    }
}
//update profile

const updateProfile = async (req ,res)=> {
    try {
      const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(200).json({message:"update successfully!",updateUser})
    } catch (error) {
        res.status(500).json({message:"failed to update!",error})
    }
}

//get all users

const getAllUsers = async (req,res)=> {
    try {
    const allUsers = await  Users.find();
    res.status(200).json({message:"finding all users",allUsers})
    } catch (error) {
        res.status(500).json({message:"failed to get users",error})
    }
}

//forget password

const forgetPassword = async (req,res)=> {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and new password are required.' });
    }
    const hashedPassword  = await bcrypt.hash(password,10)
    try {
        const updatedUser = await Users.findOneAndUpdate({ email: email },{password:hashedPassword},{new:true})
        if (!updatedUser) return res.status(404).json({ message: 'User not found.' });
        res.status(200).json({message:"Password updated successfully!", updatedUser})
    } catch (error) {
        res.status(500).json({message:"Failed to update password", error: error.message})
    }
}

module.exports = {register,login,getUserBasedOnID,updateProfile,getAllUsers,forgetPassword};
