import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
import './styles/_globals.scss'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
