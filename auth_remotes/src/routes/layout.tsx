import { Outlet } from '@modern-js/runtime/router';

export default function Layout() {
  return (
    <div className="container mx-auto">
      <Outlet />
    </div>
  );
}
