import { Link } from "react-router-dom";
import LoginForm from "@/components/auth/LoginForm";

export default function Login() {
  return (
    <div className="h-full flex items-center justify-center glass backdrop-filter backdrop-blur-xl bg-white/60 dark:bg-gray-900/60 border border-gray-200 dark:border-gray-700 rounded-t-xl md:rounded-r-xl md:rounded-tl-none">
      <div className="w-full max-w-md space-y-8 p-8 rounded-t-xl md:rounded-xl shadow-lg sm:max-w-[425px] md:max-w-screen-md md:mx-auto backdrop-filter backdrop-blur-xl !bg-blue-500/60 dark:!bg-red-900/40 border border-blue-200 dark:border-red-700 glass">
        <div className="text-center">
          <h2 className="mt-6 text-3xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white font-titles">
            Welcome To Nexus
          </h2>
          <p className="mt-2 text-sm md:text-lg lg:text-xl text-gray-800 font-macondo dark:text-gray-400">
            Where every chat sparks a new adventure.
          </p>
        </div>
        <LoginForm />
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-sm text-gray-400 font-medium hover:text-primary-dark dark:text-primary-light dark:hover:text-primary transition-colors"
          >
            Forgot your password?
          </Link>
        </div>
        <div className="mt-4 text-center">
          <span className="text-sm text-gray-400">Don't have an account? </span>
          <Link
            to="/register"
            className="text-sm font-medium text-white hover:text-primary-dark dark:text-primary-light dark:hover:text-primary transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
