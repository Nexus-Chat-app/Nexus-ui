import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import Layout from "./layouts/clientLayout";
import routes from "./routes/routes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

function AppRoutes() {
  const element = useRoutes(routes);
  return element;
}

function App() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
  return (
    <>
      <div
        className={`${
          isDark ? "dark" : ""
        } bg-gradient-radial`}
      >
        <button
          onClick={() => setIsDark(!isDark)}
          className="fixed top-4 right-4 z-50 p-2 rounded-full glass"
        >
          {isDark ? (
            <Sun className="w-5 h-5 text-white" />
          ) : (
            <Moon className="w-5 h-5 text-white" />
          )}
        </button>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </div>
    </>
  );
}

export default App;
