import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="bg-surface-container-lowest min-h-screen font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary">
      <Outlet />
    </div>
  );
}
