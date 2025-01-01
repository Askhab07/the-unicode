import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../store/categoryThunk';
import { Link, NavLink } from 'react-router';

const Header = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <header className="w-[1600px] flex flex-col items-center">
        <Link to='/' className="flex items-center justify-center font-[Anton] mb-[53px] cursor-pointer">
          <h2 className="flex items-center justify-center w-[90px] h-[70px] bg-black text-white text-6xl uppercase rotate-[270deg]">
            The
          </h2>
          <h2 className="text-[100px]">Unicode</h2>
        </Link>
      <nav className="w-[1400px] flex justify-center border-black border-b-2 pb-8">
        <ul className="w-[735px] flex justify-between">
          {category.map((e) => (
            <li key={e._id}>
              <NavLink
                to={`/${e._id}`}
                className={({ isActive }) =>
                  `text-xl ${isActive ? 'border-b-2 border-black' : ''}`
                }
              >
                {e.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
