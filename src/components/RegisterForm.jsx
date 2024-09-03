import { useState } from 'react'
import axios from '../api/conexao'


export function RegisterForm() {
  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')


  async function CadastrarUsuario(e) {
    e.preventDefault()

    try {
      await axios.post('/usuarios/register', {nome, email, senha})
      console.log('usuário cadastrado')
    } catch(error) {
      console.log('erro ao cadastrar usuário', error)
    }
  }


  return (
    <form onSubmit={CadastrarUsuario}>
      <div>
        <label htmlFor="nome">Nome</label>
        <input id="nome"type="text" placeholder="digite seu nome"
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email"type="text" placeholder="digite seu email"
          onChange={(e) => setEmail(e.target.value)}

        />
      </div>
      <div>
        <label htmlFor="senha">Senha</label>
        <input id="senha"type="text" placeholder="digite sua senha"
          onChange={(e) => setSenha(e.target.value)}        
        />
      </div>
      <button type='submit'>Cadastrar</button>
    </form>

  )
}