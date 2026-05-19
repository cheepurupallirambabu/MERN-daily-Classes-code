import { useContext } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { CartContext } from "../App";

function DumiProducts() {
  let products = [
    {id:1,
      imageSrc:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=900&q=80',
      title: 'Smart Phones',
    },
    {id:2,
      imageSrc:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80',
      title: 'Headphones',
    },
    {id:3,
      imageSrc:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80',
      title: 'Shoes',
    },
    {id:4,
      imageSrc:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80',
      title: 'Watches',
    },
  ];

  const { items, addToCart } = useContext(CartContext);

  return (
    <Row xs={1} md={4} className="g-4">
      {products.map((item, idx) => {
      const isPresent= items.some((product)=>product.id==item.id);
      
        return (
          <Col key={idx} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src={item.imageSrc}
                style={{ height: "290px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-center">{item.title}</Card.Title>
                <Card.Text className="text-muted text-center flex-grow-1">
                  High-quality {item.title.toLowerCase()} perfect for your everyday needs.
                </Card.Text>
                <div className="d-flex justify-content-between mt-3 gap-2">
                  <button
                    className="btn btn-warning flex-grow-1"
                    onClick={() => addToCart(item)}
                    disabled={isPresent?true:false}
                  >
                    {isPresent ? "Added" : "Add To Cart"}
                  </button>
                  <button className="btn btn-success flex-grow-1">Buy Now</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default DumiProducts;
