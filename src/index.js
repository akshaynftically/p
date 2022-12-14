import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import { CookiesProvider } from 'react-cookie';

import reportWebVitals from 'reportWebVitals'

// Styles
import 'assets/css/index.css'
import 'react-toastify/dist/ReactToastify.css'

// Store
import store from 'app/store'

// Components
import App from 'App'

const {PUBLIC_URL} = process.env.PUBLIC_URL

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter basename={PUBLIC_URL}>
        <App />
      </BrowserRouter>
    </Provider>
  </CookiesProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
