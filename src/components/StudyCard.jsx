import { ProgressBar } from './ProgressBar';
import { PropTypes } from 'prop-types'
import { FaBook ,FaStickyNote    } from "react-icons/fa";


export function StudyCard({nome, descricao, porcentagemConcluida, }) {

  return (
    <div>
      <div className='p-4 bg-zinc-700 flex flex-col w-72'>
        <h1>{nome}</h1>
        <p className='h-12 line-clamp-2 overflow-hidden'>{descricao}</p>
        <ProgressBar porcentagemConcluida={porcentagemConcluida} />
        <div className='flex mt-2 gap-3'>
          <div className='flex items-center gap-2 text-zinc-950'>
            <FaBook   size={20}/>
            10
          </div>
          <div className='flex items-center gap-2 text-zinc-950'>
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

