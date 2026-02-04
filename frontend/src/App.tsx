import { Route, Routes } from "react-router-dom";
import { appRoutes } from "./routes/Routes";
import { RequireAdmin } from "./routes/RequireAdmin";

export default function App() {
  // TODO: we can only implement this part properly when login/register has been implemented
  const isAdmin = false;

  return (
    <Routes>
      {appRoutes.map((route) => {
        const element = route.requiresAdmin ? (
          <RequireAdmin isAdmin={isAdmin}>{route.element}</RequireAdmin>
        ) : (
          route.element
        );

        return <Route key={route.path} path={route.path} element={element} />;
      })}
    </Routes>
  );
}
