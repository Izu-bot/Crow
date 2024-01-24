import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './assets/routes/Home'
import Roupas from './assets/routes/Roupas'
import RoupasID from './assets/routes/RoupasID'
import Conta from './assets/routes/Conta'
import CriarConta from './assets/routes/CriarConta'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "roupas",
        element: <Roupas />,
      },
      {
        path: "roupas/:id",
        element: <RoupasID />,
      },
      {
        path: "conta",
        element: <Conta />,
      },
      {
        path: "conta/criarConta",
        element: <CriarConta />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
