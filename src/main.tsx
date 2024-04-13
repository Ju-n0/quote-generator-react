import ReactDOM from 'react-dom/client'
import React from 'react'

import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import App from './components/App/App'
import './styles/index.scss'




ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
