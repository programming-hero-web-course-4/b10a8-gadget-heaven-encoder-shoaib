import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Gadgets from './components/Gadgets/Gadgets';
import GadgetDetail from './components/GadgetDetail/GadgetDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,

    children: [
      {
        path: "/",
        element:<Gadgets></Gadgets>
      },
      {
        path:"/product/:product_id",
        element: <GadgetDetail></GadgetDetail>,
        loader:()=>fetch('/gadgets.json'),
      },
    ],
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
