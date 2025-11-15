// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx'; // Your main homepage
import ProjectPage from './components/ProjectPage.jsx'; // Your new project page
import './index.css';

// 1. Define your routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/project/:slug', // This dynamic path matches the slug
    element: <ProjectPage />,
  },
]);

// 2. Render the RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);