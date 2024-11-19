import { MessageSquare, Users, Settings, LogIn, UserPlus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { icon: MessageSquare, label: "Messages", active: true },
  { icon: Users, label: "Friends" },
];


export default function Sidebar() {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <div className="w-16 rounded-l-xl h-full glass border-r border-white/10 flex flex-col items-center py-6 backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
      <div className="w-10 backdrop-blur-lg rounded-full mb-8 flex items-center justify-center">
        <img src="./logoWhite.png" className="w-10 rounded-full " alt="Logo" />
      </div>

      {isAuth ? (
        <>
          <nav className="flex-1 flex flex-col gap-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                className={`p-2 rounded-full transition-all duration-200 text-white group ${
                  item.active
                    ? "bg-blue-300/80 dark:bg-red-700/80 backdrop-blur-lg "
                    : "glass-hover"
                }`}
                title={item.label}
              >
                <item.icon className="w-6 h-6 stroke-current" />
              </button>
            ))}
          </nav>

          <div className="mt-auto">
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
          <div className="flex flex-col gap-4 mt-auto">
            <Link to={'login'}>
              <button
                className="p-2 rounded-full transition-all duration-200 text-white group"
                title="login"
              >
                <LogIn className="w-6 h-6 stroke-current" />
              </button>
            </Link>
            <Link to={'register'}>
              <button
                className="p-2 rounded-full transition-all duration-200 text-white group"
                title="login"
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
