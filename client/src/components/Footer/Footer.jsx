import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const styles = {
  footer: {
    position: "fixed",
    left: 0,
    height: "35px",
    bottom: 0,
    width: "100%",
    backgroundColor: "#000",
    color: "#f29c13",
    marginTop: "auto",
  },
  alignRight: { 
    textAlign: "right" 
  },
};

const Footer = () => {
  return (
    <div>
      <footer style={styles.footer}>
        <Container>
          <Row>
            <Col>
              &copy;{new Date().getFullYear()} KGB-C | All Rights Reserved
            </Col>
            <Col style={styles.alignRight}>
            <Link to="/login" id="orange">Instructor Login</Link>
          </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
