// src/pages/SignupPage.jsx
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import useAuthStore from '../store/authStore'
import useUIStore from '../store/uiStore'

export default function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
  const [loading, setLoading] = useState(false)
  const { register } = useAuthStore()
  const { showToast } = useUIStore()
  const navigate = useNavigate()

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (form.password !== form.confirm) {
      showToast({ message: 'Passwords do not match', type: 'error' })
      return
    }
    setLoading(true)
    try {
      // replace with real axios call when backend is ready
      // const res = await apiClient.post('/auth/register', form)
      // register(res.data.user, res.data.token)

      // mock for now
      register(
        { name: form.name, email: form.email, avatar: null },
        'mock-token'
      )
      showToast({ message: 'Account created successfully!', type: 'success' })
      navigate('/')
    } catch (err) {
      showToast({ message: 'Something went wrong', type: 'error' });
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
          <p className="text-slate-400 text-sm mt-1">Create your account</p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6">
          <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Full name</label>
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Abdelrahman Nader"
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm
                  focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

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

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-slate-700">Confirm password</label>
              <input
                name="confirm"
                type="password"
                value={form.confirm}
                onChange={handleChange}
                placeholder="••••••••"
                className="px-4 py-2.5 rounded-lg border border-slate-200 text-sm
                  focus:outline-none focus:border-emerald-400 transition-colors"
              />
            </div>

            <button
              onClick={handleSubmit}
              disabled={loading || !form.name || !form.email || !form.password || !form.confirm}
              className="w-full py-2.5 bg-emerald-500 text-white text-sm font-medium
                rounded-lg hover:bg-emerald-600 transition-colors mt-2
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating account...' : 'Create account'}
            </button>

          </div>
        </div>

        <p className="text-center text-sm text-slate-400 mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-emerald-500 font-medium hover:underline">
            Sign in
          </Link>
        </p>

      </div>
    </div>
  )
}