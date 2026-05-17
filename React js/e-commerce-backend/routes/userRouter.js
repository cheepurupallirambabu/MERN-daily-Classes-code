const express = require('express');
const { register,login,getUserBasedOnID,updateProfile,getAllUsers,forgetPassword} = require('../controller/userController');
const router=express.Router();

router.post('/register',register)
router.post('/login',login);
router.get('/get-user/:id',getUserBasedOnID)
router.patch('/update-profile/:id',updateProfile)
router.get('/get-all-users',getAllUsers)
router.patch('/paddword/:id',forgetPassword)
module.exports = router;