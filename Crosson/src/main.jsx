import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import App from './App'
import Home from './pages/Home'
import Product from './pages/product'
import Service from './pages/service'
import ContactUs from './components/Contact-us/contact-us'

const router = createBrowserRouter([
  {path:"/",element: <App />,
  children:[
  {path: "/",element: <Home />},
  {path: "/Product",element: <Product />},
  {path: "/Service",element: <Service/>},
  {path:"/contact",element:<ContactUs/>}
  ],
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider  router={router}/>
  </React.StrictMode>,
)
