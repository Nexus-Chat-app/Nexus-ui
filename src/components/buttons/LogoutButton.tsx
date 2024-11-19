import { Button } from "../ui/button";

export default function LogoutButton() {
    return (
        <>
        <Button className="m-2 p-0 bg-white/40 rounded-full w-9 h-9 dark:bg-gray-700/40 hover:bg-white/60 dark:hover:bg-gray-600/60 ">
            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2" />
            </svg>
        </Button>
        </>
    )
}