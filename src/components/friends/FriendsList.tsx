import { RootState } from "@/store/store";
import { MoreVertical } from "lucide-react";
import { useSelector } from "react-redux";

// const friendsIds = useSelector((state: RootState) => state.user.friends);
;

const friends = [
  {
    id: 1,
    name: "Emma Wilson",
    status: "Playing Valorant",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    online: true,
  },
  {
    id: 2,
    name: "James Rodriguez",
    status: "Last seen 2h ago",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    online: false,
  },
  {
    id: 3,
    name: "Sophia Chen",
    status: "Online",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    online: true,
  },
  {
    id: 3,
    name: "Sophia Chen",
    status: "Online",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    online: true,
  },
  {
    id: 3,
    name: "Sophia Chen",
    status: "Online",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    online: true,
  },
  {
    id: 3,
    name: "Sophia Chen",
    status: "Online",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    online: true,
  },
];


export function FriendsList() {
  return (
    <div className="flex flex-col h-1/2">
      <div className="overflow-y-auto items-center justify-center glass backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 ">
        <div className="p-6 text-white">
          <h2 className="text-lg font-medium mb-4">All Friends</h2>
          <div className="space-y-3">
            {friends.map((friend) => (
              <div
                key={friend.id}
                className="flex items-center justify-between glass rounded-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={friend.avatar}
                      alt={friend.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                    />
                    {friend.online && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full ring-2 ring-black" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium">{friend.name}</h3>
                    <p className="text-sm text-white/70">{friend.status}</p>
                  </div>
                </div>
                <button className="p-2 glass-hover rounded-full transition-colors">
                  <MoreVertical className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
