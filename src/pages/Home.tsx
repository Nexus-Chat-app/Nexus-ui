import "../App.css";
import ChatList from "@/components/chat/ChatList";
import ChatArea from "@/components/chat/ChatArea";
function Home() {

  return (
    <>
      <div className="flex h-full w-full">
        <ChatList/>
        <ChatArea/>
      </div>
    </>
  );
}
export default Home;
