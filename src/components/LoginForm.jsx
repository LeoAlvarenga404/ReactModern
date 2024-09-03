import { useState } from 'react';
import { useAuth } from '../hooks/auth';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ email, senha });
  }

  return (
    <form onSubmit={handleSignIn}>
      <div>
        <label>EMAIL</label>
        <input
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>SENHA</label>
        <input
          type="password"
          value={senha}
          required
          onChange={(e) => setSenha(e.target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
}
