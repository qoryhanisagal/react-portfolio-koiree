

import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-4 md:px-8 shadow-md sticky top-0 z-50">
      <div className="flex-1">
        <NavLink to="/" className="text-xl font-bold text-primary">
          Koiree
        </NavLink>
      </div>

      <div className="flex-none hidden md:flex gap-4">
        <NavLink to="/" className={({ isActive }) => isActive ? "btn btn-ghost btn-sm text-accent" : "btn btn-ghost btn-sm"}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => isActive ? "btn btn-ghost btn-sm text-accent" : "btn btn-ghost btn-sm"}>About</NavLink>
        <NavLink to="/tech" className={({ isActive }) => isActive ? "btn btn-ghost btn-sm text-accent" : "btn btn-ghost btn-sm"}>Tech</NavLink>
        <NavLink to="/projects" className={({ isActive }) => isActive ? "btn btn-ghost btn-sm text-accent" : "btn btn-ghost btn-sm"}>Projects</NavLink>
        <NavLink to="/contact" className={({ isActive }) => isActive ? "btn btn-ghost btn-sm text-accent" : "btn btn-ghost btn-sm"}>Contact</NavLink>
      </div>

      <div className="dropdown md:hidden">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round"
              strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </label>
        <ul tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-0">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/tech">Tech</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
}