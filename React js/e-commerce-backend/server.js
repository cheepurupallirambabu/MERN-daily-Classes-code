const express = require('express');
const app = express();
const env =require('dotenv')
const cors = require('cors');


const UserRouter = require('./routes/userRouter')
const connection = require('./config/database');
const prompt = require('./routes/promptRouter')
env.config();
connection();
app.use(cors());
app.use(express.json());
app.use("/user",UserRouter)
app.use("/ai",prompt)
const PORT=process.env.PORT;

app.listen(PORT,()=> {
    console.log("server running on :",PORT);  
})
