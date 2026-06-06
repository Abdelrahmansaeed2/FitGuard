import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import ProfilePage from '../pages/ProfilePage';

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<div className="p-6 bg-white rounded-xl shadow-sm"><h2 className="text-xl font-bold">Dashboard Overview</h2></div>} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/challenges" element={<div className="text-xl font-bold text-secondary">🏆 Challenges Component Will Go Here</div>} />
          <Route path="/recovery" element={<div className="text-xl font-bold text-warning">❤️‍🩹 Recovery Component Will Go Here</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
