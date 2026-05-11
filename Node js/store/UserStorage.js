let userDetails =[];

const displayUser = ()=> {
    return userDetails
    
}

const postUsers= (user)=> {
    userDetails.push(user)
}

const removeUsers= (name)=> {
    const newUsers = userDetails.filter((user)=> 
     user.name!=name)
     userDetails = newUsers;
}

const displayEmail = (email)=> {
    const userEmail = userDetails.filter((user)=> 
     user.email==email)
     return userEmail;
}

const updateName = (email, newName) => {
    const user = userDetails.filter((user) => user.email == email);
    
    if (user) {
        user[0].name = newName;
    }
    else {
        console.log("email not found");
        
    }
    return user;
}


module.exports= {
    displayUser,
    postUsers,
    removeUsers,
    displayEmail,
    updateName,
}