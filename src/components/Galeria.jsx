import { Container, Row, Col, Image } from "react-bootstrap";

import PropTypes from "prop-types";

const Galeria = ({ fotos }) => {
  return (
    <Container>
      <Row>
        {fotos.map((foto, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Image
              src={foto.url}
              alt={foto.alt}
              fluid
              thumbnail
              className="image"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

Galeria.propTypes = {
  fotos: PropTypes.array.isRequired,
};

export default Galeria;
