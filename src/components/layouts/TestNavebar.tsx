import { useState } from "react";
import { useEffect } from "react";
import ChatButton from "../buttons/ChatButton";
import FriendButton from "../buttons/FriendButton";
import LogoutButton from "../buttons/LogoutButton";
import ProfileButton from "../buttons/ProfileButton";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { Button } from "../ui/button";
// import { GlassModal } from "../modals/GlassModal";



export default function TestNavebar() {
    const [darkMode, setDarkMode] = useState(false)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
    return (
        <>
            <div className="fixed top-0 left-0 right-0 flex justify-around mt-5 bg-white/30 backdrop-blur-md border border-gray-200 rounded-full shadow-lg w-3/4 mx-auto">
                <div>
                    <ProfileButton />
                    <ChatButton />
                    <FriendButton />
                </div>
                <div>
                    <LogoutButton />
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setDarkMode(!darkMode)}
                        className=" w-8 h-8 rounded-full bg-white/40 dark:bg-gray-700/40 text-gray-800 dark:text-white hover:bg-white/60 dark:hover:bg-gray-600/60 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-600 transition-all duration-300 ease-in-out backdrop-blur-md"
                    >
                        {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
                        <span className="sr-only">{darkMode ? 'Switch to light mode' : 'Switch to dark mode'}</span>
                    </Button>
                </div>
            </div>
        </>
    )
}