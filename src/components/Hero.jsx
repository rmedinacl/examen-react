import { Container, Row, Col, Button } from "react-bootstrap";
import { useRef } from "react";

export default function Hero() {
  const sectionRef = useRef(null);

  const handleClick = () => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="hero">
      <div
        style={{
          backgroundImage: 'url("./src/assets/fondocerveza.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "700px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Row>
            <Col>
              <h1
                style={{ color: "white", fontSize: "64px", fontWeight: "bold" }}
              >
                Cervezas de USA
              </h1>
              <p style={{ color: "white", fontSize: "24px" }}>
                Lista de las mejores cervecerías de USA 🍺 <br /> Directas desde
                la mejor API
              </p>
              <Button variant="success" size="md" onClick={handleClick}>
                Busca Ahora!
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <div ref={sectionRef}>{/* Content of the section below */}</div>
    </div>
  );
}
