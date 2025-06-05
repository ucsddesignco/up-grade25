import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App';
import { createBrowserRouter, RouterProvider, ScrollRestoration, Outlet } from 'react-router';
import RolesPage from './pages/RolesPage/RolesPage.tsx';
import Quiz from './pages/Quiz/Quiz.tsx';
import Result from './pages/ResultPage/Result.tsx';
import Overview from './pages/Overview/Overview.tsx';
import Navbar from './components/Navbar/Navbar.tsx';
import FAQPage from './pages/FAQpage/FAQpage.tsx';

// eslint-disable-next-line react-refresh/only-export-components
function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <App />
      },
      {
        path: 'overview',
        element: <Overview />
      },
      {
        path: 'quiz',
        element: <Quiz />
      },
      {
        path: 'faq',
        element: <FAQPage />
      },
      {
        path: 'roles',
        element: <RolesPage />
      },
      {
        path: 'result',
        element: <Result />
      },
      {
        path: 'roles/:roleId',
        element: <Result />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
