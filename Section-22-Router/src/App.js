import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './components/Products';

const router = createBrowserRouter([
  {
    path: '',
    element: <HomePage />,
  },
  {
    path: '/products',
    element: <Products />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
