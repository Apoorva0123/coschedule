import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BlurContextProvider} from "./context/blurcontext"
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlurContextProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </BlurContextProvider>
  </React.StrictMode>
)
