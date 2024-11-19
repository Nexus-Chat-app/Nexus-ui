import { Check, Search } from 'lucide-react';

const chats = [
  {
    id: 1,
    name: 'Alice Johnson',
    message: 'Hey! Are we still meeting today?',
    time: '10:45 AM',
    unread: 2,
    online: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: 2,
    name: 'Work Group',
    message: 'John: The project deadline is next week',
    time: '9:30 AM',
    unread: 5,
    online: false,
    avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=100&h=100&fit=crop'
  },
  {
    id: 3,
    name: 'Tech Channel',
    message: 'New features announced for React 19',
    time: 'Yesterday',
    unread: 0,
    online: false,
    avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop'
  }
];

export default function ChatList() {
  return (
    <div className="w-80 glass border-r border-white/10 text-white backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/50 " />
          <input
            type="search"
            placeholder="Search chats..."
            className="w-full pl-10 pr-4 py-2 glass focus:outline-none rounded-xl focus:ring-2 focus:ring-emerald-500/50 placeholder-white/50"
          />
        </div>
      </div>
      
      <div className="overflow-y-auto h-[calc(80vh-5rem)]">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 p-4 glass-hover cursor-pointer transition-all duration-200"
          >
            <div className="relative">
              <img
                src={chat.avatar}
                alt={chat.name}
                className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
              />
              {chat.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-black" />
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-baseline">
                <h3 className="font-medium truncate">{chat.name}</h3>
                <span className="text-xs text-white/70 flex-shrink-0">{chat.time}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <p className="text-sm text-gray-400/60 truncate">{chat.message}</p>
                {chat.unread > 0 ? (
                  <span className="ml-2 bg-emerald-500/80 backdrop-blur-lg text-white text-xs rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">
                    {chat.unread}
                  </span>
                ) : (
                  <Check className="w-4 h-4 text-emerald-500" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}