import React from "react";
import Header from "../components/Header"; // adjust the path if needed
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaWallet, FaChartLine, FaUserTie, FaHeart } from "react-icons/fa";

const Aboutus = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      {/* Navbar/Header */}
      <Header />

      {/* Hero Section */}
      <section className="text-center py-5 bg-success text-white">
        <Container>
          <h1 className="display-5 fw-bold mb-3">About Money Manager</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Money Manager is a personal finance tracking web application built to
            help users manage income, expenses, and savings in a smart and
            organized way. Track your finances, visualize spending, and achieve
            your goals effortlessly.
          </p>
        </Container>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-5 bg-white">
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <FaWallet size={50} className="text-success mb-3" />
                  <Card.Title className="fw-bold fs-4">My Mission</Card.Title>
                  <Card.Text className="text-muted">
                    My goal is to simplify financial management for everyone.
                    I built this application to help users understand their
                    spending habits, plan budgets, and make informed financial
                    decisions with ease.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 shadow-sm border-0">
                <Card.Body className="text-center">
                  <FaChartLine size={50} className="text-success mb-3" />
                  <Card.Title className="fw-bold fs-4">My Vision</Card.Title>
                  <Card.Text className="text-muted">
                    To create an intelligent and secure finance tracker that
                    encourages users to develop healthy money habits and take
                    charge of their future — with simplicity and transparency.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Developer Section */}
      <section className="py-5 bg-light">
        <Container>
          <div className="text-center mb-5">
            <FaUserTie size={45} className="text-success mb-3" />
            <h2 className="fw-bold">About the Developer</h2>
            <p className="text-muted">
              The entire Money Manager Application is designed and developed by{" "}
              <strong>Nischal Agarwal</strong> — a passionate Full Stack Developer
              who loves building impactful and user-focused web applications.
            </p>
          </div>

          <Row className="justify-content-center">
            <Col md={4} sm={8}>
              <Card className="text-center border-0 shadow-sm">
                <Card.Body>
                  <div
                    className="rounded-circle bg-success bg-opacity-25 d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: "90px", height: "90px" }}
                  >
                    <h3 className="fw-bold text-success mb-0">N</h3>
                  </div>
                  <Card.Title>Nischal Agarwal</Card.Title>
                  <Card.Text className="text-muted">
                    Full Stack Developer | Java | React | Spring Boot | MySQL
                  </Card.Text>
                  <p className="text-secondary small">
                    I built this project to make finance management simple, smart,
                    and accessible for everyone. Every feature reflects clean
                    design, performance, and usability.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer className="mt-auto bg-success text-white py-3 text-center">
        <p className="mb-0">
          <FaHeart className="text-danger me-2" />
          Developed with ❤️ by Nischal Agarwal © {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
};

export default Aboutus;
