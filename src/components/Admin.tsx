"use client";

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const adminRoutes = [
  { name: 'Admin CPC', href: '/admin-cpc' },
  { name: 'Admin Futsal', href: '/admin-futsal' },
  { name: 'Admin LCT', href: '/admin-lct' },
  { name: 'Admin ML', href: '/admin-ml' }
];

interface AdminProps {
  children: React.ReactNode;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Admin = ({ children, sidebarOpen, setSidebarOpen }: AdminProps) => {
  const pathname = usePathname();

  return (
    <div className="flex h-screen bg-amber-200">
      <aside className={`fixed z-20 h-full w-64 bg-white p-4 text-gray-700 shadow-xl ${sidebarOpen ? '' : 'hidden md:block'}`}>
        <div className="flex flex-col items-center mb-2">
          <img className="w-20 h-20" src="/images/logo/Logo CSS 1.png" alt="Logo" />
          <h5 className="text-xl font-semibold text-blue-gray-900">CSS</h5>
        </div>
        <nav className="flex flex-col gap-1 p-2 text-base font-normal text-blue-gray-700">
          {adminRoutes.map((route) => (
            <Link key={route.href} href={route.href} className={`${pathname === route.href ? 'bg-cyan-100' : ''} flex items-center p-3 rounded-lg hover:bg-cyan-100`}>
              <span className="mr-4">{route.name}</span>
            </Link>
          ))}
          <hr className="my-2 border-blue-gray-50" />
          <button className="flex items-center p-3 w-full rounded-lg hover:bg-cyan-100">
            <svg className="w-5 h-5 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd"></path>
            </svg>
            Log Out
          </button>
        </nav>
      </aside>

      <main className="flex-1 ml-0 md:ml-64">
        {children}
      </main>
    </div>
  );
};

export default Admin;
