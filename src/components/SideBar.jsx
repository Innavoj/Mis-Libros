import { NavLink } from "react-router-dom";

export default function SideBar() {
  return (
    <>
      <div id="sidebar">
        <nav>
          <NavLink to="/AddBooks">Add Libros</NavLink>

          <NavLink to="/EditBooks">Edit Libros</NavLink>

          <NavLink to="/DelBooks">Eliminar Libros</NavLink>
        </nav>
      </div>
    </>
  );
}
