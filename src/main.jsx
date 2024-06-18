import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NextUIProvider} from "@nextui-org/react";
import './FiveAccordions.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  
  <div className='App'>
  <React.StrictMode >
    <NextUIProvider >

      <App />
    </NextUIProvider>
  </React.StrictMode>,
  </div>
)
