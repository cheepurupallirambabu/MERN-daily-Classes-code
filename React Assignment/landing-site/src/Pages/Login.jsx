import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { ToastContainer, toast } from 'react-toastify'


function Login() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    toast.success("Login successfull!")
    setDetails({
      email: "",
      password: "",
    })

  }
  return (
    <div id='form-container'>
      <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={details.email} onChange={handleChange} placeholder="Enter Email" required name="email" />
          </Form.Group>
        
        <Row className="mb-3">
          

          <Form.Group as={Col} controlId="formGridPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={details.password} onChange={handleChange} placeholder="*****" required name="password" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <span>If you Don't have an account? <b><a href="/">Register</a></b></span>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Login;
