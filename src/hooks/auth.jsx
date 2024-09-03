import { createContext, useContext, useEffect, useState } from 'react';
import axios from '../api/conexao';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, senha }) {
    try {
      const response = await axios.post('/usuarios/login', { email, senha });
      const { usuario, token } = response.data;

      localStorage.setItem('@reactmodern:usuario', JSON.stringify(usuario));
      localStorage.setItem('@reactmodern:token', token);

      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ usuario, token });
      alert('Usuário logado com sucesso!');
    } catch (error) {
      if (error.response) {
        alert('Erro ao tentar logar.');
      } else {
        alert('Não foi possível entrar.');
      }
    }
  }

  useEffect(() => {
    const token = localStorage.getItem('@reactmodern:token');
    const usuario = localStorage.getItem('@reactmodern:usuario');

    if (token && usuario) {
      try {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        setData({
          token,
          usuario: JSON.parse(usuario),
        });
      } catch (error) {
        console.error('Erro ao analisar os dados do usuário:', error);
        localStorage.removeItem('@reactmodern:token');
        localStorage.removeItem('@reactmodern:usuario');
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, usuario: data.usuario }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
