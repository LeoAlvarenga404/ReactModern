import { useState, useEffect } from 'react';
import axios from 'axios';

export function ExampleFetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/estudos')
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item.id}>
          <h1>{item.nome}</h1>
          <h2>{item.descricao}</h2>
          <h3>{item.porcentagemConcluida}</h3>
          <h4>{item.finalizado ? 'Sim' : 'Não'}</h4>
        </div>
      ))}
    </div>
  );
}
