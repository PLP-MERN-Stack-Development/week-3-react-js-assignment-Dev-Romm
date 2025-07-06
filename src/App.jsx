import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Tasks from './pages/TaskManager.jsx';
import ApiData from './pages/ApiData.jsx';
import Layout from './layout/Layout.jsx';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/api" element={<ApiData />} />
      </Routes>
    </Layout>
  );
}

export default App;