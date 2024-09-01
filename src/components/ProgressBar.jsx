import PropTypes from 'prop-types';

export function ProgressBar({ porcentagemConcluida }) {

  const progressoFinalizado = porcentagemConcluida === 100 ? 'bg-emerald-500' : 'bg-indigo-500';

  const semProgresso = porcentagemConcluida === 0 ?'hidden' : ''
  return (
    <div>
      <div className='flex justify-between'>
        <h4>Progresso</h4>
        <span>{porcentagemConcluida}%</span>
      </div>
      <div className="relative w-full bg-indigo-200 rounded-full h-2">
        <div
          style={{ width: `${porcentagemConcluida}%` }}
          className={`${progressoFinalizado} h-full rounded-full flex items-center justify-center text-white font-bold relative`}
        >
        <div className={`${progressoFinalizado} ${semProgresso} h-3 w-3 bg-indigo-500 absolute right-0 rounded-full border-2`}></div>
        </div>
      </div>
    </div>
  );
}

ProgressBar.propTypes = {
  porcentagemConcluida: PropTypes.number.isRequired,
};
