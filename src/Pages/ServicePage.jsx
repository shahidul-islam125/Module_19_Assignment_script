import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Loader from "../Components/Loader";
import PageTitle from "../Components/PageTitle";

const ServicePage = () => {
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch("database/service.json")
      .then((res) => res.json())
      .then((data) => setService(data))
      .catch((error) => console.error("Error fetching work list:", error));
  }, []);

  if (service === null) {
    return <Loader />;
  }

  return (
    <>
      <PageTitle title="Services" />
      <div className="service-section-container">
        <Container>
          <h1>Our All Services</h1>
          <h2>We Provide BestWeb design services</h2>
          <br />
          <br />
          <Row>
            {service.map((item, index) => {
              return (
                <Col key={index} md={6} className="mb-6">
                  <div className="service-card">
                    <img src={item.img} alt="" className="img-fluid" />
                    <br />
                    <br />
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                    <br />
                    <br />
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default ServicePage;
