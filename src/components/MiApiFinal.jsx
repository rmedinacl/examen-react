import { useEffect, useState } from "react";
import { Container, Card, Pagination } from "react-bootstrap";
import Buscador from "./Buscador";
import "../App.css";

const ITEMS_PER_PAGE = 10;

export default function MiApiFinal() {
  const [info, setInfo] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
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
    const sortedInfo = [...info].sort((a, b) => a.state.localeCompare(b.state));
    setInfo(sortedInfo);
  };

  const handleFilterChange = (selectedType) => {
    setSelectedType(selectedType);
  };

  const handleSearchChange = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredItems = info.filter((item) => {
    return (
      (selectedType === "" || item.brewery_type === selectedType) &&
      (searchTerm === "" ||
        item.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  });

  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);

  return (
    <Container className="margin-top-10">
      <Buscador
        onFilterChange={handleFilterChange}
        onSearchChange={handleSearchChange}
        onSort={sortByState}
      />

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
  );
}
