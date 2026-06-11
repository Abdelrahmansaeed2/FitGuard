import { Outlet } from 'react-router-dom';
import AppSidebar from '../components/AppSidebar';
import AppHeader from '../components/AppHeader';

export default function AppLayout() {
  return (
    <div className="flex bg-surface min-h-screen font-body-md text-body-md text-on-surface">
      <AppSidebar />
      <div className="ml-0 md:ml-[260px] w-full md:w-[calc(100%-260px)] flex flex-col min-h-screen transition-all duration-300">
        <AppHeader />
        <main className="flex-grow p-4 md:p-8 bg-surface overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
