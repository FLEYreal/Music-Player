import React from 'react'
import ReactDOM from 'react-dom/client'
import { Demo } from './feature/demo/index.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>,
)
