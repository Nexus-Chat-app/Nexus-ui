import { UserCheck, UserX } from "lucide-react";


const friendRequests = [
    {
      id: 4,
      name: "Lucas Martinez",
      mutualFriends: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Lucas Martinez",
      mutualFriends: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Lucas Martinez",
      mutualFriends: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Lucas Martinez",
      mutualFriends: 5,
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
  ];
export function FriendRequest() {
    return (
       <>
            {friendRequests.length > 0 && (
            <div className="flex-1 row-span-2 overflow-y-auto h-full items-center justify-center glass backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60  p-6 border-b text-white border-white/10 ">
              <h2 className="text-lg font-medium mb-4">Friend Requests</h2>
              <div className="space-y-3">
                  {friendRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-center justify-between glass rounded-xl p-4 "
                    >
                      <div className="flex items-center gap-3 ">
                        <img
                          src={request.avatar}
                          alt={request.name}
                          className="w-12 h-12 rounded-full object-cover ring-2 ring-white/20"
                        />
                        <div>
                          <h3 className="font-medium">{request.name}</h3>
                          <p className="text-sm text-white/70">
                            {request.mutualFriends} mutual friends
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="p-2 hover:bg-blue-500/80 backdrop-blur-lg rounded-xl  transition-colors">
                          <UserCheck className="w-5 h-5" />
                        </button>
                        <button className="p-2 glass-hover hover:bg-red-500/80 rounded-xl transition-colors">
                          <UserX className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          )}
       </>
    );
}