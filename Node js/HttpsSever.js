const http = require('http')
const port =5000;

const userDetails = {
    name:'Admin',
    email: 'admin@gmail.com',
    password: 'admin@123'
}

const server = http.createServer((req,res)=> {
    res.end(JSON.stringify(userDetails));
})

const ptions = {
    path:"/getUsers"
}

const req = http.request('http://localhost:5000/getusers',(res)=>{
    console.log("user responce");
    
    res.on("end",()=>{
        console.log("get Users");
        

    })
    
})
 req.end();

server.listen(port,()=> {
    console.log("server running on port:",port);
    
})