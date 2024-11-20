import { Header } from "@/components/friends/Header";
import "../App.css";
import { FriendRequest } from "@/components/friends/FriendsRequest";
import { FriendsList } from "@/components/friends/FriendsList";
function Friends() {

  return (
    <>
      <div className="flex flex-col h-full max-h-screen w-full overflow-y-auto">
            <Header/>
            <FriendRequest/>
            <FriendsList/>
      </div>
    </>
  );
}
export default Friends;
