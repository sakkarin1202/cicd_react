import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import router from './routers/Router.jsx';
import { RouterProvider } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>

          <RouterProvider router={router} />

  </StrictMode>
)
