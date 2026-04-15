import { useState } from "react";
import { NavCardHeader, NavCardSideBar } from "./ui/navCard";

export default function AdminStorePage() {
  const [activePage, setActivePage] = useState("dashboard");

  const navItems = [
    { id: "branch accounts", label: "Branch Accounts" },
    { id: "configuration", label: "Configuration" },
  ];

  return (
    <div className="flex h-screen font-sans">
      {/* Sidebar */}
      <NavCardSideBar>
        <NavCardHeader>
          <h2 className="text-base font-medium m-0">Admin Panel</h2>
          <p className="text-[11px] text-gray-500 mt-1 mb-0">ENTERPRISE</p>
        </NavCardHeader>

        {/* Nav items */}
        <nav>
          {navItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`px-6 py-2.5 cursor-pointer text-sm border-l-[3px] ${
                activePage === item.id
                  ? "text-white bg-white/[0.08] border-[#4f7ef8]"
                  : "text-gray-400 bg-transparent border-transparent"
              }`}
            >
              {item.label}
            </div>
          ))}
        </nav>

        {/* Bottom items */}

        <div className="mt-auto">
          <div className="px-6 py-2.5 cursor-pointer text-sm text-gray-400 hover:text-white">
            Logout
          </div>
        </div>
      </NavCardSideBar>

      {/* Main content */}
      <main style={{ flex: 1, background: "#f3f4f6", padding: "24px" }}>
        <h1 style={{ fontSize: "20px" }}>
          {activePage.charAt(0).toUpperCase() + activePage.slice(1)}
        </h1>
      </main>
    </div>
  );
}
