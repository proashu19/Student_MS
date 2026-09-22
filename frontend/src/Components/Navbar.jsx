import {NavLink} from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar" aria-label="Main navigation">
      <NavLink to="/" end className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Home
      </NavLink>
      <NavLink to="/add-student" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Add Student
      </NavLink>
      <NavLink to="/students" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
        Student List
      </NavLink>
    </nav>
  );
}

export default Navbar;
