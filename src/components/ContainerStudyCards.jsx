import { useState, useEffect } from 'react';
import axios from 'axios';
import { StudyCard } from './StudyCard';

export function ContainerStudyCards() {
  const [data, setData] = useState([]);

  const storedData = localStorage.getItem('@reactmodern:usuario');
  const parsedData = JSON.parse(storedData);
  const userId = parsedData.id;


  useEffect(() => {
    // Buscar dados da API
    axios.get(`http://localhost:3000/estudos/user/${userId}`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error('Erro ao buscar dados:', error);
      });


  }, []);

  return (
    <div className='flex flex-wrap gap-10'>
      {data.map(item => (
        <div key={item.id}>
          <StudyCard
            nome={item.titulo}
            descricao={item.descricao}
            porcentagemConcluida={item.porcentagem}
          />
        </div>
      ))}
    </div>
  );
}
