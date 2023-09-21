import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;

  const [coins, setCoins] = useState();

  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setCoins(data.data.data);
        // console.log(data);
      })
      .catch(() => {
        console.error("Error en la petición");
      });
  }, []);

  if (!coins) return <span>Cargando...</span>;

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {coins.map(({ id, name, symbol }) => (
          <li key={id}>
            Nombre: {name} - {symbol}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
