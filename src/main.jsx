import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store.js'
import { SocketProvider } from './context/SocketProvider.jsx'
import { TokenProvider } from './context/TokenProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(

    <Provider store={store}>
        <SocketProvider>
            <TokenProvider>
            <App />
            </TokenProvider>
        
        </SocketProvider>
   
    </Provider>
  

)
