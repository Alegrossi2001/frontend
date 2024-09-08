import React from 'react';
import Sidebar from './COMPONENTS/01.Sidebar/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserProfile from './COMPONENTS/999.UserRouter/UserRouter';
import TaskBoard from './COMPONENTS/02.TaskList/TaskBoard';
import PerformanceDashboard from './COMPONENTS/04.Performance/PerformanceDashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Sidebar />,
    children: [
      {
        path: '/Tasks', element: <TaskBoard />
      },
      {
        path: '/Performance', element: <PerformanceDashboard />
      },
    ]
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
