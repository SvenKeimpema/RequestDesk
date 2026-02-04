import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Home from "../pages/Home";

export type AppRoute = {
  path: string;
  element: React.ReactNode;
  label?: string;
  requiresAdmin?: boolean;
  hideFromNav?: boolean;
};

export const appRoutes: AppRoute[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    label: "Dashboard",
  },
  {
    path: "/employees",
    element: <Employees />,
    label: "Employees",
  },
];
