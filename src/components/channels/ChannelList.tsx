import React, { useEffect, useState } from "react";
import { PlusCircle, Search, MoreVertical, Edit2, Trash } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../services/api/axiosInstance";
import CreateChannel from "./CreateChannel"; // Import the CreateChannel component
import UpdateChannel from "./UpdateChannel"; // Import the UpdateChannel component

export default function ChannelList() {
  const [channels, setChannels] = useState<any[]>([]);
  const [showCreateChannel, setShowCreateChannel] = useState(false);
  const [showUpdateChannel, setShowUpdateChannel] = useState(false); // State for UpdateChannel
  const [selectedChannel, setSelectedChannel] = useState<any>(null); // State to hold the channel being updated

  useEffect(() => {
    const fetchChannels = async () => {
      try {
        const response = await axiosInstance.get("/channels");
        setChannels(response.data);
      } catch (error) {
        console.error("Failed to fetch channels", error);
      }
    };

    fetchChannels();
  }, []);

  const handleCreateChannelClick = () => {
    setShowCreateChannel(true);
  };

  const handleDeleteChannel = async (channelId: string) => {
    try {
      await axiosInstance.delete(`/channels/delete/${channelId}`);
      setChannels((prevChannels) =>
        prevChannels.filter((channel) => channel._id !== channelId)
      );
      toast.success("Channel deleted successfully!");
    } catch (error) {
      console.error("Failed to delete channel", error);
      toast.error("An error occurred while deleting the channel.");
    }
  };

  const confirmDelete = (channelId: string) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to delete this channel?</p>
          <div className="flex justify-end gap-2 mt-3">
            <button
              className="px-3 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
              onClick={() => {
                handleDeleteChannel(channelId);
                closeToast();
              }}
            >
              Delete
            </button>
            <button
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
              onClick={closeToast}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      { autoClose: false, closeOnClick: false }
    );
  };

  const handleUpdateChannelClick = (channel: any) => {
    setSelectedChannel(channel); // Set the channel to be updated
    setShowUpdateChannel(true);
  };

  const handleUpdateSuccess = () => {
    // Refresh the channels list after a successful update
    axiosInstance.get("/channels").then((response) => {
      setChannels(response.data);
    });
    toast.success("Channel updated successfully!");
  };

  return (
    <div className="flex flex-col w-full h-full">
      <ToastContainer />

      <div className="flex items-center justify-between px-6 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-filter backdrop-blur-xl border-b border-gray-200 dark:border-gray-700 rounded-t-xl">
        <h1 className="text-lg font-semibold text-gray-800 dark:text-white">Channels</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCreateChannelClick}
            className="p-2 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition"
          >
            <PlusCircle className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="p-4 border-b border-gray-200 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
          <Search className="w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search channels..."
            className="w-full bg-transparent focus:outline-none text-gray-700 dark:text-white"
          />
        </div>
      </div>

      {showCreateChannel ? (
        <CreateChannel setShowCreateChannel={setShowCreateChannel} />
      ) : showUpdateChannel && selectedChannel ? (
        <UpdateChannel
          channel={selectedChannel}
          setShowUpdateChannel={setShowUpdateChannel}
          onUpdateSuccess={handleUpdateSuccess}
        />
      ) : (
        <div className="flex-1 overflow-y-auto bg-white/60 dark:bg-gray-900/60 px-4 py-6 space-y-4">
          {channels.map((channel) => (
            <div
              key={channel._id}
              className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={channel.img || "https://via.placeholder.com/50"}
                  alt="Channel Icon"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h2 className="text-lg font-medium text-gray-800 dark:text-white">
                    {channel.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {channel.membersCount} Members
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleUpdateChannelClick(channel)}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition"
                >
                  <Edit2 className="w-5 h-5 text-gray-600 dark:text-white" />
                </button>
                <button
                  onClick={() => confirmDelete(channel._id)}
                  className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-red-500 dark:hover:bg-red-600 transition"
                >
                  <Trash className="w-5 h-5 text-gray-600 dark:text-white" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="px-6 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-filter backdrop-blur-xl border-t border-gray-200 dark:border-gray-700 rounded-b-xl">
        <button
          onClick={handleCreateChannelClick}
          className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition"
        >
          Create New Channel
        </button>
      </div>
    </div>
  );
}
