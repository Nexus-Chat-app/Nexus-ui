import { RootState } from "@/store/store";
import { MessageCircle, Users, LogIn, UserPlus, Bell, Radio } from "lucide-react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const navItems = [
  { icon: MessageCircle, label: "Messages", link: "/" },
  { icon: Users, label: "Friends", link: "/friends" },
  { icon: Radio, label: "Channels", link: "/channels" },
  { icon: Bell, label: "Notifications", link: "/notifications" },
];

export default function Sidebar() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);

  // State for active tab
  const [activeTab, setActiveTab] = useState("Messages");

  return (
    <div className="rounded-b-xl md:rounded-l-xl md:rounded-br-none w-full h-16 md:w-16 md:h-full glass border-r border-white/10 flex flex-row md:flex-col justify-between px-4 md:px-0 items-center py-6 backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border gap-4 border-gray-200 dark:border-gray-700">
      <div className="w-10 backdrop-blur-lg rounded-full flex items-center justify-center">
        <img src="./logoWhite.png" className="w-10 rounded-full" alt="Logo" />
      </div>

      {isAuth ? (
        <>
          <nav className="flex-1 flex md:flex-col gap-4">
            {navItems.map((item) => (
              <Link to={item.link}>
                <button
                  key={item.label}
                  onClick={() => setActiveTab(item.label)}
                  className={`p-2 rounded-full transition-all duration-200 text-white group ${
                    activeTab === item.label
                      ? "bg-blue-300/80 dark:bg-red-700/80 backdrop-blur-lg"
                      : "glass-hover"
                  }`}
                  title={item.label}
                >
                  <item.icon className="w-6 h-6 stroke-current" />
                </button>
              </Link>
            ))}
          </nav>

          <div className="md:mt-auto">
            <button className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-white/20">
              <img
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-row md:flex-col gap-4 md:mt-auto">
            <Link to="login">
              <button
                className="p-2 rounded-full transition-all duration-200 text-white group"
                title="login"
              >
                <LogIn className="w-6 h-6 stroke-current" />
              </button>
            </Link>
            <Link to="register">
              <button
                className="p-2 rounded-full transition-all duration-200 text-white group"
                title="register"
              >
                <UserPlus className="w-6 h-6 stroke-current" />
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
