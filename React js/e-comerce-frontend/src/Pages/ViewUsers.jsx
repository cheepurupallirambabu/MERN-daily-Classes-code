import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Spinner, Alert } from 'react-bootstrap';
import { toast } from 'react-toastify';

const ViewUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const token = localStorage.getItem('Token');
            const response = await fetch('http://localhost:5000/user/get-all-users', {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to fetch users. You may not have permission.');
            }

            const data = await response.json();
            setUsers(data);
        } catch (err) {
            setError(err.message || 'An unexpected error occurred.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleDelete = async (userId) => {
        if (!window.confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            return;
        }

        try {
            const token = localStorage.getItem('Token');
            const response = await fetch(`http://localhost:5000/user/delete-user/${userId}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({ message: 'Failed to delete user.' }));
                throw new Error(errorData.message);
            }

            setUsers(users.filter(user => user._id !== userId));
            toast.success('User deleted successfully!');
        } catch (err) {
            toast.error(err.message || 'An error occurred while deleting the user.');
            console.error(err);
        }
    };

    if (loading) {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>
        );
    }

    if (error) {
        return (
            <Container className="mt-4">
                <Alert variant="danger">
                    <Alert.Heading>An Error Occurred</Alert.Heading>
                    <p>{error}</p>
                    <Button onClick={fetchUsers} variant="outline-danger">Try Again</Button>
                </Alert>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <h3 className="mb-4">Manage Users</h3>
            {users.length > 0 ? (
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={user._id || user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone || 'N/A'}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleDelete(user._id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            ) : (
                <Alert variant="info">No users found.</Alert>
            )}
        </Container>
    );
}

export default ViewUsers;