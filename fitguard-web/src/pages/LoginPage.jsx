// src/pages/LoginPage.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import useUIStore from '../store/uiStore'

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const { login } = useAuthStore()
  const { showToast } = useUIStore()
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      // replace with real axios call when backend is ready
      // const res = await apiClient.post('/auth/login', form)
      // login(res.data.user, res.data.token)

      login(
        { name: 'Abdelrahman', email: form.email, avatar: null },
        'mock-token'
      )
      showToast({ message: 'Welcome back!', type: 'success' })
      navigate('/')
    } catch (err) {
      showToast({ message: 'Invalid email or password', type: 'error' });
      console.log(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-sm">

        {/* Logo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-emerald-500">FitGuard</h1>
          <p className="text-slate-400 text-sm mt-1">Sign in to your account</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Email</label>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm
                  focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Password</label>
              <input
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm
                  focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !form.email || !form.password}
              className="w-full py-2.5 bg-emerald-500 text-white text-sm font-medium
                rounded-lg hover:bg-emerald-600 transition-colors mt-2
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>

          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-emerald-500 font-medium hover:underline">
            Sign up
          </Link>
        </p>

      </div>
    </div>
  )
}