import { Phone, Video, MoreVertical, Smile, Paperclip, Send } from 'lucide-react';

export default function ChatArea() {
  return (
    <div className="flex flex-col w-full ">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-3 glass border-b rounded-tr-xl border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Alice Johnson"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
          />
          <div>
            <h2 className="font-medium text-black dark:text-white">Alice Johnson</h2>
            <p className="text-sm dark:text-white/70 text-gray-900/70">Online</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 text-black dark:text-white">
          <button className="p-2 glass-hover rounded-full transition-colors">
            <Phone className="w-5 h-5 stroke-current" />
          </button>
          <button className="p-2 glass-hover rounded-full transition-colors">
            <Video className="w-5 h-5 stroke-current" />
          </button>
          <button className="p-2 glass-hover rounded-full transition-colors">
            <MoreVertical className="w-5 h-5 stroke-current" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 glass">
        <div className="flex justify-start">
          <div className="bg-gray-300 dark:bg-gray-700 dark:text-white rounded-xl px-4 py-2 max-w-[70%]">
            <p>Hey! How are you doing?</p>
            <span className="text-xs dark:text-white/70 text-gray-700/70 mt-1">10:30 AM</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <div className="bg-blue-300/80 dark:bg-red-700/80 text-black dark:text-white backdrop-blur-lg rounded-xl px-4 py-2 max-w-[70%]">
            <p>Hi! I'm good, thanks! How about you?</p>
            <span className="text-xs dark:text-white/70 text-gray-700/70 mt-1">10:31 AM</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 glass border-t border-white/10 rounded-br-xl">
        <div className="flex items-center gap-3">
          <button className="p-2 glass-hover rounded-full transition-colors">
            <Smile className="w-6 h-6" />
          </button>
          <button className="p-2 glass-hover rounded-full transition-colors">
            <Paperclip className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 glass rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder-white/50"
          />
          <button className="bg-blue-300/80 dark:bg-red-700/80 backdrop-blur-lg p-2 rounded-full hover:bg-blue-600/80 dark:hover:bg-red-600/80 transition-colors text-black dark:text-white flex items-center justify-center">
            <Send className="w-5 h-5 stroke-current" />
          </button>
        </div>
      </div>
    </div>
  );
}