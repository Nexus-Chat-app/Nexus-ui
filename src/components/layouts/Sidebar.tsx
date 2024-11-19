import { MessageSquare, Users, Radio, Settings } from 'lucide-react';

const navItems = [
  { icon: MessageSquare, label: 'Messages', active: true },
  { icon: Users, label: 'Groups' },
  { icon: Radio, label: 'Channels' },
  { icon: Settings, label: 'Settings' }
];

export default function Sidebar() {
  return (
    <div className="w-20 glass border-r border-white/10 flex flex-col items-center py-6">
      <div className="w-12 h-12 bg-emerald-500/80 backdrop-blur-lg rounded-full mb-8 flex items-center justify-center">
        <span className="text-white font-semibold text-xl">W</span>
      </div>
      
      <nav className="flex-1 flex flex-col gap-4">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={`p-3 rounded-xl transition-all duration-200 group ${
              item.active 
                ? 'bg-emerald-500/80 backdrop-blur-lg' 
                : 'glass-hover'
            }`}
            title={item.label}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </nav>
      
      <div className="mt-auto">
        <button className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-white/20">
          <img
            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </div>
  );
}