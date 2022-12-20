import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider } from '@mui/system'
import { createTheme } from '@mui/material'
// import reportWebVitals from './reportWebVitals';

const theme = createTheme({})

const container = document.getElementById('root')
const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
