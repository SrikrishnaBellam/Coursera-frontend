import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
import {BrowserRouter } from 'react-router-dom';
import AppWithRouter from './App.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppWithRouter/>
    </Provider>
  </React.StrictMode>,
)
