import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Error404Pages from "../pages/Error404Pages";
import AddBooksPages from "../pages/AddBooks";
import EditBooksPages from "../pages/EditBooks";
import DelBooksPages from "../pages/DelBooks";
import MisBooksPages from "../pages/MisBooks";
import DashBoardPages from "../pages/DashBoard";
import InventarioPages from "../pages/Inventario";
import ProductosPages from "../pages/Productos";
import ContactosPages from "../pages/Contactos";
import AboutPages from "../pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    errorElement: <Error404Pages />,
    children: [
      { path: "/", element: <DashBoardPages /> },
      { path: "/misbooks", element: <MisBooksPages /> },
      { path: "/addbooks", element: <AddBooksPages /> },
      { path: "/editbooks", element: <EditBooksPages /> },
      { path: "/delbooks", element: <DelBooksPages /> },
      { path: "/inventario", element: <InventarioPages /> },
      { path: "/productos", element: <ProductosPages /> },
      { path: "/contactos", element: <ContactosPages /> },
      { path: "/about", element: <AboutPages /> },
    ],
  },
]);

export default function MyRoutes() {
  return <RouterProvider router={router} />;
}
