import SideBar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      {/* TODO: IsAdmin is for now always true. we can implement IsAdmin after the Login/Register system is done */}
      <SideBar IsAdmin={true} />
      Hello World
    </>
  );
}
