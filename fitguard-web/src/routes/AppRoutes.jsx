import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-dark font-sans">
        <main className="p-6">
          <Routes>
            <Route path="/" element={<h1 className="text-3xl font-bold text-primary">FitGuard Dashboard 🚀</h1>} />
            <Route path="/profile" element={<div className="text-xl">👤 Profile Page</div>} />
            <Route path="/challenges" element={<div className="text-xl text-secondary">🏆 Challenges Page</div>} />
            <Route path="/recovery" element={<div className="text-xl text-warning">❤️‍🩹 Recovery Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
