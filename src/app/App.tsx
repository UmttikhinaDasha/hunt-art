
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import {MainPage, UserPage, ErrorPage, MessangerPage} from './components/pages';
import {loader as artsLoader} from './components/pages/MainPage';
import {loader as userLoader} from './components/pages/UserPage';

import "./App.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage/>,
    errorElement: <ErrorPage/>,
    loader: artsLoader,
  },
  {
    path: "users/:userId",
    element: <UserPage />,
    errorElement: <ErrorPage/>,
    loader: userLoader,
  },
  {
    path: "messanger",
    element: <MessangerPage />,
    errorElement: <ErrorPage/>,
  },
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
