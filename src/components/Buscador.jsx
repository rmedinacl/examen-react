import { useState } from "react";
import { Form, Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const Buscador = ({ onFilterChange, onSearchChange, onSort }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    onSearchChange(event.target.value);
  };

  return (
    <Container>
      <Form.Group controlId="typeSelect">
        <Form.Label>Filtrar por Tipo de Cervecería:</Form.Label>
        <Form.Control
          as="select"
          onChange={(e) => onFilterChange(e.target.value)}
        >
          <option value="">Todos</option>
          <option value="micro">Micro</option>
          <option value="brewpub">Brewpub</option>
          <option value="large">Large</option>
          <option value="contract">Contract</option>
          <option value="proprietor">Proprietor</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="searchInput">
        <Form.Label>Buscar por Nombre:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Buscar por nombre..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </Form.Group>

      <Button
        size="sm"
        variant="info"
        onClick={onSort}
        className="margin-top-10 margin-bottom-10"
      >
        a-z x estado
      </Button>
    </Container>
  );
};

Buscador.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSort: PropTypes.func.isRequired,
};

export default Buscador;
