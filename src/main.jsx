import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BlurContextProvider} from "./context/blurcontext"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BlurContextProvider>
    <App />
    </BlurContextProvider>
  </React.StrictMode>
)
