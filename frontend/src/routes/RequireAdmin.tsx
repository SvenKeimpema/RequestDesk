import { Navigate } from "react-router-dom";

type RequireAdminProps = {
  isAdmin: boolean;
  children: React.ReactNode;
};

export function RequireAdmin({ isAdmin, children }: RequireAdminProps) {
  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return <> {children} </>;
}
