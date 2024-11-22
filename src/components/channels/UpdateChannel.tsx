import React, { useState, useEffect } from "react";
import axiosInstance from "../../services/api/axiosInstance";

interface UpdateChannelProps {
    channel: {
        _id: string;
        name: string;
        img: string;
        isPublic: string;
    };
    setShowUpdateChannel: React.Dispatch<React.SetStateAction<boolean>>;
    onUpdateSuccess: () => void;
}

const UpdateChannel: React.FC<UpdateChannelProps> = ({
    channel,
    setShowUpdateChannel,
    onUpdateSuccess,
}) => {
    const [formData, setFormData] = useState({
        name: channel.name || "",
        img: null as File | null,
        owner: "64b7d74889a8f0e123456789",
        isPublic: channel.isPublic || "true",
    });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setFormData({
            name: channel.name,
            img: null,
            owner: "64b7d74889a8f0e123456789",
            isPublic: channel.isPublic,
        });
    }, [channel]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files ? e.target.files[0] : null;
        setFormData((prev) => ({
            ...prev,
            img: file,
        }));
    };

    const handlePublicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setFormData((prev) => ({
            ...prev,
            isPublic: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        const form = new FormData();
        form.append("name", formData.name);
        form.append("isPublic", formData.isPublic);
        if (formData.img) form.append("file", formData.img);

        try {
            const response = await axiosInstance.patch(`/channels/update/${channel._id}`, form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            if (response.status === 200) {
                onUpdateSuccess();
                setShowUpdateChannel(false);
            }
        } catch (err: any) {
            console.error("Error details:", err);

            if (err.response) {
                setError(`Error ${err.response.status}: ${err.response.data.message || err.response.data.error || "An error occurred."}`);
            } else if (err.request) {
                setError("No response from server. Please check if the backend is running.");
            } else {
                setError(`Unexpected error: ${err.message}`);
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-white/60 dark:bg-gray-900/60 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Update Channel</h2>
            {error && <div className="text-red-500 mb-4">{error}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-sm font-medium">Channel Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full p-2 mt-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Channel Image</label>
                    <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        className="w-full p-2 mt-2 border border-gray-300 dark:border-gray-700 rounded-lg"
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium">Channel Visibility</label>
                    <div className="flex items-center space-x-6 mt-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="isPublic"
                                value="true"
                                checked={formData.isPublic === "true"}
                                onChange={handlePublicChange}
                                className="mr-2"
                            />
                            Public
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="isPublic"
                                value="false"
                                checked={formData.isPublic === "false"}
                                onChange={handlePublicChange}
                                className="mr-2"
                            />
                            Private
                        </label>
                    </div>
                </div>

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600"
                >
                    {loading ? "Updating..." : "Update Channel"}
                </button>
            </form>

            <button
                onClick={() => setShowUpdateChannel(false)}
                className="mt-4 text-gray-500 hover:text-gray-700"
            >
                Cancel
            </button>
        </div>
    );
};

export default UpdateChannel;
