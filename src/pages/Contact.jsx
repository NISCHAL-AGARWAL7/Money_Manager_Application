import React from "react";
import Header from "../components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar/Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-5 bg-success text-white">
        <Container>
          <h1 className="display-5 fw-bold mb-3">Contact Us</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Have a question, feedback, or suggestion?  
            We're here to help — feel free to reach out anytime!
          </p>
        </Container>
      </section>

      {/* Contact Info Section */}
      <section className="py-5 bg-white flex-grow-1">
        <Container>
          <Row className="g-4 justify-content-center">
            <Col md={4}>
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <FaEnvelope size={50} className="text-success mb-3" />
                  <Card.Title className="fw-bold fs-4">Email Us</Card.Title>
                  <Card.Text className="text-muted">
                    Click below to send us an email directly.
                  </Card.Text>
                  <Button
                    variant="success"
                    href="mailto:nischalagarwal674@gmail.com"
                  >
                    Send Email
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <FaPhoneAlt size={50} className="text-success mb-3" />
                  <Card.Title className="fw-bold fs-4">Call Us</Card.Title>
                  <Card.Text className="text-muted">
                    +91 8272811866  
                    <br />
                    We're available Mon–Sat, 10AM–6PM.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 text-center shadow-sm border-0">
                <Card.Body>
                  <FaMapMarkerAlt size={50} className="text-success mb-3" />
                  <Card.Title className="fw-bold fs-4">Visit Us</Card.Title>
                  <Card.Text className="text-muted">
                    Shri Ram Murti Smarak College of Engineering & Technology,  
                    Bareilly, Uttar Pradesh, India
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="bg-success text-white text-center py-3 mt-auto">
        <p className="mb-0">
          © {new Date().getFullYear()} Money Manager | Built with 💚 by Nischal Agarwal
        </p>
      </footer>
    </div>
  );
};

export default Contact;
