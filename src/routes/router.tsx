import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { AppLayout } from '@/pages/_layouts/app'
import { AuthLayout } from '@/pages/_layouts/auth'
import { Dashboard } from '@/pages/app/dashboard'
import { SignIn } from '@/pages/auth/sign-in'

export function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
      ],
    },
    {
      path: '/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'sign-in',
          element: <SignIn />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
