import { useState, useEffect } from 'react';
import axios from 'axios';
import { StudyCard } from './StudyCard';
import { useAuth } from '../hooks/auth';

export function ContainerStudyCards() {

  const [data, setData] = useState([]);
  const [search, setSearch] = useState('')
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


  }, [userId]);

  const filtroDoSearch = data.filter(item =>
    item.titulo.toLowerCase().includes(search.toLowerCase()) ||
    item.descricao.toLowerCase().includes(search.toLowerCase())
  )
   
  return (
    <div className='flex flex-col'>
    <div className='w-full mb-8 flex gap-4'>
      <input
      type="text"
      placeholder='Pesquise seu estudo...'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className='w-full p-2 rounded bg-transparent outline outline-1 outline-zinc-300 text-zinc-100'/>
        <button className='p-2 w-60 bg-indigo-700'>Criar novo estudo</button>
      
    </div>
    <div className='flex gap-6'>
    {filtroDoSearch.map(item => (
        <div key={item.id}>
          <StudyCard
            nome={item.titulo}
            descricao={item.descricao}
            porcentagemConcluida={item.porcentagem}
          />
        </div>
      ))}
    </div>
    </div>
  );
}
