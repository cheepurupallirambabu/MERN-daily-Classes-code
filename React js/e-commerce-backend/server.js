const express = require('express');
const app = express();
const env =require('dotenv')
env.config();
const UserRouter = require('./routes/userRouter')
const connection = require('./config/database');
connection();
app.use(express.json());
app.use("/user",UserRouter)

const PORT=process.env.PORT;

app.listen(PORT,()=> {
    console.log("server running on :",PORT);  
})
