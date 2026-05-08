import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Login from './Login';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { ToastContainer, toast } from 'react-toastify';


function Register() {
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    adderss: "",
    city: "",
    userType: "user",
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
      userType: "user",
      state: "",
      zip: "",
    })
  }

  const handleReset =()=> {
    setDetails({
      name: "",
      phone: "",
      email: "",
      password: "",
      adderss: "",
      city: "",
      userType: "user",
      state: "",
      zip: "",
    }) 
  }
  return (
    <Container className="d-flex justify-content-center align-items-center py-5">
      <Card className="p-4 shadow-sm border-0" style={{ width: '100%', maxWidth: '800px', borderRadius: "12px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Create an Account</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={6} controlId="formGridName" className="mb-3 mb-md-0">
              <Form.Label>Full Name</Form.Label>
              <Form.Control type="text" value={details.name} onChange={handleChange} placeholder="Enter Name" required name="name" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={6} controlId="formGridPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" value={details.phone} onChange={handleChange} placeholder="+91" required pattern='[6-9]{1}[0-9]{9}' name="phone" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} xs={12} md={4} controlId="formGridEmail" className="mb-3 mb-md-0">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" value={details.email} onChange={handleChange} placeholder="Enter Email" required name="email" />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridUserType" className="mb-3 mb-md-0">
              <Form.Label>User Type</Form.Label>
              
              <Form.Select required name="userType" onChange={handleChange} value={details.userType}>
                <option value="">Choose User Type..</option>
                <option value="user">User</option>
                <option value="admin">Admin</option>
              </Form.Select>

            </Form.Group>


            <Form.Group as={Col} xs={12} md={4} controlId="formGridPassword" >
              <Form.Label>Create Password</Form.Label>
              <Form.Control type="password" value={details.password} onChange={handleChange} placeholder="*****" required name="password" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Main St" value={details.adderss} onChange={handleChange} required name="adderss" />
          </Form.Group>

          <Row className="mb-4">
            <Form.Group as={Col} xs={12} md={5} controlId="formGridCity" className="mb-3 mb-md-0">
              <Form.Label>City</Form.Label>
              <Form.Control required name="city" onChange={handleChange} value={details.city} />
            </Form.Group>

            <Form.Group as={Col} xs={12} md={4} controlId="formGridState" className="mb-3 mb-md-0">
              <Form.Label>State</Form.Label>
              <Form.Select required name='state' onChange={handleChange} value={details.state}>
                <option>Choose...</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Telangana">Telangana</option>
                <option value="goa">goa</option>

              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} xs={12} md={3} controlId="formGridZip" >
              <Form.Label>Zip Code</Form.Label>
              <Form.Control required name="zip" value={details.zip} onChange={handleChange} type="number" placeholder="Zip" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-4 text-center">
            <span className="text-muted">Already have an account? <b><a href="/login" className="text-decoration-none">Login</a></b></span>
          </Form.Group>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Button variant="primary" type="submit" className="px-5 py-2">
              Submit Registration
            </Button>
            <Button variant="light" type="reset" onClick={handleReset} className="px-5 py-2">Clear Form</Button>
          </div>
        </Form>
      </Card>
      <ToastContainer />
    </Container>
  );
}

export default Register;
//npm install react-toastify