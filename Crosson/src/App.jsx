import React from "react";
import { createBrowserRouter,Outlet, Route, RouterProvider} from 'react-router-dom'
import "./typography/typography.scss";
import Header from "./components/Header/Header";
import "./App.scss";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home-page";
import Product from "./pages/product";
import Service from "./pages/service";

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {path:"/",element: <Layout />,
  children:[
  {path: "/",element: <Home />},
  {path: "/Product",element: <Product />},
  {path: "/Service",element: <Service/>}
  ],
}
]);

const App = () => {
  return <RouterProvider router={router}/>
};

export default App;
