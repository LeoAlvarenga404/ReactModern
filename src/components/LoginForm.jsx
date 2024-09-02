import { useState } from 'react';
import axios from 'axios';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Fazendo a requisição para o JSON com a lista de usuários
      const response = await axios.get('http://localhost:3000/usuarios');
      const usuarios = response.data;

      // Encontrando o usuário com o email fornecido
      const usuario = usuarios.find(user => user.email === email);

      if (usuario) {
        // Verificando se a senha fornecida corresponde à hash armazenada
        const bcrypt = require('bcryptjs');
        const isMatch = await bcrypt.compare(senha, usuario.senha);

        if (isMatch) {
          alert('sucesso');
        } else {
          alert('Senha incorreta');
        }
      } else {
        alert('usuario nao existe no banco');
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Ocorreu um erro ao tentar fazer login.', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Senha:</label>
        <input
          type="password"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

