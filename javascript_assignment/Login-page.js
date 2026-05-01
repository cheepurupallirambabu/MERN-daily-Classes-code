 let f= document.querySelector("form");

        let uname = document.getElementById("username");
        let pass = document.getElementById("password");

        f.addEventListener("submit",(e)=>{
            e.preventDefault();
            console.log(uname.value);
            console.log(pass.value);

           let sun = localStorage.getItem("username");
           let spw = localStorage.getItem("password");

            console.log(sun)
            console.log(spw)


            if (uname.value == sun && pass.value == spw){
               
               alert ("login successfull..")
               window.open("./home-page.html") 
            }
            else {
                alert("UserName or Password is In correct!")
            }
            
            
        })