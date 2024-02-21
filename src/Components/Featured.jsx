import { useEffect, useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import "../assets/css/Featured.css";

const Featured = () => {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch("database/featured.json")
      .then((res) => res.json())
      .then((data) => setFeatured(data))
      .catch((error) => console.error("Error fetching work list:", error));
  }, []);

  return (
    <div className="container">
      <div className="featured-heading">
        <h1 className="text-center">Featured Project</h1>
        <h2 className="text-center">
          We provide the Perfect Solution to your business growth
        </h2>
        <br />
        <br />
      </div>
      <Row>
        <Col md={6}>
          <Image
            src="https://i.ibb.co/nb6s2ty/project-1.png"
            className="img-fluid"
            alt="Full width image"
          />
          <br />
          <br />
          <p>App Design - June 20, 2022</p>
          <h3>App Redesign</h3>
        </Col>
        <Col md={6}>
          <Row className="g-4">
            {featured.map((item, index) => (
              <Col md={6} key={index}>
                <Card>
                  <Image
                    src={item.image}
                    className="img-fluid"
                    alt="Card image"
                  />
                  <Card.Body>
                    <p>{item.date}</p>
                    <Card.Title>{item.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Featured;
