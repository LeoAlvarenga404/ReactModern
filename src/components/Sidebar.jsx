import { useState } from 'react';
import { SidebarItem } from "./SidebarItem";
import { RiDashboardFill, RiBook2Fill, RiSettings2Fill, RiCalendar2Fill, RiDashboard2Fill, RiFocusLine  } from "react-icons/ri";
import logo from '../assets/logo.svg';
import { useAuth } from '../hooks/auth';



export function Sidebar() {

  const { usuario } = useAuth();

  const [encolher, setEncolher] = useState(false);
  const [fixo, setFixo] = useState(false);

  function handleMouseEnter() {
    setEncolher(true);
  }

  function handleMouseLeave() {
    if (!fixo) {
      setEncolher(false);
    }
  }

  function botaoFixarMenu() {
   setFixo(!fixo);
    setEncolher(true);
  }

  return (
    <aside
      className={`flex flex-col relative ${encolher || fixo ? 'w-96' : 'w-[80px]'} bg-zinc-950 transition-width duration-300 p-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={` border-zinc-700 pt-4 pb-8 border-b border-zinc-800`}>
        <div className=' flex items-center gap-4'>
        <img src={logo} alt="" className='min-w-16'/>
      
        <h1 className={`text-2xl font-medium text-zinc-200 transition-all ${encolher || fixo ? 'opacity-100' : 'opacity-0'}`}>Organize</h1>
        </div>
        <button onClick={botaoFixarMenu} className={encolher || fixo ? `absolute top-2 right-2 text-zinc-100 ` : 'hidden'}>
          <RiFocusLine  size={24} className={fixo ? 'text-indigo-700' : 'text-zinc-100'}/>
        </button>
      </div>
      <nav className="flex flex-col gap-4 mt-5">
        <SidebarItem to='/' content='Início' icon={RiDashboardFill } hiddenOnHover={!encolher && !fixo} />
        <SidebarItem to='/teste' content='Matérias' icon={RiBook2Fill  } hiddenOnHover={!encolher && !fixo} />
        <SidebarItem to='/teste2' content='Calendário' icon={RiCalendar2Fill  } hiddenOnHover={!encolher && !fixo} />
        <SidebarItem to='/teste3' content='Desempenho' icon={RiDashboard2Fill  } hiddenOnHover={!encolher && !fixo} />
        <SidebarItem to='/teste3' content='Configuração' icon={RiSettings2Fill  } hiddenOnHover={!encolher && !fixo} />
      </nav>
    </aside>
  );
}

