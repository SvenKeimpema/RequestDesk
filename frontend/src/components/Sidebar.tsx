import { NavLink } from "react-router-dom";
import { appRoutes } from "../routes/Routes";

export default function SideBar({ IsAdmin }: { IsAdmin: boolean }) {
  return (
    <div className="h-screen w-64 border-r border-[#d4d6cf] bg-[#f7f8f2] px-4 py-6">
      <nav className="flex flex-col gap-1">
        {appRoutes
          .filter((r) => r.label)
          .filter((r) => !r.requiresAdmin || IsAdmin)
          .map((route) => (
            <NavLink
              className="rounded-md px-3 py-2 text-sm font-medium text-black transition
            hover:bg-gray-400
            [&.active]:bg-gray-200"
              key={route.path}
              to={route.path}
            >
              {route.label}
            </NavLink>
          ))}
      </nav>
    </div>
  );
}
