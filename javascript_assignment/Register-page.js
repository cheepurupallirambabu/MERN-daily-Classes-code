let f= document.querySelector("form");

        let uname = document.getElementById("username");
        let pass = document.getElementById("password");
        let em = document.getElementById("email")
        let pn = document.getElementById("pnumber");

        f.addEventListener("submit",(e)=>{
            e.preventDefault();
            console.log(uname.value);
            console.log(pass.value);
            console.log(em.value);
            console.log(pn.value)
        

            window.localStorage.setItem("username",uname.value);
            window.localStorage.setItem("password",pass.value);
            window.localStorage.setItem("email",em.value);
            window.localStorage.setItem("pnumber",pn.value);

            su = localStorage.getItem("username");
            sp = localStorage.getItem("password");
            se = localStorage.getItem("email");
            spn = localStorage.getItem("pnumber");
            
            console.log("stored username",su);
            console.log("stored password",sp);
            console.log("stored email",se);
            console.log("stored phone",spn);
            

            window.open("./Login-page.html")
            
            
        });