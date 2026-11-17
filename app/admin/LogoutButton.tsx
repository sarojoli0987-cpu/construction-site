"use client";

import { useRouter } from "next/navigation";

// Make sure it says "export default function"
export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm font-medium text-red-500 hover:text-red-700 transition-colors"
    >
      Log Out
    </button>
  );
}