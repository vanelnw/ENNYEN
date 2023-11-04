import logo from '../assets/images/logo.png';
import { BsSearch, BsPerson } from 'react-icons/bs';
import { IoLanguageOutline } from 'react-icons/io5';
import Container from './common/Container';

const Header = () => {
  return (
    <div className="border-t-2 border-blue-ative">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div className="inline-flex w-32 h-18">
            <img src={logo} alt="logo" className="w-full h-full object-cover" />
          </div>
          <div className="hidden md:block flex-shrink flex-grow-0 justify-start px-2">
            <div className="flex items-center justify-between flex-grow-0 flex-shrink pl-2 relative w-60 border rounded-full px-1  py-1">
              <input type="text" placeholder="Serah ENNYEN" className="h-18" />
              <button
                type="button"
                className="h-6 w-6 bg-green flex items-center justify-center rounded-full">
                <BsSearch className="text-white h-3 w-3 cursor-pointer" />
              </button>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <div className="text-blue flex gap-1 items-center">
              <IoLanguageOutline /> ENG
            </div>
            <div className="text-blue flex gap-1 items-center text-[.9rem]">
              <BsPerson className="w-5 h-5" /> Sign in
            </div>
            <button className="rounded-lg py-1 px-2 text-white bg-blue">
              Sign up
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
