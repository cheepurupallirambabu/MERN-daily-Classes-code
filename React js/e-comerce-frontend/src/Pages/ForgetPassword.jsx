import React, { useState } from 'react';
import { Container, Card, Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setMessage('');

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    if (password.length < 8 || !hasUpperCase || !hasLowerCase) {
      setError('Password must be at least 8 characters long and contain at least one uppercase and one lowercase letter.');
      toast.error('Password must be at least 8 characters long and contain at least one uppercase and one lowercase letter.');
      return;
    }

    setLoading(true);
    try {
      // This endpoint is a placeholder. You need to implement it on your backend.
      await axios.patch('http://localhost:5000/user/forgot-password', { email, password });
      setMessage('Password has been reset successfully! You can now log in.');
      toast.success('Password reset successfully!');
      setEmail('');
      setPassword('');
    } catch (err) {
      const errorMessage = err.response?.data?.error || 'An error occurred. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
      <Card className="p-4 shadow-sm border-0" style={{ width: '100%', maxWidth: '500px', borderRadius: '12px' }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Reset Password</h2>
        {message && <Alert variant="success">{message}</Alert>}
        {error && <Alert variant="danger">{error}</Alert>}
        <p className="text-center text-muted mb-4">Enter your email and a new password to reset it.</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formGridEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
           <Form.Group className="mb-3" controlId="formGridPassword">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" placeholder="Enter new password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>
          <div className="d-grid gap-2 mt-4">
            <Button variant="primary" type="submit" disabled={loading}>
              {loading ? 'Resetting...' : 'Reset Password'}
            </Button>
          </div>
        </Form>
        <div className="text-center mt-3">
          <Link to="/login">Back to Login</Link>
        </div>
      </Card>
    </Container>
  );
}

export default ForgetPassword