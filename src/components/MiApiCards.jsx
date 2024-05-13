import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";

const ITEMS_PER_PAGE = 10;

export default function MiApiCards() {
  const [info, setInfo] = useState([]);
  const [selectedType, setSelectedType] = useState("");

  useEffect(() => {
    beerApi();
  }, []);

  const beerApi = async () => {
    try {
      const url = "https://api.openbrewerydb.org/breweries";
      const response = await fetch(url);
      const data = await response.json();
      setInfo(data);
    } catch (error) {
      console.error("Error de Api:", error);
    }
  };

  const sortByState = () => {
    const sortedInfo = [...info].sort((a, b) => {
      if (a.state < b.state) {
        return -1;
      }
      if (a.state > b.state) {
        return 1;
      }
      return 0;
    });
    setInfo(sortedInfo);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
  };

  const filteredItems = selectedType
    ? info.filter((item) => item.brewery_type === selectedType)
    : info;

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  return (
    <>
      <Container>
        <Form.Group controlId="typeSelect">
          <Form.Label>Filtrar por Tipo de Cervecería:</Form.Label>
          <Form.Control as="select" onChange={handleTypeChange}>
            <option value="">Todos</option>
            <option value="micro">Micro</option>
            <option value="brewpub">Brewpub</option>
            <option value="large">Large</option>
            <option value="contract">Contract</option>
            <option value="proprietor">Proprietor</option>
          </Form.Control>
        </Form.Group>
        <Button size="sm" variant="info" onClick={sortByState}>
          Alfabeticamente por Estado
        </Button>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
          {currentItems.map((item, index) => (
            <div className="col mb-4" key={index}>
              <Card border="danger">
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>Estado:</strong> {item.state}
                  </Card.Text>
                  <Card.Text>
                    <strong>Tipo:</strong> {item.brewery_type}
                  </Card.Text>
                  <Card.Text>
                    <strong>Website:</strong>{" "}
                    <a href={item.website_url}>{item.website_url}</a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>

        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </Container>
    </>
  );
}
