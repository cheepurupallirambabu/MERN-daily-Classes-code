let userDetails = function (name,password){

   return name+ " " +password;
   return "hello"
    
}
let result = userDetails('java','admin@1223');
userDetails('roy','roy@1223');
console.log(result);

//Normal function

function EmployeeDetails(name,role,salary,address) {
    console.log("this is the normal function"); 
    // console.log("Nmae :",name);
    // console.log("Role :",role);
    // console.log("Salary :",salary);
    // console.log("Address :",address);
    return [name,role,salary,address]

    return function() {
        
    }
}
let r = EmployeeDetails("rambabu","developer",35000,"vizag");
console.log(r);

//immediate invoke function / self calling function

(function() {
    console.log("this is immediate invoke function ");
    
})

