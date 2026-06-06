import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';

export default function AppRoutes() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={
            <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
              <h2 className="text-xl font-bold text-slate-800 mb-2">Dashboard Overview</h2>
              <p className="text-slate-500">Your AI-driven fitness journey starts here.</p>
            </div>
          } />
          <Route path="/profile" element={<div className="text-xl font-bold text-slate-800">👤 Athlete Profile Component Will Go Here</div>} />
          <Route path="/challenges" element={<div className="text-xl font-bold text-secondary">🏆 Challenges Component Will Go Here</div>} />
          <Route path="/recovery" element={<div className="text-xl font-bold text-warning">❤️‍🩹 Recovery Component Will Go Here</div>} />
        </Routes>
      </Layout>
    </Router>
  );
}
