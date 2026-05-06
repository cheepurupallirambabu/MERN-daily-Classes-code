import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Home() {
  const products = [
    {
      imageSrc:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
      title: 'Smart Phones',
      text: 'Latest devices with sleek design and reliable performance.',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
      title: 'Headphones',
      text: 'Premium sound and comfort for daily work and entertainment.',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      title: 'Shoes',
      text: 'Trending styles for casual wear, travel, and training.',
    },
    {
      imageSrc:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      title: 'Watches',
      text: 'Modern accessories that pair clean looks with utility.',
    },
  ];

  return (

    <div>
        <h1 style={{textAlign :"center", margin: "10px", padding: "10px 0px"}}>Welcome To Home</h1>
    <Container className="py-3">
      <Row xs={1} md={2} lg={4} className="g-4">
        {products.map((product) => (
          <Col key={product.title}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.imageSrc}
                alt={product.title}
                style={{ height: '220px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.text}</Card.Text>
                  <button className='btn btn-warning m-3'>Add Tocart</button>
                  <button className='btn btn-info'>Buy</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    
    </Container>
    </div>
  );
}

export default Home;