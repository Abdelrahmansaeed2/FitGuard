// src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import ProtectedRoute from '../components/ProtectedRoute'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'
import ProfilePage from '../pages/ProfilePage'
import AthleteProfileDashboard from '../pages/AthleteProfileDashboard'
import RecoveryPage from '../pages/RecoveryPage'
import PhaseDetailPage from '../pages/PhaseDetailPage'
import NotificationsPage from '../pages/NotificationsPage'

const protected_ = (component) => (
  <ProtectedRoute>
    <Layout>{component}</Layout>
  </ProtectedRoute>
)

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route path="/"                    element={protected_(<div className="p-6 bg-white rounded-xl shadow-sm"><h2 className="text-xl font-bold">Dashboard Overview</h2></div>)} />
        <Route path="/profile"             element={protected_(<ProfilePage />)} />
        <Route path="/athlete-dashboard"   element={protected_(<AthleteProfileDashboard />)} />
        <Route path="/challenges"          element={protected_(<div className="text-xl font-bold text-secondary">🏆 Challenges Component Will Go Here</div>)} />
        <Route path="/recovery"            element={protected_(<RecoveryPage />)} />
        <Route path="/recovery/phase/:id"  element={protected_(<PhaseDetailPage />)} />
        <Route path="/notifications"       element={protected_(<NotificationsPage />)} />
      </Routes>
    </Router>
  )
}