import React from 'react';
import Sidebar from './COMPONENTS/01.Sidebar/Sidebar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TaskBoard from './COMPONENTS/02.TaskList/TaskBoard';
import PerformanceDashboard from './COMPONENTS/04.Performance/PerformanceDashboard';
import Signup from './COMPONENTS/Auth/signup';
import Signin from './COMPONENTS/Auth/signin';
import UserNavbar from './COMPONENTS/User/01.UserNavBar/UserNavbar';
import PageNotFound from './COMPONENTS/00.404Page/404Page';
import Calendar from './COMPONENTS/03.Calendar/Calendar';
import AccountNavbar from './COMPONENTS/User/02.AccountNavBar/AccountNavbar';
import UserInfo from './COMPONENTS/User/03.info/UserInfo';
import CommunicationLayout from './COMPONENTS/Communication/MainLayout';
import AuthGuard from './AuthGuard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthGuard><Sidebar /></AuthGuard>,
    errorElement: <PageNotFound />,
    children: [
      {
        path: '/Tasks', element: <TaskBoard />
      },
      {
        path: '/Performance', element: <PerformanceDashboard />
      },
      {
        path: '/Calendar', element: <Calendar />
      }
    ],
  },
  {
    path: '/user',
    element: <AuthGuard><UserNavbar /></AuthGuard>,
    children: [
      {
        path: 'account',
        element: <AccountNavbar />,
        children: [
          {
            path: 'info', element: <UserInfo />
          }
        ]
      }
    ]
  },
  {
    path: '/signup', element: <Signup />
  },
  {
    path: '/signin', element: <Signin />
  },
  {
    path: '/communicate', element: <AuthGuard><CommunicationLayout /></AuthGuard>,
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
