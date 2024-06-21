import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import MainApp from './pages/MainApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>,
)
