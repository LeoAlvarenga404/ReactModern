import { useState, useEffect } from 'react';
import axios from 'axios';
import { StudyCard } from './StudyCard';
import { useAuth } from '../hooks/auth';

export function ContainerStudyCards() {

  const [data, setData] = useState([]);
  const { usuario } = useAuth();
  const userId = usuario.id

  useEffect(() => {
    axios.get(`http://localhost:3000/estudos/user/${userId}`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        console.error(error);
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
