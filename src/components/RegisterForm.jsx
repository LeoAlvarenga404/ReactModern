// src/components/RegisterForm.jsx
import { useState } from 'react';
import api from '../api/conexao';

export function RegisterForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/usuarios/register', formData);
      console.log('Usuário registrado:', response.data);
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nome:</label>
        <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Senha:</label>
        <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
      </div>
      <button type="submit">Registrar</button>
    </form>
  );
};

