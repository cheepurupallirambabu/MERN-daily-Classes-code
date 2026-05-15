import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

// NOTE: In a real application, you would import this from a dedicated API service file.
async function loginUser(credentials) {
  // This function now makes a real API call to your backend login endpoint.
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (!response.ok) {
    // If the server responds with an error (like 401 Unauthorized), throw an error.
    throw new Error(data.error || 'Login failed. Please check your credentials.');
  }

  return data; // On success, return the data from the backend (e.g., { token, user }).
}

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleReset = () => {
    setForm({ email: '', password: '' });
    setError('');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    if (!form.email || !form.password) {
      const message = 'Please enter both email and password.';
      setError(message);
      toast.error(message);
      return;
    }
    setLoading(true);
    try {
      const data = await loginUser(form);
      toast.success('Login successful!'); //
      // In a real app, you'd use a context or state management to store the token
      localStorage.setItem('Token', data.token);
      navigate('/');
    } catch (err) {
      const message = err.message || 'Login failed. Please try again.';
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
        <Form onSubmit={handleLogin}>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter Email" required name="email" onChange={handleChange} value={form.email} />
            </Form.Group>
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
