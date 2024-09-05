import { ProgressBar } from './ProgressBar';
import { PropTypes } from 'prop-types'
import { FaBook ,FaStickyNote    } from "react-icons/fa";


export function StudyCard({nome, descricao, porcentagemConcluida, }) {

  return (
    <div className='p-4 w-full rounded bg-zinc-800'>
      <div className='flex flex-col'>
        <h1 className='text-center text-2xl font-semibold text-zinc-200'>{nome}</h1>
        <p className='h-12 line-clamp-2 overflow-hidden text-zinc-300'>{descricao}</p>
        <ProgressBar porcentagemConcluida={porcentagemConcluida} />
        <div className='flex mt-2 gap-3'>
          <div className='flex items-center gap-2 text-zinc-400'>
            <FaBook   size={20}/>
            10
          </div>
          <div className='flex items-center gap-2 text-zinc-400'>
            <FaStickyNote  size={20}/>
            5
          </div>
     
        </div>
      </div>
    </div>
  );
}

StudyCard.propTypes = {
  nome: PropTypes.string.isRequired,
  descricao: PropTypes.string.isRequired,
  porcentagemConcluida: PropTypes.number.isRequired,
};

