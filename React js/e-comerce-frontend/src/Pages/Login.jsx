import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [loginDetails, setloginDetails] = useState({
    email: "",
    password: "",
    otp: "",
  });

  const navigate = useNavigate();

  const [mailOtp, setMailOtp] = useState(0);

  const generateOtp = async () => {
    try {
      let generatedOtp = Math.floor(Math.random() * 1000000);

      let time = new Date();
      let expairedTime = `${time.getHours()}:${time.getMinutes() + 15}:00`
      setMailOtp(generatedOtp);



      await emailjs.send("service_tjk0ufd", "template_2pm0nhg", {
        email: loginDetails.email,
        otp: generatedOtp,
        time: expairedTime,
      }, { publicKey: "JqggipCSvaJ1yaZHX" })

      toast.success("Otp send to Your mail successfully!")


    }
    catch (err) {
      toast.error("Faild to generate otp")

    }

  }


  const handleReset = () => {
    setloginDetails({
      email: "",
      password: "",
      otp: '',
    })
  }

  const handleChange = (e) => {
    setloginDetails({ ...loginDetails, [e.target.name]: e.target.value })
  }

  const handlelogin = (e) => {
    try {
      e.preventDefault();
      if (mailOtp == loginDetails.otp && loginDetails.password != "") {
        toast.success("Login successfully!")
        navigate('/')

      }
      else if (mailOtp != loginDetails.otp) {
        toast.error("Invalid Otp!")

      }
    } catch (err) {
      console.log(err);
    }
  }


  return (
    <div id='form-container'>
      <Form onSubmit={handlelogin}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter Email" required name="email" onChange={handleChange} value={loginDetails.email} />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter password" required name="password" onChange={handleChange} value={loginDetails.password} />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Col><Button type='button' onClick={generateOtp}>Generate Otp</Button></Col>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Control type="number" placeholder="Enter otp" required name="otp" onChange={handleChange} value={loginDetails.otp} className='otp-in' />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <span>If you don't have an account? <b><a href="/register">Register</a></b></span>
        </Form.Group>

        <Button variant="primary" type="submit" style={{ margin: "10px 30px" }}>
          Submit
        </Button>
        <Button variant="danger" type="reset" onClick={handleReset}>Reset</Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default Login;
//npm install react-toastify


