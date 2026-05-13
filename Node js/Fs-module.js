const { log } = require('console');
const fs = require('fs');

setTimeout(()=> {
    fs.writeFile('test.txt', 'this is the sample file creating by node js', (err) => {
        if (err) return console.error("Error writing file:", err);
        console.log("file created");
})
},2000)

setTimeout (()=> {
    fs.appendFile('test.txt', '\nThis is appended content.', (err) => {
        if (err) return console.error("Error appending to file:", err);
        console.log("file appended");
})
},3000)

setTimeout(()=> {
    fs.readFile('test.txt','utf-8',(err,data)=> {
        if(err) {
            return console.error("Error reading file:", err);
        }
      console.log("File content:", data);
    })
},5000)

setTimeout(() => {
    fs.unlink('test.txt',(err)=> {
        if (err) return console.error("Error deleting file:", err);
        console.log("file deleted");
    })
}, 7000);
