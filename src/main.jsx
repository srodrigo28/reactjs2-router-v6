import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Cursos} from "./pages/Cursos"
import {Home} from "./pages/Home"
import { Treinamentos } from './pages/Treinamentos'

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Error } from './pages/Error/index.jsx'

/* Exemplo 1 
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "cursos", element: <Cursos /> },
  { path: "treinamentos", element: <Treinamentos /> },
])
*/

const router = createBrowserRouter([
  { 
    path: "/", element: <App />,
    errorElement: <Error />,
    children:[
      { path: "Home", element: <Home /> },
      { path: "cursos", element: <Cursos /> },
      { path: "treinamentos", element: <Treinamentos /> },
    ]
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
