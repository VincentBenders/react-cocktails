import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from "react-router";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Cocktails from "./Cocktails.jsx";
import Cocktail from "./Cocktail.jsx";


function App() {
    const router = createBrowserRouter([{
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/cocktails',
                element:<Cocktails/>,
            },
            {
                path:'/cocktails/create',
                element:'create component'
            },
            {
                path:'/cocktails/:id',
                element:<Cocktail />
            },
            {
                path:'/cocktails/:id/edit',
                element:'edit component'
            },
            {
                path:'',
                element:''
            }

        ]
    }
])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}

export default App
