import React from 'react';
import Sidebar from './COMPONENTS/01.Sidebar/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskBoard from './COMPONENTS/02.TaskList/TaskBoard';
import PerformanceDashboard from './COMPONENTS/04.Performance/PerformanceDashboard';
import Signup from './COMPONENTS/Auth/signup';
import Signin from './COMPONENTS/Auth/signin';
import UserNavbar from './COMPONENTS/User/01.UserNavBar/UserNavbar';
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
    ],
  },
  {
    path: '/user', element: <UserNavbar />
  },
  {
    path: '/signup', element: <Signup />
  },
  {
    path: '/signin', element: <Signin />
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
