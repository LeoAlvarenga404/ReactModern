import { ProgressBar } from './ProgressBar';
import { PropTypes } from 'prop-types'

export function StudyCard({nome, descricao, porcentagemConcluida, }) {

  return (
    <div>
      <div className='p-4 bg-zinc-700 flex flex-col w-72'>
        <h1>{nome}</h1>
        <p className='h-12 line-clamp-2 overflow-hidden'>{descricao}</p>
        <div className="p-4">
          <ProgressBar porcentagemConcluida={porcentagemConcluida} />
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

