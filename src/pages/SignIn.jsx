import { useState } from 'react';
import { useAuth } from '../hooks/auth';

import { RiEyeLine, RiEyeOffLine, RiUser3Line, RiLockLine } from 'react-icons/ri'

export function SignIn() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showSenha, setShowSenha] = useState(false)

  const { signIn } = useAuth();

  function handleSignIn(e) {
    e.preventDefault();
    signIn({ email, senha });
  }


  function MostrarSenha(e) {
    e.preventDefault()
  
    setShowSenha(!showSenha)
  }

  return (
    <div className='min-h-screen w-screen flex justify-center items-center bg-zinc-900'>
      <div className="w-3/4 p-10 rounded bg-[url('./assets/bg-login.jp')] flex justify-center items-center flex gap-6 border">
          <div className='w-full'>

          </div>
          <form onSubmit={handleSignIn} className='w-full flex flex-col gap-4'>
        <div className='flex flex-col w-full relative text-zinc-100'>
          <label>EMAIL</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Digite seu email'
            className={`p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700`}
          />
          <RiUser3Line size={24} className='cursor-pointer absolute left-2 top-2/4'/>
        </div>
        <div className='flex flex-col w-full relative text-zinc-100 placeholder:text-zinc-100'>
          <label>SENHA</label>
          <input
            type={showSenha ? 'text' : 'password'}
            value={senha}
            required
            onChange={(e) => setSenha(e.target.value)}
            placeholder='Digite sua senha'
            className={`p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700`}
          />
          <button onClick={MostrarSenha}>
            {
              showSenha ?
              <div> <RiEyeLine size={24} className='cursor-pointer absolute right-2 top-2/4'/></div>
              :
              <div><RiEyeOffLine size={24} className='cursor-pointer absolute right-2 top-2/4'/></div>
            }
            
          </button>
          <RiLockLine size={24} className='cursor-pointer absolute left-2 top-2/4'/>

        </div>
        <button type="submit" className='w-full rounded p-3 bgOnActive text-zinc-100 text-xl '>Entrar</button>
      </form>
      </div>
    </div>
  );
}
