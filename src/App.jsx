import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home';
import Gigs from './pages/gigs';
import Gig from './pages/gig';
import Orders from './pages/orders';
import MyGigs from './pages/myGigs';
import Add from './pages/add';
import Messages from './pages/messages';
import Message from './pages/message';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
function App() {

  const Layout =() =>{
    return(
      <div>
        <Navbar />
        <Outlet />
        <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children:[
        {
          path: '/',
          element: <Home />
        },
         {
          path: '/gigs',
          element: <Gigs />
        },
         {
          path: '/gig/:id',
          element: <Gig />
        },
         {
          path: '/orders',
          element: <Orders />
        },
         {
          path: '/mygigs',
          element: <MyGigs />
        },
         {
          path: '/add',
          element: <Add />
        },
         {
          path: '/messages',
          element: <Messages />
        },
         {
          path: '/message/:id',
          element: <Message />
        },
      ]
    },]);


  const [count, setCount] = useState(0)

  return (
    <div>
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
