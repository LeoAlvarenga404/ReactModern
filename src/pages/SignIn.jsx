import { useState } from 'react';
import { useAuth } from '../hooks/auth';

import { RiEyeLine, RiEyeOffLine, RiMailLine, RiLockLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen w-screen flex justify-center items-center bg-zinc-900 bg-[url('./assets/bg-login.jpg')] bg-cover relative before:absolute before:w-full before:h-full before:bg-black/90">
      <div className="w-2/4 h-[60vh] backdrop-blur-sm bg-black/15 p-10 rounded-3xl shadow-black/20 shadow-xl  flex justify-center items-center flex gap-6">
        <div className='w-full flex flex-col gap-4'>
          <h1 className='text-5xl font-bold text-zinc-200'>BEM VINDO!</h1>
            <div className='h-1 w-12 bg-zinc-100'></div>
            <span className='text-sm font-medium text-zinc-400 mt-10 text-justify'>Somos a Organize, dedicados a ajudar você a gerenciar e otimizar seus estudos com eficiência. Explore nossas ferramentas e alcance seus objetivos acadêmicos com facilidade.</span>
        </div>
        <form onSubmit={handleSignIn} className='z-10 w-full flex flex-col items-center gap-4 border border-zinc-400 p-6 rounded-lg'>
        <h2 className='text-center text-4xl font-bold text-zinc-200'>LOGIN</h2>
        <span className='text-sm font-medium text-zinc-400 mb-5'>Acesse sua conta para começar a gerenciar suas atividades e acompanhar seu progresso.</span>
        <div className='flex flex-col w-full relative text-zinc-100 gap-2'>
          <label className='text-sm text-zinc-400'>Email</label>
          <input
            type="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Digite seu email'
            className={`p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700`}
          />
          <RiMailLine size={24} className='cursor-pointer absolute left-2 top-2/4'/>
        </div>
        <div className='flex flex-col w-full relative text-zinc-100 placeholder:text-zinc-100 gap-2'>
          <label className='text-sm text-zinc-400'>Senha</label>
          <input
            type={showSenha ? 'text' : 'password'}
            value={senha}
            required
            onChange={(e) => setSenha(e.target.value)}
            placeholder='Digite sua senha'
            className={`p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700`}
          />
          <button tabIndex="-1" onClick={MostrarSenha} >
            {
              showSenha ?
              <div> <RiEyeLine size={24} className='cursor-pointer absolute right-2 top-9'/></div>
              :
              <div><RiEyeOffLine size={24} className='cursor-pointer absolute right-2 top-9'/></div>
            }
            
          </button>
          <RiLockLine size={24} className='cursor-pointer absolute left-2 top-9'/>

        </div>
        <div className='w-full flex items-center justify-between'>
        <button type="submit" className=' w-full rounded p-3 bgOnActive text-zinc-100 text-xl '>Entrar</button>
          <Link to='/register' className='w-full text-end text-zinc-200 hover:text-indigo-700'>Crie sua conta</Link>
        </div>
      </form>
      </div>
    </div>
  );
}
