import { Search, UserPlus } from "lucide-react";

export function Header() {
  return (
    <div className="p-3 row-span-1 md:p-6 glass backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-t-xl md:rounded-tr-xl md:rounded-tl-none border-b border-white/10 ">
      <div className="flex items-center justify-between mb-2 md:mb-6">
        <h1 className="md:text-4xl text-2xl text-white font-macondo font-semibold">
          Friends
        </h1>
        <button className="flex items-center gap-2 bg-blue-300/80 font-bold rounded-full md:rounded-xl text-black dark:text-white dark:bg-red-800/80 backdrop-blur-lg px-2 md:px-4 py-2  hover:bg-emerald-600/80 transition-colors">
          <UserPlus className="w-5 h-5" />
          <span className="hidden md:block">Add Friend</span>
        </button>
      </div>
      <div className="relative">
        <Search className="absolute left-3 z-50 top-2.5 w-5 h-5 text-white/50" />
        <input
          type="search"
          placeholder="Search friends..."
          className="w-full pl-10 pr-4 py-2 glass rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500/50 placeholder-white/50"
        />
      </div>
    </div>
  );
}
