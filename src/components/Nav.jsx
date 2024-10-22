import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <span>Dosee-Do</span>
    <Link to="/">Home</Link>
    <Link to="/calculator">Calculator</Link>
  </nav>
);

export default Navbar;
