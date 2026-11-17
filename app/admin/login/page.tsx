"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Send the password to our API route
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      // If correct, go to the admin dashboard
      router.push("/admin");
      router.refresh();
    } else {
      setError("Incorrect password!");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F3F2EE] px-4 font-sans">
      <div className="w-full max-w-md bg-white p-8 shadow-sm border border-gray-100 sm:p-10">
        
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            WDC Admin
          </h1>
          <p className="mt-2 text-sm text-gray-500">
            Sign in to manage your site
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-300 bg-transparent px-1 py-2 text-gray-900 placeholder-gray-400 focus:border-[#EAB308] focus:outline-none transition-colors"
              required
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 font-medium bg-red-50 p-2 border border-red-100">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-[#0F172A] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1E293B] hover:text-[#EAB308] focus:outline-none focus:ring-2 focus:ring-[#EAB308] focus:ring-offset-2"
          >
            Log In
          </button>
        </form>
        
      </div>
    </div>
  );
}