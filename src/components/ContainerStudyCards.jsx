import { useState, useEffect } from 'react';
import axios from 'axios';
import { StudyCard } from './StudyCard';

export function ContainerStudyCards() {
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
    <div className='flex flex-wrap gap-10'>
      {data.map(item => (
        <div key={item.id}>
          <StudyCard
          nome={item.nome}
          descricao={item.descricao}
          porcentagemConcluida={item.porcentagemConcluida}
          />
        </div>
      ))}
    </div>
  );
}








