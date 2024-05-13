import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";

import Table from "react-bootstrap/Table";

export default function MiApi() {
  const [info, setInfo] = useState([]);

  try {
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
        console.error("Error fetching API:", error);
      }
    };
  } catch (error) {
    console.error("Error in useEffect:", error);
  }

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

  return (
    <>
      <h2>Información de la API</h2>
      <Button onClick={sortByState}>Ordenar por Estado</Button>
      {info.map((item, index) => (
        <Table size="sm" striped bordered hover key={index}>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Tipo</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.name}</td>
              <td>{item.state}</td>
              <td>{item.brewery_type}</td>
              <td>{item.website_url}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </>
  );
}
