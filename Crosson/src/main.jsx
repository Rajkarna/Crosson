import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Product from './pages/product'
import Service from './pages/service'

const router = createBrowserRouter([
  {path:"/",element: <App />,
  children:[
  {path: "/",element: <Home />},
  {path: "/Product",element: <Product />},
  {path: "/Service",element: <Service/>}
  ],
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
