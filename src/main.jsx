import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppStoreLayout from './AppStoreLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppStoreLayout />
  </StrictMode>,
)
