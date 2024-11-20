// src/routes/routes.tsx
import { RouteObject } from "react-router-dom";
import {ProtectedRoute, PublicRoute} from "../guards/auth.guard";
import Login from "@/pages/Auth/Login";
import Home from "@/pages/Home";
// import Dashboard from "@/pages/Auth/Dashboard";
// import Chat from "@/pages/Auth/Chat";
// Import other components as needed

const routes: RouteObject[] = [
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  // {
  //   path: "/chat",
  //   element: (
  //     <ProtectedRoute>
  //       <Chat />
  //     </ProtectedRoute>
  //   ),
  // },
  {
    path: "/login",
    element:<PublicRoute><Login /></PublicRoute>,
  },
  // Add more routes as needed
];

export default routes;