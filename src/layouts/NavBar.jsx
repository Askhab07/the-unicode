import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategory } from '../store/categoryAction';
import { NavLink } from 'react-router';
import IsLoadingHeader from '../components/IsLoadingHeader';

const NavBar = () => {
  const category = useSelector((state) => state.category.category);
  const pending = useSelector((state) => state.category.pending);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

if (pending) {
  return <IsLoadingHeader />
}

  return (
    <nav className="w-[1400px] flex justify-center border-black border-b-2 pb-8">
      <div className="w-[735px] flex justify-between">
        {category.map((post) => (
          <div key={post._id}>
            <NavLink
              to={`/categories/${post._id}`}
              className={({ isActive }) =>
                `text-xl ${isActive ? 'border-b-2 border-black' : ''}`
              }
            >
              {post.title}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
