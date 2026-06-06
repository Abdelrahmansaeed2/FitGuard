import { Bell, UserCircle } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm h-20 flex items-center justify-between px-8 z-10">
      <h1 className="text-2xl font-semibold text-slate-800">
        Welcome back, <span className="text-primary">Abd Elrahman</span> 👋
      </h1>
      
      <div className="flex items-center gap-6">
        <button className="relative text-slate-500 hover:text-primary transition-colors">
          <Bell size={24} />
          <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-danger rounded-full border-2 border-white"></span>
        </button>
        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="text-right hidden md:block">
            <p className="text-sm font-bold text-slate-700">Abd Elrahman Saeed</p>
            <p className="text-xs text-slate-500">Pro Athlete</p>
          </div>
          <UserCircle size={40} className="text-slate-300" />
        </div>
      </div>
    </header>
  );
}
