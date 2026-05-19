import { useContext, useState, useEffect } from "react";
import { CartContext } from "../App";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

const Cart = (props) => {
  const { items,removeItemscart } = useContext(CartContext);

  const [inputText, setInputText] = useState("");
  const [filterProducts, setFilterProducts] = useState(items)

  useEffect(() => {
    const filteredItems = items.filter((product) =>
      product.title.toLowerCase().includes(inputText.toLowerCase().trim())
    );
    setFilterProducts(filteredItems);
  }, [items, inputText]);

  const handleFilter = (e) => {
    setInputText(e.target.value);
  }




  return (
    <>

      <div id="search-bar">
        <input type="text" onChange={handleFilter} placeholder="Search Products" />
      </div>
      <Container className="py-4" style={{ minHeight: "80vh" }}>
        <h2 className="mb-4 text-center text-primary">Shopping Cart</h2>
        {items.length <= 0 ? (
          <div className="text-center m-5 p-5 border rounded bg-light text-muted shadow-sm">
            <h4>Your Cart is Empty</h4>
          </div>
        ) : (
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {filterProducts.map((product) => (
              <Col key={product.id}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Img variant="top" src={product.imageSrc} alt={product.title} style={{ height: '200px', objectFit: 'cover' }} />
                  <Card.Body className="d-flex flex-column text-center">
                    <Card.Title>{product.title}</Card.Title>
                    <Button variant="outline-danger" className="mt-auto w-100" onClick={() => removeItemscart(product)}>Remove</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>
    </>
  );
};

export default Cart;