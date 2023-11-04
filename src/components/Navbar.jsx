import { BiMenu } from 'react-icons/bi';
import Container from './common/Container';

const NavBar = () => {
  return (
    <div className=" bg-green">
      <Container>
        <div className="flex justify-between items-center py-3">
          <nav className="flex gap-2 text0-white text-[.8rem] text-white">
            <div className="flex gap-1 items-center">
              <BiMenu /> All categories
            </div>
            <p>Become a supplier</p>
            <p>Cost estimator</p>
          </nav>
          <nav className="hidden md:flex gap-2 text0-white text-[.8rem] text-white">
            <p>About ENNYEN</p>
            <p>Our Services</p>
            <p>Blog</p>
            <p>Help center</p>
          </nav>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
