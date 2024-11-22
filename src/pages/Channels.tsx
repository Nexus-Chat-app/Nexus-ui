import ChannelList from "@/components/channels/ChannelList";
import "../App.css";
import ChannelMessage from "@/components/channels/ChannelMessage";
function Channels() {

  return (
    <>   
      <div className="flex h-full max-h-screen w-full overflow-y-auto">
            <ChannelList/>
            <ChannelMessage />
      </div>
    </>
  );
}
export default Channels;
