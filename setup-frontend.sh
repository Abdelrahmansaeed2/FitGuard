# 1. تسطيب مكتبات Tailwind
npm install -D tailwindcss postcss autoprefixer

# 2. إنشاء ملف postcss.config.js (الحل الجذري لمشكلة الـ Mac)
cat <<EOF > postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# 3. إنشاء ملف tailwind.config.js بالألوان الخاصة بالمشروع
cat <<EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10b981',   // emerald-500
        secondary: '#7c3aed', // violet-600
        danger: '#f43f5e',    // rose-500
        warning: '#fbbf24',   // amber-400
        background: '#f8fafc',// slate-50
        dark: '#0f172a',      // slate-900
      }
    },
  },
  plugins: [],
}
EOF

# 4. بناء الهيكلة الكاملة للمجلدات
mkdir -p src/{assets,components,features/{profile,injuries,challenges,recovery},pages,routes,services,store,utils}

# 5. تفعيل Tailwind في ملف index.css
cat <<EOF > src/index.css
@tailwind base;
@tailwind components;
@tailwind utilities;
EOF

# 6. إنشاء ملف الـ Router الأساسي
cat <<EOF > src/routes/AppRoutes.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-dark font-sans">
        {/* المكان ده هنحط فيه الـ Navbar / Sidebar بعدين */}
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
EOF

# 7. ربط الـ Router بملف الـ App.jsx
cat <<EOF > src/App.jsx
import AppRoutes from './routes/AppRoutes';

function App() {
  return <AppRoutes />;
}

export default App;
EOF

# 8. حفظ التغييرات على Git بشكل نهائي ونظيف
git add .
git commit -m "chore: fix postcss config and finalize frontend structure"