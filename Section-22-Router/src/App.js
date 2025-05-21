import React from 'react';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import Products from './components/Products';


// // Method-2 for creating routes
// const routeDefinitions = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<HomePage/>} />
//     <Route path='/products' element={<Products/>} />
//   </Route>
// );

// Method -1
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


// Method-2
// const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
