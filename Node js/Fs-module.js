const { log } = require('console');
const fs = require('fs');

setTimeout(()=> {
    fs.writeFile('test.txt','this is the sample file createing by node js',(data,err)=> {
        console.log("file created")   
})
},2000)

setTimeout (()=> {
    fs.appendFile('test.txt','this is the sample file createing by node js',(data,err)=> {
        console.log("file appended")   
})
},3000)



setTimeout(()=> {
fs.readFile('test.txt','utf-8',(err,data)=> {
    if(err) {
        console.error(err);
        
    }
  console.log(data);
})
},5000)


fs.unlink('test.txt',(err)=> {
    if(err) {
        console.error(err);
        
    }
    else {
        console.log("file deleted");
        
    }
}
)


