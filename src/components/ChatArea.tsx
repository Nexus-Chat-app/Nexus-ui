import { Phone, Video, MoreVertical, Smile, Paperclip, Send } from 'lucide-react';

export default function ChatArea() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Chat Header */}
      <div className="flex items-center justify-between px-6 py-3 glass border-b border-white/10">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
            alt="Alice Johnson"
            className="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"
          />
          <div>
            <h2 className="font-medium">Alice Johnson</h2>
            <p className="text-sm text-white/70">Online</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="p-2 glass-hover rounded-full transition-colors">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 glass-hover rounded-full transition-colors">
            <Video className="w-5 h-5" />
          </button>
          <button className="p-2 glass-hover rounded-full transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        <div className="flex justify-start">
          <div className="glass rounded-lg rounded-tl-none px-4 py-2 max-w-[70%]">
            <p>Hey! How are you doing?</p>
            <span className="text-xs text-white/70 mt-1">10:30 AM</span>
          </div>
        </div>
        
        <div className="flex justify-end">
          <div className="bg-emerald-500/80 backdrop-blur-lg rounded-lg rounded-tr-none px-4 py-2 max-w-[70%]">
            <p>Hi! I'm good, thanks! How about you?</p>
            <span className="text-xs text-white/70 mt-1">10:31 AM</span>
          </div>
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 glass border-t border-white/10">
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
          <button className="bg-emerald-500/80 backdrop-blur-lg p-2 rounded-lg hover:bg-emerald-600/80 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}