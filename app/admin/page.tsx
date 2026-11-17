"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [stats, setStats] = useState({ projects: 0, messages: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [projRes, msgRes] = await Promise.all([
          fetch("/api/projects"),
          fetch("/api/messages")
        ]);
        
        const projects = projRes.ok ? await projRes.json() : [];
        const messages = msgRes.ok ? await msgRes.json() : [];
        
        setStats({
          projects: projects.length,
          messages: messages.length
        });
      } catch (error) {
        console.error("Failed to load stats", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500 mt-1">Welcome back, Saroj. Here is what is happening today.</p>
      </div>
      
      {loading ? (
        <p className="text-gray-500">Loading dashboard data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Projects Card */}
          <Link href="/admin/projects" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#EAB308] hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Total Projects</h2>
                <div className="p-2 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-[#EAB308] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                </div>
              </div>
              <p className="text-4xl font-extrabold text-gray-900">{stats.projects}</p>
              <p className="text-sm text-blue-600 mt-4 font-medium group-hover:underline">Manage Projects &rarr;</p>
            </div>
          </Link>
          
          {/* Messages Card */}
          <Link href="/admin/messages" className="group">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#EAB308] hover:shadow-md transition-all">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-gray-500 uppercase tracking-wider">Unread Messages</h2>
                <div className="p-2 bg-green-50 text-green-600 rounded-lg group-hover:bg-[#EAB308] group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
              </div>
              <p className="text-4xl font-extrabold text-gray-900">{stats.messages}</p>
              <p className="text-sm text-green-600 mt-4 font-medium group-hover:underline">View Inbox &rarr;</p>
            </div>
          </Link>

          {/* Quick Action Card */}
          <div className="bg-[#0F172A] p-6 rounded-xl shadow-sm flex flex-col justify-between">
            <div>
              <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-2">Quick Action</h2>
              <p className="text-white font-medium mb-4">Need to add a new construction project?</p>
            </div>
            <Link 
              href="/admin/projects" 
              className="inline-block bg-[#EAB308] text-[#0F172A] font-bold px-4 py-2 rounded text-center hover:bg-yellow-500 transition-colors"
            >
              + Add New Project
            </Link>
          </div>

        </div>
      )}
    </div>
  );
}