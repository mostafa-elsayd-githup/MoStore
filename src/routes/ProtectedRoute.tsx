import { Navigate, Outlet, useLocation, useMatches } from "react-router";
import type { RouteHandle } from "../types/RouterTypes/Router";

export default function ProtectedRoute() {
  const matches = useMatches();
  const location = useLocation();
  const isProtected = matches.some((match) => {
    const handle = match.handle as RouteHandle;
    return handle?.requiresAuth === true;
  });
  const token = localStorage.getItem("sb-access-token");
  const isAuthenticated = !!token;

  if (isProtected && !isAuthenticated) {
    return <Navigate to="/register" state={{ from: location }} replace />;
  }
  return <Outlet />;
}
