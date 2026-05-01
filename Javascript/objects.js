let obj = {
    name: "roy",
    rollNumber : 'nr0538',
    skills : ["html","css","js","react"],
    address: {
        city: "vizag",
        state: "AP",
        country: "India",
        pincodee: 530014
    }
}

console.log(obj);

const obj1 = new Object({
    username : 'roy',
    password : 'roy@123'
})
console.log(obj1);

console.log(obj1.password);

console.log(obj.skills[0]);
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));
Object.seal(obj);
Object.freeze(obj);
obj.name ="teja";
obj.course="cse"
delete obj.address;
console.log(obj);



