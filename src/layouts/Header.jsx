import { Link } from 'react-router';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="w-[1600px] flex flex-col items-center">
        <Link to='/posts' className="flex items-center justify-center font-[Anton] mb-[53px] cursor-pointer">
          <h2 className="flex items-center justify-center w-[90px] h-[70px] bg-black text-white text-6xl uppercase rotate-[270deg]">
            The
          </h2>
          <h2 className="text-[100px]">Unicode</h2>
        </Link>
        <NavBar />
    </header>
  );
};

export default Header;
