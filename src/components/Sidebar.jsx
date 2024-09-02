import { useState } from 'react';
import { SidebarItem } from "./SidebarItem";
import { FaBook, FaCircleNotch } from "react-icons/fa";

import logo from '../assets/logo.svg';

export function Sidebar() {
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
      className={`flex flex-col relative ${encolher || fixo ? 'w-96' : 'w-[84px]'} bg-zinc-950 transition-width duration-300 p-2`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`flex items-center justify-center gap-5 pb-8 pt-8 border-b border-zinc-700`}>
        <img src={logo} alt="logo" className='w-18'/>
        <h1
          className={`text-2xl font-medium text-zinc-200 transition-all duration-300 whitespace-nowrap overflow-hidden ${encolher || fixo ? 'block' : 'hidden'}`}
        >
          Organize
        </h1>
        <button onClick={botaoFixarMenu} className={encolher || fixo ? `absolute top-2 right-2 text-zinc-100 ` : 'hidden'}>
          <FaCircleNotch size={24} className={fixo ? 'text-indigo-700' : 'text-zinc-100'}/>
        </button>
      </div>
      <nav className="flex flex-col gap-4 mt-5">
        <SidebarItem to='/' content='Início' icon={FaBook} hiddenOnHover={!encolher && !fixo} />
        <SidebarItem to='/teste2' content='AirplaneTilt' icon={FaBook} hiddenOnHover={!encolher && !fixo} />
        <SidebarItem to='/teste3' content='Palette' icon={FaBook} hiddenOnHover={!encolher && !fixo} />
      </nav>
    </aside>
  );
}

