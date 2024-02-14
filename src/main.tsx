import React from 'react'
import ReactDOM from 'react-dom/client'
import { Showcase } from './feature/showcase/index.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Showcase />
  </React.StrictMode>,
)
