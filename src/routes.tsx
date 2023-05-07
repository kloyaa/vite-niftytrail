import { createBrowserRouter } from "react-router-dom"

export const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <h1>Hello World</h1>
        </div>
      ),
    },
    {
      path: "/u/login",
      element: <div>Login</div>,
    },
    {
      path: "/u/register",
      element: <div>Register</div>,
    },
]);
  