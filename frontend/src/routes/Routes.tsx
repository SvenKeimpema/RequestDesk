import { MdDashboard, MdPeople } from "react-icons/md";
import type { IconType } from "react-icons";
import Dashboard from "../pages/Dashboard";
import Employees from "../pages/Employees";
import Home from "../pages/Home";

export type AppRoute = {
  path: string;
  element: React.ReactNode;
  label?: string;
  requiresAdmin?: boolean;
  hideFromNav?: boolean;
  icon?: IconType;
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
    icon: MdDashboard,
  },
  {
    path: "/employees",
    element: <Employees />,
    label: "Employees",
    icon: MdPeople,
  },
];
