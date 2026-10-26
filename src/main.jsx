import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// TODO: Import ThemeProvider and ProjectsProvider from context files
import { ThemeProvider } from './context/ThemeContext.jsx'
import { ProjectsProvider } from './context/ProjectsContext.jsx'
// TODO: Wrap App with both providers

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* TODO: Add ThemeProvider wrapper */}
    <ThemeProvider>
      <ProjectsProvider>
        {/* TODO: Add ProjectsProvider wrapper */}
        <App />
      </ProjectsProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
