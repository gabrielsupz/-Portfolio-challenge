import React from 'react'
import ReactDOM from 'react-dom/client'
import Aside from './aside'
import Main from './main'
import './styles/index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Aside />
    <Main />
  </React.StrictMode>
)
