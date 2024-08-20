import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

export default function MainLayouts() {
  return (
    <>
      <div>
      
          <h1>Store Books</h1>
        
        <SideBar />
        <Outlet />
      </div>
    </>
  );
}
