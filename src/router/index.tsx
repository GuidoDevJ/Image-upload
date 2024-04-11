import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Index";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
}

export default Routes;

