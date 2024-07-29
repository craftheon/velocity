import { createBrowserRouter } from "react-router-dom";
import HomePage from "./routes/home";


const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
]);

export default router
