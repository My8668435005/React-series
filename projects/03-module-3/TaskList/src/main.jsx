import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import TaskContainer from './TaskContainer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskContainer />
  </StrictMode>,
)
