import { Link } from "react-router-dom";
import RegisterForm from "@/components/auth/RegisterForm";

export default function Login() {
  return (
    <div className="h-full flex items-center justify-center glass backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none dark:text-white">
      <div className="w-full max-w-md space-y-8 p-8 rounded-t-xl md:rounded-xl  shadow-lg sm:max-w-[425px] md:max-w-screen-md md:mx-auto backdrop-filter backdrop-blur-xl bg-blue-500/60 dark:bg-red-900/40 border border-blue-200 dark:border-red-700 glass overflow-y-auto max-h-[80vh]">
        <div className="text-center">
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white font-titles">
            Get Started Now
          </h2>
          <p className="mt-2 text-sm md:text-lg lg:text-xl text-gray-800 font-macondo dark:text-gray-400">
          Join the Nexus community and start chatting today!
          </p>
        </div>
        <RegisterForm />
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-800 dark:text-gray-200">Already have an account ? </span>
          <Link
            to="/login"
            className="text-sm font-medium text-black dark:text-white hover:text-primary-dark dark:text-primary-light dark:hover:text-primary transition-colors"
          >
            Login Now
          </Link>
        </div>
      </div>
    </div>
  );
}
