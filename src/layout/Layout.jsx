import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow container mx-auto p-4">{children}</main>
    <Footer />
  </div>
);
export default Layout;