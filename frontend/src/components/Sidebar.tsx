import { NavLink } from "react-router-dom";
import { appRoutes } from "../routes/Routes";

export default function SideBar({ IsAdmin }: { IsAdmin: boolean }) {
  return (
    <div className="h-screen w-64 border-r border-[#d4d6cf] bg-[#f7f8f2] px-4 py-6">
      <nav className="flex flex-col gap-1">
        {appRoutes
          .filter((r) => r.label)
          .filter((r) => !r.requiresAdmin || IsAdmin)
          .map((route) => {
            const Icon = route.icon;

            return (
              <NavLink
                className="flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium text-black transition hover:bg-gray-400 [&.active]:bg-gray-200"
                key={route.path}
                to={route.path}
              >
                {Icon && (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full transition in-[.active]:bg-blue-500 in-[.active_&]:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                )}
                {route.label}
              </NavLink>
            );
          })}
      </nav>
    </div>
  );
}
