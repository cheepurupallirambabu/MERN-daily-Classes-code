const express = require('express');
const app = express();
const port = 5000;
const connection = require('./config/db');
app.use(express.json());

connection();

const studentRouter = require('./routes/studentRouter');

app.use("/student", studentRouter);


app.listen(port, () => {
    console.log("server running on port:", port);
})
