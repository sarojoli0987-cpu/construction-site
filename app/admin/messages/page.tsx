"use client";

import { useState, useEffect } from "react";

export default function MessagesPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false); // NEW: State for spinning

  const fetchMessages = async () => {
    setIsRefreshing(true); // Start spinning
    try {
      const res = await fetch("/api/messages", { cache: "no-store" });
      const data = await res.json();
      
      if (Array.isArray(data)) {
        setMessages(data);
      }
    } catch (error) {
      console.error("Failed to fetch messages", error);
    } finally {
      setLoading(false);
      setIsRefreshing(false); // Stop spinning
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(`/api/messages/${id}`, { method: "DELETE" });
      if (res.ok) {
        setMessages(messages.filter((msg) => msg._id !== id));
      } else {
        alert("Failed to delete message.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inbox</h1>
          <p className="text-gray-500 mt-1">Messages submitted through your website.</p>
        </div>
        
        {/* UPDATED BUTTON */}
        <button 
          onClick={fetchMessages}
          disabled={isRefreshing}
          className="flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {/* Add animate-spin class if isRefreshing is true */}
            <svg 
            className={isRefreshing ? "w-4 h-4 animate-spin" : "w-4 h-4"} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          {isRefreshing ? "Refreshing..." : "Refresh"}
        </button>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="bg-white p-8 rounded-xl border border-gray-200 text-center text-gray-500">
            Loading messages...
          </div>
        ) : messages.length === 0 ? (
          <div className="bg-white p-12 rounded-xl border border-gray-200 text-center">
            <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900">Your inbox is empty</h3>
            <p className="text-gray-500 mt-1">When someone fills out your contact form, it will appear here.</p>
          </div>
        ) : (
          messages.map((msg: any) => (
            <div key={msg._id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:border-[#EAB308] transition-colors">
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#0F172A] text-white flex items-center justify-center font-bold text-lg">
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{msg.name}</h3>
                    <p className="text-sm text-blue-600 font-medium">{msg.contact}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-xs font-medium text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
                    {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : "No date"}
                  </span>
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-colors"
                    title="Delete Message"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                  </button>
                </div>
              </div>
              <div className="px-6 py-5">
                <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">
                  {msg.message}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}