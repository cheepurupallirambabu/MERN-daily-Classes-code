const express = require('express');
const app = express();
const port = 5000;
const connection = require('./config/db');
app.use(express.json());

connection();

const studentRouter = require('./routes/studentRouter');
const collegeRouter = require('./routes/collageRouter');

app.use("/student", studentRouter);
app.use("/college", collegeRouter);

app.listen(port, () => {
    console.log("server running on port:", port);
})
