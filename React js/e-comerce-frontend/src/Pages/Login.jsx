import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import emailjs from '@emailjs/browser';

function Login() {
  const [form, setForm] = useState({ email: '', password: '',otp:'' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [mailOtp, setMailOtp] = useState(null);


  const handleReset = () => {
    setForm({ email: '', password: '' ,otp :''});
    setError('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleGenerateOtp = async () => {
    if (!form.email) {
      toast.error('Please enter an email address first.');
      return;
    }
    setIsSendingOtp(true);
    try {
      // NOTE: In a production application, OTP generation and validation should ALWAYS be handled
      // on a secure backend server to prevent client-side manipulation.
      const generatedOtp = Math.floor(100000 + Math.random() * 900000);
      const expiryTime = new Date(new Date().getTime() + 15 * 60000);
      setMailOtp(generatedOtp);

      // IMPORTANT: For security, store your EmailJS credentials in a .env file
      // and access them via `import.meta.env.VITE_...`
      const serviceId = "service_tjk0ufd";
      const templateId = "template_2pm0nhg";

      await emailjs.send(serviceId, templateId, {
        email: form.email,
        otp: generatedOtp,
        time: expiryTime.toLocaleTimeString(),
      });

      toast.success("OTP sent to your mail successfully!");
    }
    catch (err) {
      console.error('Failed to send OTP:', err);
      toast.error("Failed to generate OTP.");
    } finally {
      setIsSendingOtp(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password || !form.otp) {
      const message = 'Please fill all fields, including OTP.';
      setError(message);
      toast.error(message);
      return;
    }
    // NOTE: This is client-side OTP validation for demonstration only.
    // In a real application, the OTP must be sent to and verified by your backend server.
    if (mailOtp === null || parseInt(form.otp, 10) !== mailOtp) {
      setError('The entered OTP is incorrect. Please generate a new one and try again.');
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/user/login", form);
      toast.success('Login successful!');

      // In a real app, you'd use a context or state management to store the token.
      // Assuming the token is in response.data.token
      if (response.data && response.data.token) {
        localStorage.setItem('Token', response.data.token);
      }
      console.log(response);
      navigate('/');
    } catch (err) {
      const message = err.response?.data?.error || err.message || 'Login failed. Please try again.';
      setError(message);
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "80vh" }}>
      <Card className="p-4 shadow-sm border-0" style={{ width: "100%", maxWidth: "500px", borderRadius: "12px" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>
        {error && <p className="text-danger text-center small mb-3">{error}</p>}
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" required name="email" onChange={handleChange} value={form.email} />
            </Form.Group>
          </Row>
          <Row className="mb-3 align-items-end">
            <Col xs={8}>
              <Form.Group controlId="formGridOtp">
                <Form.Label>OTP</Form.Label>
                <Form.Control type="number" placeholder="Enter OTP" required name="otp" onChange={handleChange} value={form.otp} />
              </Form.Group>
            </Col>
            <Col xs={4}><Button variant="secondary" onClick={handleGenerateOtp} disabled={isSendingOtp}>{isSendingOtp ? 'Sending...' : 'Get OTP'}</Button></Col>
          </Row>
          <Row>
            <Col className="text-end p-2">
              <Link to="/forget-password">Forgot Password?</Link>
            </Col>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Enter password" required name="password" onChange={handleChange} value={form.password} />
            </Form.Group>
          </Row>

          <Form.Group className="mb-4 text-center">
            <span className="text-muted">Don't have an account? <b><a href="/register" className="text-decoration-none">Register</a></b></span>
          </Form.Group>

          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </Button>
            <Button variant="light" type="reset" onClick={handleReset}>Reset</Button>
          </div>
        </Form>
      </Card>
    </Container>
  );
}

export default Login;
