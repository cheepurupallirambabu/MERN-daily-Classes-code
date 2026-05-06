import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Login from './Login';

import { ToastContainer, toast } from 'react-toastify';


function Register() {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    adderss: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    toast.success("Register successfully!")
    setDetails({
      name: "",
      phone: "",
      email: "",
      password: "",
      adderss: "",
      city: "",
      state: "",
      zip: "",
    })

  }
  return (
    <div id='form-container'>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={details.name} onChange={handleChange} placeholder="Enter Name" required name="name" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" value={details.phone} onChange={handleChange} placeholder="+91" required pattern='[6-9]{1}[0-9]{9}' name="phone" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={details.email} onChange={handleChange} placeholder="Enter Email" required name="email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={details.password} onChange={handleChange} placeholder="*****" required name="password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Main St" value={details.adderss} onChange={handleChange} required name="adderss" />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control required name="city" onChange={handleChange} value={details.city} />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select required name='state' onChange={handleChange} value={details.state}>
              <option>Choose...</option>
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Telangana">Telangana</option>
              <option value="goa">goa</option>

            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip" >
            <Form.Label>Zip</Form.Label>
            <Form.Control required name="zip" value={details.zip} onChange={handleChange} type="number" placeholder="Zip" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <span>If you already have an account? <b><a href="/login">Login</a></b></span>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Register;
//npm install react-toastify