import react from "react";
import { Component } from "react";

class Register extends Component{
    render() {
    return (
        <div>
            <form action="">
                <fieldset>
                    <h1>RegisterForm</h1>
                <label htmlFor="name">Name :</label>
                <input type="text" placeholder="Enter Nmae"/><br /><br />

                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter Email"/><br /><br />

                <label htmlFor="phone">Phone :</label>
                <input type="phone" placeholder="Enter Phone"/><br /><br /><br />

                <button type="submit">Submit</button><br /><br />
                <button type="reset">cancle</button>
                </fieldset>
            </form>
        </div>
    )
}
}

export default Register;