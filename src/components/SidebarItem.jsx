import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export function SidebarItem({ to, content, icon: Icon, hiddenOnHover }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div className={`background-linear flex w-full py-3 gap-3 rounded-xl hover:text-white ${isActive ? 'bgOnActive text-white' : 'text-zinc-300'}`}>
        <div className='ml-4'>
          <Icon size={32}/>
        </div>
      <span
          className={` text-xl overflow-hidden whitespace-nowrap transition-all duration-500 ease-out ${hiddenOnHover ? 'opacity-0' : 'opacity-100'}`}
        >
          {content}
        </span>
      </div>

    </Link>
  );
}

SidebarItem.propTypes = {
  to: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  icon: PropTypes.elementType.isRequired,
  hiddenOnHover: PropTypes.bool,
};
