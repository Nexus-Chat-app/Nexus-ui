import { Search, Heart, UserPlus, MessageSquare, Star, Calendar, X } from 'lucide-react';
import { useState } from 'react';

type NotificationType = 'all' | 'messages' | 'reactions' | 'friends' | 'events';

interface Notification {
  id: number;
  type: 'reaction' | 'message' | 'friend' | 'event';
  title: string;
  description: string;
  time: string;
  avatar: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: 1,
    type: 'reaction',
    title: 'Emma Wilson',
    description: 'liked your message in "Gaming Squad"',
    time: '2 min ago',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    read: false
  },
  {
    id: 2,
    type: 'message',
    title: 'Tech Channel',
    description: '@you was messageed in the discussion',
    time: '1 hour ago',
    avatar: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=100&h=100&fit=crop',
    read: false
  },
  {
    id: 3,
    type: 'friend',
    title: 'James Rodriguez',
    description: 'accepted your friend request',
    time: '3 hours ago',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    read: true
  },
//   {
//     id: 4,
//     type: 'event',
//     title: 'Gaming Tournament',
//     description: 'Event starting in 30 minutes',
//     time: '30 min ago',
//     avatar: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=100&h=100&fit=crop',
//     read: false
//   }
];

const filterTabs: { type: NotificationType; label: string; icon: any }[] = [
  { type: 'all', label: 'All', icon: Star },
  { type: 'messages', label: 'messages', icon: MessageSquare },
//   { type: 'reactions', label: 'Reactions', icon: Heart },
  { type: 'friends', label: 'Friends', icon: UserPlus },
//   { type: 'events', label: 'Events', icon: Calendar }
];

export function Notifications() {
  const [activeFilter, setActiveFilter] = useState<NotificationType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredNotifications = notifications.filter(notification => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'messages') return notification.type === 'message';
    // if (activeFilter === 'reactions') return notification.type === 'reaction';
    if (activeFilter === 'friends') return notification.type === 'friend';
    // if (activeFilter === 'events') return notification.type === 'event';
    return true;
  }).filter(notification =>
    notification.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    notification.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'reaction': return Heart;
      case 'message': return MessageSquare;
      case 'friend': return UserPlus;
      default: return Star;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-full dark:text-white">
      <div className="p-6 glass border-b border-white/10 backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-t-xl md:rounded-tr-xl md:rounded-tl-none ">
        <div className="flex items-center justify-between mb-6">
          <h1 className=" text-2xl md:text-4xl font-semibold font-macondo">Notifications</h1>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
            Mark all as read
          </button>
        </div>
        <div className="relative mb-6">
          <Search className="absolute left-3 top-2.5 w-5 h-5 text-white/50 z-50" />
          <input
            type="search"
            placeholder="Search notifications..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 placeholder-white/50"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {filterTabs.map(({ type, label, icon: Icon }) => (
            <button
              key={type}
              onClick={() => setActiveFilter(type)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
                activeFilter === type
                  ? 'bg-blue-300/80 dark:bg-red-700/80 backdrop-blur-lg'
                  : 'glass-hover'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 glass backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-t-xl md:rounded-t-none md:rounded-br-xl border-b border-white/10 ">
        <div className="space-y-3">
          {filteredNotifications.map((notification) => {
            const NotificationIcon = getNotificationIcon(notification.type);
            return (
              <div
                key={notification.id}
                className={`flex items-start gap-4 p-4 rounded-xl ${
                  notification.read ? 'glass opacity-70' : 'glass'
                }`}
              >
                <img
                  src={notification.avatar}
                  alt=""
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium text-black dark:text-white">{notification.title}</h3>
                        <NotificationIcon className="w-4 h-4 text-blue-400" />
                      </div>
                      <p className="text-sm text-white/70">{notification.description}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/50">{notification.time}</span>
                      <button className="p-1 glass-hover rounded-lg transition-colors">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}