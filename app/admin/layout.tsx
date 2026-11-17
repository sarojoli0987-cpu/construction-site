"use client"; // Needed for usePathname

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "./LogoutButton";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Helper function to style active links
  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
      isActive 
        ? "bg-[#EAB308] text-[#0F172A] font-bold" 
        : "text-gray-300 hover:bg-slate-800 hover:text-white"
    }`;
  };

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      
      {/* Sidebar */}
      <aside className="w-64 bg-[#0F172A] text-white flex-col hidden md:flex">
        <div className="h-20 flex items-center px-6 border-b border-slate-800">
          <span className="text-2xl font-bold tracking-tight text-white">
            WDC <span className="text-[#EAB308]">Admin</span>
          </span>
        </div>
        
         <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className={linkClass("/admin")}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
            Dashboard
          </Link>
          
          {/* Messages moved up here */}
          <Link href="/admin/messages" className={linkClass("/admin/messages")}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
            Messages
          </Link>

          {/* Projects moved below Messages */}
          <Link href="/admin/projects" className={linkClass("/admin/projects")}>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            Projects
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-8 shrink-0">
          <div className="md:hidden font-bold text-[#0F172A]">WDC Admin</div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-900">Saroj Oli</p>
              <p className="text-xs text-gray-500">Administrator</p>
            </div>
            <LogoutButton />
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
        
      </div>
    </div>
  );
}