import { useState } from 'react';
import api from '../api/conexao';

export function LoginForm() {
  const [formData, setFormData] = useState({ email: '', senha: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/usuarios/login', formData);
      console.log('Usuário logado:', response.data);
      setError('Usuário logado com sucesso!'); 
    } catch {
      setError('Email ou senha inválidos');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Senha</label>
        <input
          type="password"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          required
        />
      </div>
      {error && <p className='text-red-500'>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
}
