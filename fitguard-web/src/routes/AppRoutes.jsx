import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import ProfilePage from '../pages/ProfilePage';
import AthleteProfileDashboard from '../pages/AthleteProfileDashboard';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><div className="p-6 bg-white rounded-xl shadow-sm"><h2 className="text-xl font-bold">Dashboard Overview</h2></div></Layout>} />
        <Route path="/profile" element={<Layout><AthleteProfileDashboard /></Layout>} />
        <Route path="/athlete-dashboard" element={<Layout><AthleteProfileDashboard /></Layout>} />
        <Route path="/challenges" element={<Layout><div className="text-xl font-bold text-secondary">🏆 Challenges Component Will Go Here</div></Layout>} />
        <Route path="/recovery" element={<Layout><div className="text-xl font-bold text-warning">❤️‍🩹 Recovery Component Will Go Here</div></Layout>} />
      </Routes>
    </Router>
  );
}
