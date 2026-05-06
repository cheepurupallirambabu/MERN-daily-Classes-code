import { useState } from 'react';

const DisplayMyDetails = (props)=> {
 return (
    <>
    <h1>My Deatails</h1>
    <ul>
        <li>Name :{props.mydata.Name}</li>
        <li>Roll No :{props.mydata.RollNo}</li>
        <li>Branch :{props.mydata.Branch}</li>
        <li>Role :{props.mydata.Role}</li>
        <li>Collage Name :{props.mydata.CollageName}</li>
        
    </ul>
    </>
 )

}
export default DisplayMyDetails;