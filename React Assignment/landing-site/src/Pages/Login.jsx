import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'


function Login() {
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
 const navigate = useNavigate();

  const handleReset =()=> {
    setDetails({
      email: "",
      password: "",
    })
  }

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

    setTimeout (()=>{
      navigate('/home')
    },3000)
    

  }
  return (
    <div id='form-container'>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" value={details.email} onChange={handleChange} placeholder="Enter Email" required name="email" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          

          <Form.Group as={Col} controlId="formGridPassword" >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={details.password} onChange={handleChange} placeholder="*****" required name="password" />
          </Form.Group>
        </Row>
<Row className="mb-3">
        <Form.Group className="mb-3">
          <span>If you Don't have an account? <b><a href="/">Register</a></b></span>
        </Form.Group>
        </Row>

                <Button variant="primary" type="submit" style={{margin : "30px"}}>
          Submit
        </Button>
        <Button variant="danger" type="reset" onClick={handleReset}>Cancle</Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Login;
