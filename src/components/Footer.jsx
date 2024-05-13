import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../App.css";

export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-white px-5">
        <Container className="">
          <Row>
            <Col md={6}>
              <h5>Cervezas de USA</h5>
              <p>Encuentra las mejores cervezas desde API</p>
            </Col>
            <Col md={6}>
              <h5>Contactanos</h5>
              <p>Email: rmedina@mountain-creative.com</p>
              <p>Phone: +56936288238</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}
