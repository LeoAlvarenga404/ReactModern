import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

export function SidebarItem({ to, content, icon: Icon, hiddenOnHover }) {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div
        className={`flex items-center  text-xl w-full ${isActive ? 'bg-indigo-700' : 'hover:bg-indigo-600'} 
          transition-all duration-300 rounded-xl text-zinc-300 group ${hiddenOnHover ? 'p-4 gap-4' : 'p-2 gap-2'}`}
      >
        <Icon size={36} weight='regular' className={`flex-shrink-0 ${hiddenOnHover ? 'scale-125' : 'scale-100'}`} />
        <span
          className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${hiddenOnHover ? 'opacity-0' : 'opacity-100'}`}
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
