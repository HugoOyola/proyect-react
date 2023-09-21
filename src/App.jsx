// App.js
import axios from "axios";
import { useEffect, useState } from "react";
import Cripto from "./Cripto"; // Asegúrate de importar el componente correctamente
import "./App.css";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((response) => {
        setCoins(response.data.data);
      })
      .catch((error) => {
        console.error("Error en la petición:", error);
      });
  }, []);

  if (coins.length === 0) return <span>Cargando...</span>;

  return (
    <div className="app-container">
      <h1>Lista de Criptomonedas</h1>
      <div className="cripto-container">
        {coins.map(({ id, name, priceUsd }) => (
          <Cripto key={id} name={name} priceUsd={priceUsd} />
        ))}
      </div>
    </div>
  );
}

export default App;
