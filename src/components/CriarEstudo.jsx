import { useAuth } from '../hooks/auth'
import axios from '../api/conexao'
import { useState } from 'react'
export function CriarEstudo() {

    const { usuario } = useAuth()
    const [ titulo, setTitulo ] = useState('')
    const [ descricao, setDescricao ] = useState('') 

     function SubmitCriarEstudo() {

        const estudoData = {
            userId: usuario.id,
            titulo,
            descricao
        }

        axios.post('/estudos', estudoData)
            .then(() => {
                setTitulo('')
                setDescricao('')
            })
            .catch(error => {
                console.error('Erro ao cadastrar o estudo', error)
            })
    }
    return (
        <div>
            <form onSubmit={SubmitCriarEstudo}>
                <label htmlFor="titulo"></label>
                <input type="text" id='titulo' placeholder='digite um titulo' value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                  <label htmlFor="descricao"></label>
                <input type="text" id='descricao' placeholder='digite uma descrição' value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <button type='submit'>Cadastrar</button>
            </form>
        </div>

    )
}
