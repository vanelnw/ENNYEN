/* eslint-disable react/prop-types */
import { BiMenu } from 'react-icons/bi';
import Container from '../../../components/common/Container';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-green">
      <Container>
        <div className="flex justify-between items-center py-3">
          <nav className="flex gap-2 text-white text-[.8rem]">
            <NavItem
              icon={<BiMenu className="text-[1rem]" />}
              text="All categories"
            />
            <NavItem text="Become a supplier" to="/supplier" />
            <NavItem text="Cost estimator" to="/cost-estimator" />
          </nav>
          <nav className="hidden md:flex gap-2 text-white text-[.8rem]">
            <NavItem text="About ENNYEN" to="/about" />
            <NavItem text="Our Services" to="/services" />
            <NavItem text="Blog" to="/blog" />
            <NavItem text="Help center" to="/help" />
          </nav>
        </div>
      </Container>
    </div>
  );
};

const NavItem = ({ icon, text, to }) => (
  <NavLink to={to} className="flex items-center text-white cursor-pointer">
    {icon} {text}
  </NavLink>
);

export default Navbar;
