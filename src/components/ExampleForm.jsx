import  { useState } from 'react';

export function ExampleForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [porcentagemConcluida, setPorcentagemConcluida] = useState(0);
  const [finalizado, setFinalizado] = useState(false);
  const [message, setMessage] = useState('');



  const handleSubmit = async (event) => {
    event.preventDefault();


      const response = await fetch(`http://localhost:3000/estudos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome,
          descricao,
          porcentagemConcluida,
          finalizado,
        }),
      });

      if (!response.ok) {
        throw new Error('Erro ao criar o estudo');
      }

      const data = await response.json();
      setMessage(`Estudo criado com sucesso! ID: ${data.id}`);
  };




  return (
    <div>
      <h2>Criar Novo Estudo</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <input
            type="text"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Porcentagem Concluída:</label>
          <input
            type="number"
            value={porcentagemConcluida}
            onChange={(e) => setPorcentagemConcluida(Number(e.target.value))}
            min="0"
            max="100"
            required
          />
        </div>
        <div>
          <label>Finalizado:</label>
          <input
            type="checkbox"
            checked={finalizado}
            onChange={(e) => setFinalizado(e.target.checked)}
          />
        </div>
        <button type="submit">Criar Estudo</button>
      </form>
      {message && <p>{message}</p>}

      <div className='w-40 bg-slate-900'>
      </div>
    </div>
  );
};


