import { Link } from 'react-router-dom';
import { Home, User, Target, Activity, ShieldPlus } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-dark text-white min-h-screen p-6 flex flex-col shadow-xl z-20">
      <div className="flex items-center gap-3 mb-10">
        <ShieldPlus size={32} className="text-primary" />
        <h2 className="text-2xl font-bold text-white tracking-wide">FitGuard</h2>
      </div>
      
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-primary transition-all">
          <Home size={20} />
          <span className="font-medium">Dashboard</span>
        </Link>
        <Link to="/profile" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-primary transition-all">
          <User size={20} />
          <span className="font-medium">Athlete Profile</span>
        </Link>
        <Link to="/challenges" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-secondary transition-all">
          <Target size={20} />
          <span className="font-medium">Challenges</span>
        </Link>
        <Link to="/recovery" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 hover:text-warning transition-all">
          <Activity size={20} />
          <span className="font-medium">Recovery</span>
        </Link>
      </nav>
    </aside>
  );
}
