import { useState } from 'react'
import axios from '../api/conexao'
import { Link } from 'react-router-dom'
import {  RiEyeLine, RiEyeOffLine, RiMailLine, RiLockLine, RiUser3Line, RiCloseLine } from 'react-icons/ri'


export function SignUp() {
  const [ nome, setNome ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const [showSenha, setShowSenha] = useState(false)
  const [showModal, setShowModal] = useState(false)

  
  function chamarModal() {
    setShowModal(true)
  }   


  async function CadastrarUsuario(e) {
    e.preventDefault()

    try {
      await axios.post('/usuarios/register', {nome, email, senha})
      console.log('usuário cadastrado')
      chamarModal()
    } catch(error) {
      console.log('erro ao cadastrar usuário', error)
    }
  }

  function MostrarSenha(e) {
    e.preventDefault()
  
    setShowSenha(!showSenha)
  }

  return (
    <div className="min-h-screen w-screen flex justify-center items-center bg-zinc-900 bg-[url('./assets/bg-login.jpg')] bg-cover relative before:absolute before:w-full before:h-full before:bg-black/90">
    <div className="w-2/4 h-[60vh] backdrop-blur-sm bg-black/15 p-10 rounded-3xl shadow-black/20 shadow-xl  flex justify-center items-center flex gap-6">
      <div className='w-full flex flex-col gap-4'>
        <h1 className='text-5xl font-bold text-zinc-200'>VAMOS COMEÇAR!

</h1>
          <div className='h-1 w-12 bg-zinc-100'></div>
          <span className='text-sm font-medium text-zinc-400 mt-10 text-justify'>Junte-se à Organize e comece a transformar seus estudos com as melhores ferramentas de gestão. Preencha os campos abaixo para iniciar sua jornada rumo ao sucesso acadêmico.

</span>
      </div>
    <form onSubmit={CadastrarUsuario} className='-10 w-full flex flex-col items-center gap-4 border border-zinc-400 p-6 rounded-lg'>
    <h2 className='text-center text-4xl font-bold text-zinc-200'>REGISTRO</h2>
    <span className='text-sm font-medium text-zinc-400 mb-5'>Crie sua conta e comece a gerenciar suas atividades e acompanhar seu progresso.</span>
      <div className='flex flex-col w-full relative text-zinc-100 gap-2'>
        <label htmlFor="nome" className='text-sm text-zinc-400'>Nome</label>
        <input id="nome"type="text" placeholder="Digite seu nome"
          onChange={(e) => setNome(e.target.value)}

          
          className='p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700'
        />
        <RiUser3Line size={24} className='cursor-pointer absolute left-2 top-2/4'/>
      </div>
      <div className='flex flex-col w-full relative text-zinc-100 gap-2'>
        <label htmlFor="email" className='text-sm text-zinc-400'>Email</label>
        <input id="email"type="text" placeholder="Digite seu email"
          onChange={(e) => setEmail(e.target.value)}
          
          className='p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700'
        />
        <RiMailLine size={24} className='cursor-pointer absolute left-2 top-2/4'/>
      </div>
      <div className='flex flex-col w-full relative text-zinc-100 gap-2'>
        <label htmlFor="senha" className='text-sm text-zinc-400'>Senha</label>
        <input id="senha"type="text" placeholder="Digite sua senha"
          onChange={(e) => setSenha(e.target.value)}   
          
          className='p-2 pl-10 w-full rounded bg-transparent outline outline-1  outline-zinc-400 border-zinc-500  focus:outline-indigo-700'     
        />
         <button onClick={MostrarSenha}>
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
        <button type="submit" className=' w-full rounded p-3 bgOnActive text-zinc-100 text-xl '>Cadastrar</button>
          <Link to='/' className='w-full text-end text-zinc-200 hover:text-'>Fazer login</Link>
        </div>
    </form>

    </div>
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70">
          <div className="relative bg-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold">Conta criada com sucesso!</h2>
            <button className="mt-4 px-8 py-2 bg-indigo-700 text-white rounded"><Link to='/'>Fazer login</Link></button>
            <button onClick={() => setShowModal(false)} className='absolute top-2 right-2'><RiCloseLine size={24}/></button>
          </div>
        </div>
      )}
  </div>

  )
}