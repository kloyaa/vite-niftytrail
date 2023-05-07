import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/auth/login.page';

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <h1>Hello World</h1>
      </div>
    ),
  },
  {
    path: '/u/login',
    element: <Login />,
  },
  {
    path: '/u/register',
    element: <div>Register</div>,
  },
]);
