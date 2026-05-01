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
()

//arrow function

let fun=(skils,name)=> {
    console.log("Arrow function ");
    console.log("name:",name,"skils:",skils);
    
}

fun(["javaScript","java","node.js","react.js"],'ramababu');

//nested function

// function outrfun() {
//     function innerFun(){
//         console.log("inner function");
        
//     }
//     console.log("outer function");
//     innerFun();
    
// }
// outrfun();

function outerfun(a,b) {
     console.log("outer function");

     return function innerFun(){
        return a++;
        
        }
   
    }
let r2=outerfun(10,29);
console.log(r2());
console.log(r2());



//higher order function

function homePage (){
    console.log("home page");
    
}
function loginPage (){
    console.log("login page");
    
}
function registerPage (){
    console.log("register page");
    
}

homePage(registerPage(),loginPage());

function display(fun1,fun2) {
    fun1();
    fun2();
    
} 

display(() => {
    console.log("first call back");
    
}, () => {
    console.log("second call back");
    
});

//generator function

function* generator() {
    yield 10;
    yield 20;
    yield 30;
   console.log("this is generator function");    
}
let g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);



