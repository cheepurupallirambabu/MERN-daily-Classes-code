const Users = require('../model/userModel');
const bcrypt = require('bcrypt');


//addUser

const register = async (req,res)=> {
try {
    const { name, phone,email,password,adderss,city,userType,state,zip} = req.body
   const hashedPassword = await bcrypt.hash(password,10)
    const newUser = {
        name:name,
        phone:phone,
        email:email,
        password:hashedPassword,
        adderss:adderss,
        city:city,
        userType:userType,
        state:state,
        zip:zip,
    }

   await Users.insertOne(newUser);
   res.status(200).json({meassage:"Register successfully!"})
} catch (error) {
    res.status(500).json({message:"faild to register!",err:error})
}
}


//getUser

const login  = async (req,res)=> {
    try {
        const {email, password} = req.body;
       const foundUser = await Users.findOne({email:email})
       const hashedPassword = await bcrypt.compare(password,foundUser.password)

       if(!hashedPassword){
        res.status(400).json({message:"wrong password"})
       }
       res.status(200).json({message:"found user",foundUser})
       
    } catch (error) {
        res.status(500).json({message:"user notfound"})
    }
}

//get users

const getUserBasedOnID = async (req,res)=>{
    try {
    const foundUser = await Users.findById(req.params.id);
    res.status(200).json({message:"found user",foundUser})
    } catch (error) {
        res.status(500).json({message:"faild to get user"})
    }
}
//update profile

const updateProfile = async (req ,res)=> {
    try {
      const updateUser = await Users.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.status(200).json({message:"update successfully!",updateUser})
    } catch (error) {
        res.status(500).json({message:"faild to update!",error})
    }
}

//get all users

const getAllUsers = async (req,res)=> {
    try {
    const allUsers = await  Users.find();
    res.status(200).json({message:"finding all users",allUsers})
    } catch (error) {
        res.status(500).json({message:"faild to get users",error})
    }
}

//forget password

const forgetPassword = async (req,res)=> {
    const hashedPassword  =await bcrypt.hash(req.body.password,10)
    try {
        const updateedUser = await Users.findByIdAndUpdate(req.params.id,{password:hashedPassword},{new:true})
        res.status(200).json({message:"update successfully!",updateedUser})
    } catch (error) {
        res.status(500).json({message:"faild to forget",error})
    }
}

module.exports = {register,login,getUserBasedOnID,updateProfile,getAllUsers,forgetPassword};

