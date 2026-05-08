import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

function FooterComponents() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto w-100">
      <Container className="text-center">
        <h5>Alpha Mart</h5>
        <p className="text-secondary mb-1">
          Your one-stop destination for everything you need.
        </p>
        <small className="text-muted">&copy; {new Date().getFullYear()} Alpha Mart. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default FooterComponents;