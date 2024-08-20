import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayouts from '../layouts/MainLayouts';
import Error404Pages from "../pages/Error404Pages";
import AddBooksPages from "../pages/AddBooks";
import EditBooksPages from "../pages/EditBooks";
import DelBooksPages from "../pages/DelBooks";

const router = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayouts />,
        errorElement: <Error404Pages />,
        children: [
            { path: "/addbooks", element: <AddBooksPages />, errorElement: <Error404Pages />},
            { path: "/editbooks", element: <EditBooksPages />, errorElement: <Error404Pages />},
            { path: "/delbooks", element: <DelBooksPages />, errorElement: <Error404Pages />}
        ]
    },
])


export default function MyRoutes() {
    return <RouterProvider router={router} />
  }
