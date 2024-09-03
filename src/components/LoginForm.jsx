import { useState } from 'react';
import axios from '../api/conexao';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  async function submitFazerLogin(e) {
    e.preventDefault();

    try {
      await axios.post('/usuarios/login', { email, senha });
      console.log('Usuário logado:');

    } catch {
      console.log('deu errado');
    }
  }

  return (
    <form onSubmit={submitFazerLogin}>
      <div>
        <label>EMAIL</label>
        <input type="email" value={email} required
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div>
        <label>SENHA</label>
        <input type="password" value={senha} required
          onChange={(e) => setSenha(e.target.value)} 
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
