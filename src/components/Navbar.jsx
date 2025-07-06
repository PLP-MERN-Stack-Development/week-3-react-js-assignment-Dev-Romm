import { Link } from 'react-router-dom';
const Navbar = () => (
  <nav className="p-4 bg-gray-100 dark:bg-gray-900 text-black dark:text-white flex justify-between">
    <div className="flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/tasks">Tasks</Link>
      <Link to="/api">API</Link>
    </div>
  </nav>
);
export default Navbar;