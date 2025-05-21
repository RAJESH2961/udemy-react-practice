import React from 'react';
import { 
  createBrowserRouter, 
  RouterProvider, 
  createRoutesFromElements, 
  Route 
} from 'react-router-dom';

// Component imports
import HomePage from './components/HomePage';
import Products from './components/Products';
import RootLayout from './components/Root';

// -------------------------
// Method-1 (Object based routing) - ACTIVE
// -------------------------
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'products',  // No leading slash needed here
        element: <Products />,
      },
    ],
  }
]);

// -------------------------
// Method-2 (JSX route definitions) - OPTIONAL
// Uncomment below if you want to use this instead of Method-1
// -------------------------

// const routeDefinitions = createRoutesFromElements(
//   <Route path='/' element={<RootLayout />}>
//     <Route index element={<HomePage />} />
//     <Route path='products' element={<Products />} />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
