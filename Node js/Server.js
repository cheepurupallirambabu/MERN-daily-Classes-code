const {displey,test,name} = require('./model')
const {displayUser,postUsers,removeUsers,displayEmail, updateName} = require('./store/UserStorage')

displey()

const user =test();
console.log(user);
console.log(name);

console.log("before: ",displayUser());

postUsers({name:"sai",email: "sai@1"});
postUsers({name:"admin2",email: "admin@2"});

console.log("After: ",displayUser());

removeUsers("sai")

console.log(displayUser());
console.log(displayEmail("admin@2"));

console.log("updateing Name of the user based on the email.....");



console.log(updateName("admin@2","roy"));
















