import React, { useState } from "react";
import MiApiCards from "./MiApiCards";

interface Resultado {
  nombre: string;
  estado: string;
}

const Buscador: React.FC = () => {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState<Resultado[]>([]);

  const buscar = async () => {
    try {
      const url = "https://api.openbrewerydb.org/breweries";
      const response = await fetch(`tu-api.com/buscar?termino=${busqueda}`);
      const data = await response.json();
      setResultados(data);
    } catch (error) {
      console.error("Error al buscar:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <button onClick={buscar}>Buscar</button>

      {resultados.length > 0 ? (
        <MiApiCards resultados={resultados} />
      ) : (
        <p>No se encontraron resultados</p>
      )}
    </div>
  );
};

export default Buscador;
