import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../store/categoryAction';
import { NavLink } from 'react-router';

const NavBar = () => {
  const category = useSelector((state) => state.category.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  return (
    <nav className="w-[1400px] flex justify-center border-black border-b-2 pb-8">
      <div className="w-[735px] flex justify-between">
        {category.map((e) => (
          <div key={e._id}>
            <NavLink
              to={`/categories/${e._id}`}
              className={({ isActive }) =>
                `text-xl ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              {e.title}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
